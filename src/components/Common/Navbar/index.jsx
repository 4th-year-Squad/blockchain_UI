import { Layout, Menu, Button, Row, Col } from "antd";
import imageSrc from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const { Header, theme } = Layout;

const Navbar = () => {
  const [cookies, setCookie] = useCookies();

  return (
    <Header style={{ backgroundColor: "white", height: 120 }}>
      <Row style={{ paddingTop: "50px" }}>
        <Col span={10}>
          <img src={imageSrc} width={200} />
        </Col>
        <Col span={10}>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item style={{}} key={0}>
              <Link to="/"> Home</Link>
            </Menu.Item>
            {cookies["user"] === "patient" || cookies["user"] === "doctor" ? (
              <Menu.Item style={{}} key={1}>
                <Link to="/patient"> Patients</Link>
              </Menu.Item>
            ) : (
              ""
            )}

            <Menu.Item style={{}} key={2}>
              <Link to="/doctor"> Doctors</Link>
            </Menu.Item>
            <Menu.Item style={{}} key={3}>
              <Link to="/moh"> MOH</Link>
            </Menu.Item>
            <Menu.Item style={{}} key={4}>
              <Link to="/univesities">Universities</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={4}>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item style={{}} key={4}>
              <Link to="/RegisterPatient">
                <Button shape="round" style={{ borderColor: "#2BF1C3" }}>
                  Register as a patient
                </Button>
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;
