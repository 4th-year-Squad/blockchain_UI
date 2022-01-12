import { Layout, Card, Avatar, Row, Col, Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Linkx } from "react-router-dom";
const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;
import { Link } from "react-router-dom";
import DoctorsList from "../../components/Doctor/list.jsx";

const MOHLanding = () => {
  return (
    <>
      <Layout>
        <Layout>
          <Header style={{ backgroundColor: "white", height: 220 }}>
            <Row>
              <Col span={4}>
                <Card
                  title="Card title"
                  bordered={false}
                  style={{ width: 300 }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>
              <Col span={4}>
                <Card
                  title="Card title"
                  bordered={false}
                  style={{ width: 300 }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>
              <Col span={4}>
                <Card
                  title="Card title"
                  bordered={false}
                  style={{ width: 300 }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>
              <Col offset={4}></Col>
              <Col>
                <Link to="/RegisterUniversities">
                  <Button type="primary">Add Universities</Button>
                </Link>
              </Col>
            </Row>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <Row>
              <Col offset={2}></Col>
              <Col span={18}>
                <div>
                  <h1>
                    <b>Patinets list</b>
                  </h1>
                </div>

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
