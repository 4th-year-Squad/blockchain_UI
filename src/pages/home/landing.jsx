import { Carousel, Row, Col, Card, notification } from "antd";
import HeroImg from "../../assets/images/home.png";
import FooterNew from "../../components/Common/Footer/index.jsx";

import doc1 from "../../assets/images/banner-1.png";
import doc2 from "../../assets/images/homeL.png";
import doc3 from "../../assets/images/verify.png";

import sp1 from "../../assets/images/speciality/specialities-01.png";
import sp2 from "../../assets/images/speciality/specialities-02.png";
import sp3 from "../../assets/images/speciality/specialities-03.png";
import sp4 from "../../assets/images/speciality/specialities-04.png";
import sp5 from "../../assets/images/speciality/specialities-05.png";
import "../Patient/style.css";
import { CheckCircleFilled } from "@ant-design/icons";
import { useCookies } from "react-cookie";

const { Meta } = Card;
const Home = () => {
  const [cookies, setCookies] = useCookies();
  const hasAccount = cookies["hasAccount"];

  // {
  //   hasAccount === "false"
  //     ? notification.error({
  //         message:
  //           "We recognized that you haven't registered in our website! If you are a patient please register as patient or if you are a doctor please contact your univeristy!",
  //       })
  //     : "";
  // }
  return (
    <>
      <div>
        <img src={HeroImg} alt="" width="100%" />
      </div>

      <div>
        <Row
          type="flex"
          align="middle"
          style={{
            alignSelf: "center",
            backgroundColor: "#ffffff",
            marginTop: "0px",
            padding: "0px",
          }}
        >
          <Col flex={12}>
            <div
              style={{ textAlign: "center", padding: 10, marginTop: "100px" }}
            >
              <img src={doc2} alt="" />
            </div>
          </Col>
          <Col flex={12}>
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "100px",
              }}
            >
              <img src={doc1} alt="" />
            </div>
          </Col>
        </Row>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,256L48,234.7C96,213,192,171,288,170.7C384,171,480,213,576,208C672,203,768,149,864,160C960,171,1056,245,1152,261.3C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="specialities-slider slider">
        <Row style={{ padding: 10, margin: 80 }}>
          <Col offset={4}></Col>
          <Col span={4}>
            <div className="speicality-item text-center">
              <div className="speicality-img">
                <img src={sp1} className="img-fluid" alt="Speciality" />
                <span>
                  <span>
                    <CheckCircleFilled />
                  </span>
                </span>
              </div>
              <p>Urology</p>
            </div>
          </Col>
          <Col span={4}>
            <div className="speicality-item text-center">
              <div className="speicality-img">
                <img src={sp2} className="img-fluid" alt="Speciality" />
                <span>
                  <span>
                    <CheckCircleFilled />
                  </span>
                </span>
              </div>
              <p>Neurology</p>
            </div>
          </Col>
          <Col span={4}>
            <div className="speicality-item text-center">
              <div className="speicality-img">
                <img src={sp3} className="img-fluid" alt="Speciality" />
                <span>
                  <span>
                    <CheckCircleFilled />
                  </span>
                </span>
              </div>
              <p>Orthopedic</p>
            </div>
          </Col>
          <Col span={4}>
            <div className="speicality-item text-center">
              <div className="speicality-img">
                <img src={sp4} className="img-fluid" alt="Speciality" />
                <span>
                  <span>
                    <CheckCircleFilled />
                  </span>
                </span>
              </div>
              <p>Cardiologist</p>
            </div>
          </Col>
          <Col span={4}>
            <div className="speicality-item text-center">
              <div className="speicality-img">
                <img src={sp5} className="img-fluid" alt="Speciality" />
                <span>
                  <span>
                    <CheckCircleFilled />
                  </span>
                </span>
              </div>
              <p>Dentist</p>
            </div>
          </Col>
        </Row>

        <Row
          type="flex"
          align="middle"
          style={{
            alignSelf: "center",

            margin: "0px",
            padding: "0px",
          }}
        >
          <Col span={12}>
            <div style={{ textAlign: "center", padding: 100 }}>
              <h1 style={{ fontSize: 32 }}>
                <b>Get verified doctors direct from universities</b>
              </h1>
            </div>
          </Col>
          <Col span={12}>
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={doc3} alt="" width="90%" />
            </div>
          </Col>
        </Row>
      </div>
      <FooterNew />
    </>
  );
};
export default Home;
