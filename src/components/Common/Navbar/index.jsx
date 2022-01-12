import { Layout, Menu, Image, Row, Col } from "antd";
import imageSrc from "../../../assets/images/logo.png";
const { Header, theme } = Layout;
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Header style={{ backgroundColor: "white" }}>
      <Row>
        <Col span={10}>
          <img src={imageSrc} width={200} />
        </Col>
        <Col span={14}>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item style={{}} key={0}>
              <Link to="/patient"> Patients</Link>
            </Menu.Item>
            <Menu.Item style={{}} key={1}>
              <Link to="/doctor"> Doctors</Link>
            </Menu.Item>
            <Menu.Item style={{}} key={2}>
              <Link to="/moh"> MOH</Link>
            </Menu.Item>
            <Menu.Item style={{}} key={3}>
              <Link to="/univesities">Universities</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;
