import React, { useState, useEffect, useContext } from "react";
import { List, message, Avatar, Button, Spin, Row, Col, Card } from "antd";
import VirtualList from "rc-virtual-list";
import AddHistory from "./history.jsx";
import { Web3Context } from "../Web3Context";
import { Redirect } from "react-router";
const { Meta } = Card;

const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 700;

const PatientList = () => {
  const web3 = useContext(Web3Context);
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
          <div style={{ textAlign: "center" }}>
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
                  <List.Item key={item._paId}>
                    <List.Item.Meta
                      // avatar={<Avatar src={item.picture.large} />}
                      title={<a href="https://ant.design">{item._paName}</a>}
                      description={item._paPhoneNumber}
                    />
                    <Button
                      shape="round"
                      type="primary"
                      onClick={() => {
                        setselectedPatient(item);
                      }}
                    >
                      Detail
                    </Button>
                  </List.Item>
                )}
              </VirtualList>
            )}
          </List>
        </Col>
        <Col span={10}>
          {selectedPatient ? (
            <>
              <Card
                style={{ width: 500, marginLeft: 200 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                <Meta
                  title="Patient's Name"
                  description={`${selectedPatient._paName}`}
                />
                <Meta
                  title="Date of Birth"
                  description={`${selectedPatient._paDateOfBirth}`}
                />
                <Meta
                  title="BloodType"
                  description={`${selectedPatient.pa_blood_type}`}
                />
                <Meta
                  title="Phone Number"
                  description={`${selectedPatient._paPhoneNumber}`}
                />
                <Meta
                  title="Symptoms"
                  description={selectedPatient._paRecords.map((e) => (
                    <div>{`${e.split("/")[0]}`} </div>
                  ))}
                />
                <Meta
                  title="Prescriptions"
                  description={selectedPatient._paRecords.map((e) => (
                    <div>{`${e.split("/")[1]}`} </div>
                  ))}
                />
                <Button
                  shape="round"
                  style={{ padding: 5, margin: "20px" }}
                  onClick={() => setModal(true)}
                >
                  Add Patient History
                </Button>
              </Card>
              <AddHistory
                isOpen={isModalOpen}
                onClose={() => setModal(false)}
                patient={selectedPatient}
                handleSubmit={handleSubmit}
              />
            </>
          ) : (
            <Card style={{ width: 500, marginLeft: 200 }}>
              <Meta title="Card title" description="Select Patient" />
            </Card>
          )}
        </Col>
      </Row>
      {console.log(selectedPatient)}
    </>
  );
};
export default PatientList;
