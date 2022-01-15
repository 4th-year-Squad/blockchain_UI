import { useState, useContext, useEffect } from "react";
import { Layout, Card, Avatar, Row, Col, Statistic, Button, Spin } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import PatientList from "../../components/Patient/list.jsx";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "../Doctors/style.css";
import img1 from "../../assets/images/icon-01.png";
import img2 from "../../assets/images/icon-02.png";
import img3 from "../../assets/images/icon-03.png";
import { Link } from "react-router-dom";
import { UserAddOutlined } from "@ant-design/icons";
import { Web3Context } from "../../components/Web3Context.js";
import { useParams } from "react-router";

const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;

const DoctorLanding = () => {
  const web3 = useContext(Web3Context);
  const [patientCount, setPatientCount] = useState(0);
  const [doctorCount, setDoctorCount] = useState(0);
  const [univeristyCount, setUniveristyCount] = useState(0);
  const [currentDoctor, setCurrentDoctor] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const appendData = async () => {
    const web3Instance = await web3();

    const patientCount = await web3Instance.medify.methods
      .patientCount()
      .call();
    const doctorCount = await web3Instance.medify.methods.doctorCount().call();
    const uiniveristyCount = await web3Instance.medify.methods
      .universityCount()
      .call();

    const doctor = await web3Instance.medify.methods
      .getDoctorDetails(id)
      .call();

    setCurrentDoctor(doctor);
    setPatientCount(patientCount);
    setUniveristyCount(uiniveristyCount);
    setDoctorCount(doctorCount);
    setLoading(false);
  };

  useEffect(() => {
    appendData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
          color: "transparent",
          height: "70vh",
        }}
      >
        <Spin tip="Loading ..." />
      </div>
    );
  }
  return (
    <>
      <Layout style={{ margin: "50px 50px 0px 50px" }}>
        <Sider width={500} style={{ backgroundColor: "#F0F2F5" }}>
          <Card
            style={{ width: 500 }}
            cover={
              <img
                alt="example"
                src="https://d29fhpw069ctt2.cloudfront.net/icon/image/59461/preview.svg"
              />
            }
            // actions={[
            //   <SettingOutlined key="setting" />,
            //   <EditOutlined key="edit" />,
            //   <EllipsisOutlined key="ellipsis" />,
            // ]}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Meta
                // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={currentDoctor._name}
                description={currentDoctor._speciality}
              />
              {console.log(currentDoctor, "qwertyuiop")}
              <div
                style={
                  currentDoctor._state
                    ? {
                        padding: 6,
                        marginLeft: "auto",
                        fontWeight: "bold",
                        color: "darkgreen",
                        borderColor: "green",
                        border: "1px solid",
                        borderRadius: 30,
                        width: "120px",
                        textAlign: "center",
                      }
                    : {
                        padding: 6,
                        marginLeft: "auto",
                        fontWeight: "bold",
                        color: "red",
                        borderColor: "pink",
                        border: "1px solid",
                        borderRadius: 30,
                        textAlign: "center",
                        width: "120px",
                      }
                }
              >
                {currentDoctor._state ? "verified " : "Not-Verified "}
              </div>
            </div>
          </Card>
        </Sider>
        <Layout>
          <Header style={{ backgroundColor: "#F0F2F5", height: 220 }}>
            <Row>
              <Col offset={1}></Col>
              <Col span={6}>
                <Card
                  style={{
                    backgroundColor: "#FBFAF0",
                    borderRadius: "20px",
                    overflow: "hidden",
                    borderColor: "yellow",
                  }}
                >
                  <div className="circle-bar circle-bar1">
                    <div className="circle-graph1" data-percent="75">
                      <img src={img1} className="img-fluid" alt="patient" />
                    </div>
                  </div>
                  <Statistic
                    title="Total Patients"
                    value={patientCount}
                    precision={0}
                    valueStyle={{ color: "#3f8600" }}
                  />
                </Card>
              </Col>
              <Col offset={2}></Col>
              <Col span={6}>
                <Card
                  style={{
                    backgroundColor: "#FFE9EE",
                    borderRadius: "20px",
                    overflow: "hidden",
                    borderColor: "pink",
                  }}
                >
                  <div className="circle-bar circle-bar1">
                    <div className="circle-graph1" data-percent="75">
                      <img src={img2} className="img-fluid" alt="patient" />
                    </div>
                  </div>
                  <Statistic
                    title="Total Univeristies"
                    value={univeristyCount}
                    precision={0}
                    valueStyle={{ color: "#3f8600" }}
                  />
                </Card>
              </Col>
              <Col offset={2}></Col>
              {/* <Col span={4}>
                <Card
                  style={{
                    backgroundColor: "#E3F7EC",
                    borderRadius: "20px",
                    overflow: "hidden",
                    borderColor: "green",
                    height: "154px",
                  }}
                >
                  <div className="circle-bar circle-bar1">
                    <div className="circle-graph1" data-percent="75">
                     
                      <UserAddOutlined style={{ fontSize: 30 }} />
                    </div>
                  </div>
                  <div>Add Patient</div>
                  <Link to="/RegisterPatient">
                    <Button
                      shape="round"
                      style={{
                        backgroundColor: "#2DE0FC",
                        marginTop: "20px",
                      }}
                    >
                      Add Patient
                    </Button>
                  </Link>
                </Card>
              </Col> */}
              <Col offset={2}></Col>
              <Col></Col>
            </Row>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <Row>
              <Col offset={2}></Col>
              <Col span={18}>
                <div>
                  <h1>
                    <b>Patients list</b>
                  </h1>
                </div>

                <PatientList />
              </Col>
              <Col offset={4}></Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default DoctorLanding;
