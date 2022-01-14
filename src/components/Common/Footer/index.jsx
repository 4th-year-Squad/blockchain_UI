import { Layout, Row, Col } from "antd";
import "../Footer/style.css";
import logo from "../../../assets/images/lofoFooter.png";

const { Header, Content, Footer } = Layout;

const FooterNew = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 300"
        style={{ marginBottom: "-30px", padding: "0px" }}
      >
        <path
          fill="#15558D"
          fill-opacity="1"
          d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,240C1120,256,1280,256,1360,256L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <Footer className="footer" style={{ backgroundColor: "#15558d" }}>
        <Row>
          <Col span={8}>
            <div className="footer-widget footer-about">
              <div className="footer-logo">
                <img src={logo} width={180} alt="logo" />
              </div>
              <div className="footer-about-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
    </>
  );
};

export default FooterNew;
