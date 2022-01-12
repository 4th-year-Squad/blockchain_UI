import { Carousel, Row, Col, Card } from "antd";
import { ReactDOM } from "react";
import HeroImg from "../../assets/images/slide1.jpg";
import FooterNew from "../../components/Common/Footer/index.jsx";
import doc1 from "../../assets/images/doc1.jpg";
import doc2 from "../../assets/images/doc2.jpg";
import doc3 from "../../assets/images/doc3.jpg";
import sp1 from "../../assets/images/speciality/specialities-01.png";
const { Meta } = Card;
import "../Patient/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import DoctorsList from "../../components/Doctor/list.jsx";

const patientLanding = () => {
  return (
    <>
      <div>
        <img src={HeroImg} alt="" />
      </div>
      <div style={{ textAlign: "center", padding: 100 }}>
        <h1>What are you looking for? </h1>
      </div>
      <div>
        <Row type="flex" align="middle" style={{ alignSelf: "center" }}>
          <Col flex={8}>
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                hoverable
                style={{ width: 500 }}
                cover={<img alt="example" src={doc1} />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
          </Col>
          <Col flex={8}>
            <div>
              <Card
                hoverable
                style={{ width: 500 }}
                cover={<img alt="example" src={doc2} />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
          </Col>
          <Col flex={8}>
            <div>
              <Card
                hoverable
                style={{ width: 500 }}
                cover={<img alt="example" src={doc3} />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
          </Col>
        </Row>
      </div>

      <div className="specialities-slider slider">
        <Row>
          <Col offset={4}></Col>
          <Col span={4}>
            <div className="speicality-item text-center">
              <div className="speicality-img">
                <img src={sp1} className="img-fluid" alt="Speciality" />
                <span>
                  <FontAwesomeIcon icon={["fal", "coffee"]} />
                </span>
              </div>
              <p>Urology</p>
            </div>
          </Col>
          <Col span={4}>
            <div className="speicality-item text-center">
              <div className="speicality-img">
                <img src={sp1} className="img-fluid" alt="Speciality" />
                <span>
                  <i className="fa fa-circle" aria-hidden="true"></i>
                </span>
              </div>
              <p>Neurology</p>
            </div>
          </Col>
          <Col span={4}>
            <div className="speicality-item text-center">
              <div className="speicality-img">
                <img src={sp1} className="img-fluid" alt="Speciality" />
                <span>
                  <i className="fa fa-circle" aria-hidden="true"></i>
                </span>
              </div>
              <p>Orthopedic</p>
            </div>
          </Col>
          <Col span={4}>
            <div className="speicality-item text-center">
              <div className="speicality-img">
                <img src={sp1} className="img-fluid" alt="Speciality" />
                <span>
                  <i className="fa fa-circle" aria-hidden="true"></i>
                </span>
              </div>
              <p>Cardiologist</p>
            </div>
          </Col>
          <Col span={4}>
            <div className="speicality-item text-center">
              <div className="speicality-img">
                <img src={sp1} className="img-fluid" alt="Speciality" />
                <span>
                  <i className="fa fa-circle" aria-hidden="true"></i>
                </span>
              </div>
              <p>Dentist</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <DoctorsList />
          </Col>
        </Row>
      </div>
      <FooterNew />
    </>
  );
};
export default patientLanding;
