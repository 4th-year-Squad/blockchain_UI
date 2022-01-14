import { Layout, Card, Avatar, Row, Col, Button, Statistic } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import img1 from "../../assets/images/icon-01.png";
import img2 from "../../assets/images/icon-02.png";
import img3 from "../../assets/images/icon-03.png";
const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;
import { Link } from "react-router-dom";
import DoctorsList from "../../components/Doctor/list.jsx";

const MOHLanding = () => {
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
                    value={43}
                    precision={0}
                    valueStyle={{ color: "#3f8600" }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
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
                    title="Your Patients"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: "#3f8600" }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
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
                    title="Active"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: "#3f8600" }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
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
