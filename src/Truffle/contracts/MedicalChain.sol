pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract MedicalChain{

    mapping(address=>Doctor)public DoctorInfo;
    mapping(address=>Patient) publicPatientInfo;
    mapping(address=> mapping(address => HealthRecords))public HealthInfo;
    mapping (address => mapping (address => uint)) private patientToDoctor;
    mapping(address => Universities)public UniversityInfo;



    event DrDetailsAdded(address admin, address doctor);
    event HealthRecordsAdded(address dr, address patient);
    event GrantAccessToDr(address dr, address patient);

    // modifier OnlyOwner(){
    //     require(msg.sender == owner,"ONLY ADMIN IS ALLOWED");
    //     _;
    // }
    
    // modifier Only_Doctors{
    //     require(DoctorInfo[msg.sender].state == true,"REGISTERED DOCTORS ONLY");
    //     _;
    // }
    
    // modifier Only_Patients{
    //     require(PatientInfo[msg.sender].state == true,"REGISTERED PATIENTS ONLY");
    //     _;
    // }
    
    address owner;
    
    constructor() public{
        owner = msg.sender;
    }
    
    struct Doctor{
        bool state; // To check whether the doctor is registered or not
        address dr_Id; // Address of doctor
        string d_Name; // Name of doctor
        string d_phone_Number;
        string d_speciality;
        uint d_date_of_birth;
        address universities;
    }
    
    struct Patient{
        bool state; // To check whether patient is genuine
        address pa_Id; // Address of registered patient
        string pa_Name; // Name of Patient Name
        string[] pa_Records; // Used to store the prescription records of corresponding patients
        string pa_phone_Number;
        string pa_blood_type;
        uint pa_date_of_birth;
    }
    
    struct PrescriptionDetails{
        string symptom;
        string prescription; // prescription details of patient given by doctor
        
    }
    
    struct HealthRecords{
        Doctor d;
        Patient p;
        PrescriptionDetails pre;
        string[] records; // Used to store prescription records of patient w.r.t doctor
    }
    
    struct Universities{
        string name;
        string president;
        string region;
        address _uId
    }
    
    // Function to add Doctor details, done by admin only
    function setDoctorDetails(address _drId,string memory _name,string memory _phone_Number,string memory _speciality, uint _date_of_birth, address _universities) public  {
        DoctorInfo[_drId] = Doctor(false,_drId,_name,_phone_Number,_speciality,_date_of_birth,_universities);
        emit DrDetailsAdded(msg.sender, _drId);
    }
    
    
    
    // Function to get Doctor details for admin
    function getDoctorDetails(address _Id) public OnlyOwner view returns(bool _state,address _drId,string memory _name,string memory _phone_Number,string memory _speciality, uint _date_of_birth){
        _state = DoctorInfo[_Id].state;
        _drId = DoctorInfo[_Id].dr_Id;
        _name = DoctorInfo[_Id].d_Name;
        _phone_Number=DoctorInfo[_Id].d_phone_Number;
        _speciality = DoctorInfo[_Id].d_speciality;
        _date_of_birth=DoctorInfo[_Id].d_date_of_birth;
    }
    
    
    
    // Function to add HealthRecords of patients, done by registered doctors only
    function setHealthRecordsDetails(string memory _paName, address _paId, string memory _prescription) public {
        
        HealthInfo[msg.sender][_paId].d.d_Name = DoctorInfo[msg.sender].d_Name; 
        HealthInfo[msg.sender][_paId].d.dr_Id = DoctorInfo[msg.sender].dr_Id;
        HealthInfo[msg.sender][_paId].p.state = true;
        HealthInfo[msg.sender][_paId].p.pa_Id = _paId;
        HealthInfo[msg.sender][_paId].p.pa_Name = _paName;
        HealthInfo[msg.sender][_paId].pre.prescription = _prescription;
        HealthInfo[msg.sender][_paId].records.push(_prescription);
        PatientInfo[_paId].pa_Records.push(_prescription);
        
        setPatientDetails(HealthInfo[msg.sender][_paId].p.state,HealthInfo[msg.sender][_paId].p.pa_Id,HealthInfo[msg.sender][_paId].p.pa_Name,PatientInfo[_paId].pa_Records,PatientInfo[_paId].pa_phone_Number,PatientInfo[_paId].pa_blood_type,PatientInfo[_paId].pa_date_of_birth);
        emit HealthRecordsAdded(msg.sender, _paId);
    }
    
    
    
    // Function to add Patient details, done by registered doctors only
    function setPatientDetails(bool _state,address _paId,string memory _paName,string[] memory _paRecords,string memory _paPhoneNumber,string memory _paBloodType, uint _paDateOfBirth) public {
        PatientInfo[_paId] = Patient(_state,_paId,_paName,_paRecords,_paPhoneNumber,_paBloodType,_paDateOfBirth);
    }
    
    
    
    // Function to get Patient details
    function getPatientDetails(address _Id) public view returns(bool _state,address _paId,string memory _paName,string[] memory _paRecords,string memory _paPhoneNumber, string memory _PaBloodType, uint _paDateOfBirth ){
       require(PatientInfo[msg.sender].state == true || patientToDoctor[_Id][msg.sender] == 1,"PATIENTS OR ACCESS_GRANTED_DOCTORS ONLY");
        _state = PatientInfo[_Id].state;
        _paId = PatientInfo[_Id].pa_Id;
        _paName = PatientInfo[_Id].pa_Name;
        _paRecords = PatientInfo[_Id].pa_Records;
       _paPhoneNumber = PatientInfo[_Id].pa_phone_Number;
       _PaBloodType = PatientInfo[_Id].pa_blood_type;
       _paDateOfBirth = PatientInfo[_Id].pa_date_of_birth;

       return(
           _state,
           _paId,
           _paName,
           _paRecords,
           _paPhoneNumber,
           _paBloodType,
           _paDateOfBirth
       );
        
    }
    
    
    
    // Function to get HealthRecords only for registered patients
    function getHealthRecords(address _dr) public view returns(string memory _drName, address _drId, string memory _paName, address _paId,string memory _prescription,string[] memory _rec) {
        _drName = HealthInfo[_dr][msg.sender].d.d_Name;
        _drId = HealthInfo[_dr][msg.sender].d.dr_Id;
        _paName = HealthInfo[_dr][msg.sender].p.pa_Name;
        _paId = HealthInfo[_dr][msg.sender].p.pa_Id;
        _prescription = HealthInfo[_dr][msg.sender].pre.prescription;
        _rec = HealthInfo[_dr][msg.sender].records;
        return(
            _drName,
            _drId,
            _paName,
            _prescription,
            _rec
        );
    }



    // Function to grant access to doctor ,so that the doctors with access can view the corresponding patients HealthRecords
    function grantAccessToDoctor(address doctor_id,uint access) public {
    	patientToDoctor[msg.sender][doctor_id] = access;
        emit GrantAccessToDr(doctor_id,msg.sender);
      }
  	
  	
  	
  	// Function to get HealthRecords only for registered Doctors
  	function getHealthRecordsForDoctor(address _paId) public view returns(string memory _drName, address _drId, string memory _paName, address _pId,string memory _prescription,string[] memory _rec){
		// require(patientToDoctor[_paId][msg.sender] == 1,"DR ACCESS NOT GRANTED");
		_drName = HealthInfo[msg.sender][_paId].d.d_Name;
        _drId = HealthInfo[msg.sender][_paId].d.dr_Id;
        _paName = HealthInfo[msg.sender][_paId].p.pa_Name;
        _pId = HealthInfo[msg.sender][_paId].p.pa_Id; 
        _prescription = HealthInfo[msg.sender][_paId].pre.prescription;
        _rec = HealthInfo[msg.sender][_paId].records;
        return(
            _drName,
            _drId,
            _paName,
            _pId,
            _prescription,
            _rec
        );
	}

     function setUniversities(string memory _name,string memory _president,string memory _region) public {
        UniversityInfo[_uId] = Universities(_name,_president,_region);
    }
    function getUniversities(address _uId) public returns(string memory _uniName, string memory _uniPresident, string memory _uniRegion){
        _uniName = UniversityInfo[msg.sender][_uId].name;
        _uniPresident = UniversityInfo[msg.sender][_uId].president;
        _uniRegion = UniversityInfo[msg.sender][_uId].region;
        return(
            _uniName,
            _uniPresident,
            _uniRegion
        );
    }
    

}