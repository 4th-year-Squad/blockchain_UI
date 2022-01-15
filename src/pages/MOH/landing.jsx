import { useContext, useEffect, useState } from "react";
import { Layout, Card, Avatar, Row, Col, Button, Statistic } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/icon-01.png";
import img2 from "../../assets/images/icon-02.png";
import img3 from "../../assets/images/icon-03.png";
import DoctorsList from "../../components/Doctor/list.jsx";
import { Web3Context } from "../../components/Web3Context";

const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;

const MOHLanding = () => {
  const web3 = useContext(Web3Context);
  const [patientCount, setPatientCount] = useState(0);
  const [doctorCount, setDoctorCount] = useState(0);
  const [univeristyCount, setUniveristyCount] = useState(0);

  useEffect(() => {
    appendData();
  }, []);

  const appendData = async () => {
    const web3Instance = await web3();

    const patientCount = await web3Instance.medify.methods
      .patientCount()
      .call();
    const doctorCount = await web3Instance.medify.methods.doctorCount().call();
    const uiniveristyCount = await web3Instance.medify.methods
      .universityCount()
      .call();

    setPatientCount(patientCount);
    setUniveristyCount(uiniveristyCount);
    setDoctorCount(doctorCount);
  };
  return (
    <>
      <Layout style={{ marginTop: "0px", backgroundColor: "#ffffff" }}>
        <Layout style={{ marginTop: "0px" }}>
          <Header style={{ height: 300, backgroundColor: "#ffffff" }}>
            <Row style={{ paddingTop: "80px" }}>
              <Col offset={1}></Col>
              <Col span={4}>
                <Card
                  style={{
                    backgroundColor: "#FBFAF0",
                    borderRadius: "20px",
                    overflow: "hidden",
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
              <Col span={4}>
                <Card
                  style={{
                    backgroundColor: "#FFE9EE",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <div className="circle-bar circle-bar1">
                    <div className="circle-graph1" data-percent="75">
                      <img src={img2} className="img-fluid" alt="patient" />
                    </div>
                  </div>
                  <Statistic
                    title="Total Doctors"
                    value={doctorCount}
                    precision={0}
                    valueStyle={{ color: "#3f8600" }}
                  />
                </Card>
              </Col>
              <Col offset={2}></Col>
              <Col span={4}>
                <Card
                  style={{
                    backgroundColor: "#E3F7EC",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <div className="circle-bar circle-bar1">
                    <div className="circle-graph1" data-percent="75">
                      <img src={img3} className="img-fluid" alt="patient" />
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
              <Col>
                <Link to="/RegisterUniversities">
                  <Button shape="round" style={{ borderColor: "#2DE0FC" }}>
                    Add Universities
                  </Button>
                </Link>
              </Col>
            </Row>
          </Header>
          <Content style={{ margin: "0px 16px 0", backgroundColor: "white" }}>
            <Row>
              <Col offset={2}></Col>
              <Col span={18}>
                <DoctorsList />
              </Col>
              <Col offset={4}></Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MOHLanding;
