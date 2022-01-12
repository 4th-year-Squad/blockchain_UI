import { Layout, Row, Col } from "antd";
import "../Footer/style.css";
import logo from "../../../assets/images/lofoFooter.png";

const { Header, Content, Footer } = Layout;

const FooterNew = () => {
  return (
    <Footer className="footer" style={{ backgroundColor: "#15558d" }}>
      <Row>
        <Col span={8}>
          <div className="footer-widget footer-about">
            <div className="footer-logo">
              <img src={logo} width={180} alt="logo" />
            </div>
            <div className="footer-about-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="social-icon">
                <ul>
                  <li>
                    <p>h</p>
                  </li>
                  <li>
                    <p>k</p>
                  </li>
                  <li>
                    <p>k</p>
                  </li>
                  <li>
                    <p>p</p>
                  </li>
                  <li>
                    <p>k</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="footer-widget footer-about">
            <div className="footer-logo">
              <img src={logo} width={180} alt="logo" />
            </div>
            <div className="footer-about-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="social-icon">
                <ul>
                  <li>
                    <p>h</p>
                  </li>
                  <li>
                    <p>k</p>
                  </li>
                  <li>
                    <p>k</p>
                  </li>
                  <li>
                    <p>p</p>
                  </li>
                  <li>
                    <p>k</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="footer-widget footer-about">
            <div className="footer-logo">
              <img src={logo} width={180} alt="logo" />
            </div>
            <div className="footer-about-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="social-icon">
                <ul>
                  <li>
                    <p>h</p>
                  </li>
                  <li>
                    <p>k</p>
                  </li>
                  <li>
                    <p>k</p>
                  </li>
                  <li>
                    <p>p</p>
                  </li>
                  <li>
                    <p>k</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterNew;
