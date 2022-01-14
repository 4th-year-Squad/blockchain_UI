import { Layout, Card, Avatar, Row, Col, Statistic, Button } from "antd";
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

const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;

const DoctorLanding = () => {
  return (
    <>
      <Layout>
        <Sider width={500} style={{ backgroundColor: "#F0F2F5" }}>
          <Card
            style={{ width: 500 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Sider>
        <Layout>
          <Header style={{ backgroundColor: "#F0F2F5", height: 220 }}>
            <Row>
              <Col offset={1}></Col>
              <Col span={4}>
                <Card>
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
                <Card>
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
                <Card>
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
                <Card>
                  <div>
                    <UserAddOutlined style={{ fontSize: 30 }} />
                  </div>
                  <Link to="/RegisterPatient">
                    <Button shape="round" type="primary">
                      Add Patient
                    </Button>
                  </Link>
                </Card>
              </Col>
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
