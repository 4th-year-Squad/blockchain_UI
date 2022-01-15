import React, { useState, useEffect, useContext } from "react";
import { List, message, Divider, Button, Spin, Row, Col, Card } from "antd";
import VirtualList from "rc-virtual-list";
import AddHistory from "./history.jsx";
import { Web3Context } from "../Web3Context";
import { Redirect } from "react-router";
import { CheckCircleTwoTone } from "@ant-design/icons";
import profile from "../../assets/images/profile.png";
import { useCookies } from "react-cookie";
const { Meta } = Card;

const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 700;

const PatientList = () => {
  const web3 = useContext(Web3Context);
  const [cookies, setCookies] = useCookies();
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedPatient, setselectedPatient] = useState();
  const [isModalOpen, setModal] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const appendData = async () => {
    setloading(true);
    const web3Instance = await web3();
    const patinetCount = await web3Instance.medify.methods
      .patientCount()
      .call();
    const patients = [];
    for (let i = 1; i <= patinetCount; i++) {
      let patient = await web3Instance.medify.methods
        .getPatientDetailsById(i)
        .call();

      patients.push(patient);
    }
    setData(patients);
    message.success(`${patients.length}  patients loaded!`);
    setloading(false);
  };

  const handleSubmit = async (values) => {
    setloading(true);
    const web3Context = await web3();
    const account = await web3Context.accounts;
    const res = await web3Context.medify.methods
      .setHealthRecordsDetails(
        values._paName,
        values._paId,
        values._prescription,
        values._symptom,
        `${values._symptom}/${values._prescription}`
      )
      .send({ from: account[0] })
      .once("receipt", (receipt) => {
        message.success(
          ` Patient History Added Successfully! Transaction hash: ${receipt.transactionHash}`
        );
        setRedirect("/doctor");
      });
    console.log(res, "response");
    // setselectedPatient();
    setloading(false);
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop === ContainerHeight) {
      appendData();
    }
  };

  if (redirect) {
    return <Redirect exact to="/doctor" />;
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin tip="Loading" />
      </div>
    );
  }

  return (
    <>
      <Row>
        <Col span={14}>
          <div style={{ textAlign: "center", fontSize: 25 }}>
            <h1>
              <b>List of Patients</b>
            </h1>
          </div>
          <List>
            {loading ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Spin tip="Loading patients" />
              </div>
            ) : (
              <VirtualList
                data={data}
                height={ContainerHeight}
                itemHeight={47}
                itemKey="email"
                onScroll={onScroll}
              >
                {(item) => (
                  <>
                    <List.Item key={item._paId}>
                      <List.Item.Meta
                        // avatar={<Avatar src={item.picture.large} />}
                        title={<a href="https://ant.design">{item._paName}</a>}
                        description={item._paPhoneNumber}
                      />
                      <Button
                        shape="round"
                        onClick={() => {
                          setselectedPatient(item);
                        }}
                        style={{ borderColor: "#2DE0FC" }}
                      >
                        Detail
                      </Button>
                    </List.Item>
                    <Divider />
                  </>
                )}
              </VirtualList>
            )}
          </List>
        </Col>
        <Col span={10}>
          {selectedPatient ? (
            <>
              <Card
                style={{ width: 450, marginLeft: 100 }}
                cover={<img width="100px" alt="example" src={profile} />}
              >
                <div style={{ fontSize: 18 }}>
                  <span style={{ color: "#09E5AB" }}>Patient's Name: </span>
                  <span>{`${selectedPatient._paName}`}</span>
                </div>
                <div style={{ fontSize: 18 }}>
                  <span style={{ color: "#09E5AB" }}>Date of Birth: </span>
                  <span>{`${selectedPatient._paDateOfBirth}`}</span>
                </div>
                <div style={{ fontSize: 18 }}>
                  <span style={{ color: "#09E5AB" }}>Blood Type: </span>
                  <span
                    style={{ color: "red" }}
                  >{`${selectedPatient._paBloodType}`}</span>
                </div>
                <div style={{ fontSize: 18 }}>
                  <span style={{ color: "#09E5AB" }}>Phone Number: </span>
                  <span>{`${selectedPatient._paPhoneNumber}`}</span>
                </div>

                <div style={{ fontSize: 18 }}>
                  <span style={{ color: "#09E5AB" }}>Symptoms</span>
                  <span>
                    {selectedPatient._paRecords.map((e) => (
                      <div style={{ borderColor: "#2DE0FC" }}>
                        {`${e.split("/")[0]}`}
                      </div>
                    ))}
                  </span>
                </div>

                <div style={{ fontSize: 18 }}>
                  <span style={{ color: "#09E5AB" }}>Prescriptions</span>
                  <span>
                    {selectedPatient._paRecords.map((e) => (
                      <div style={{ borderColor: "#2DE0FC" }}>
                        <CheckCircleTwoTone twoToneColor="#52c41a" />
                        {`${e.split("/")[1]}`}
                      </div>
                    ))}
                  </span>
                </div>
                {cookies["user"] === "doctor" &&
                cookies["isVerified"] === "true" ? (
                  <Button
                    shape="round"
                    style={{
                      backgroundColor: "#2DE0FC",
                      padding: "10",
                      margin: "20px",
                      borderColor: "#2DE0FC",
                      position: "absolute",
                      right: 0,
                      top: 0,
                    }}
                    onClick={() => setModal(true)}
                  >
                    Add Patient History
                  </Button>
                ) : (
                  ""
                )}
              </Card>

              <AddHistory
                isOpen={isModalOpen}
                onClose={() => setModal(false)}
                patient={selectedPatient}
                handleSubmit={handleSubmit}
              />
            </>
          ) : (
            <Card
              style={{
                width: 500,
                marginLeft: 100,
                borderColor: "pink",
                borderRadius: "25px",
              }}
            >
              <Meta
                title="No Patient Selected"
                description="View detail of one patient"
              />
            </Card>
          )}
        </Col>
      </Row>
      {console.log(selectedPatient)}
    </>
  );
};
export default PatientList;
