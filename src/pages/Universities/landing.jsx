import { Carousel, Row, Col, Card, Button } from "antd";
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
import { CheckCircleFilled } from "@ant-design/icons";

import { Link } from "react-router-dom";
const UniversityLanding = () => {
  return (
    <>
      <div>
        <img src={HeroImg} alt="" />
      </div>
      <Link to="/RegisterDoctor">
        <div
          style={{
            fontSize: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <Button
            shape="round"
            size="large"
            style={{ backgroundColor: "#2DE0FC" }}
          >
            Add Doctors
          </Button>
        </div>
      </Link>
      <div style={{ textAlign: "center", padding: 100 }}>
        <h1>Register your Doctors</h1>
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
                  title="Doctors"
                  description="Directly and specialists verified by MOH."
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
                <Meta title="specialists" description="" />
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
                <Meta title="Doctors" description="www.instagram.com" />
              </Card>
            </div>
          </Col>
        </Row>
      </div>

      <div className="specialities-slider slider">
        <Row style={{ marginTop: "100px" }}>
          <Col offset={4}></Col>
          <Col span={4}>
            <div className="speicality-item text-center">
              <div className="speicality-img">
                <img src={sp1} className="img-fluid" alt="Speciality" />
                <span>
                  <CheckCircleFilled />
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
                  <CheckCircleFilled />
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
                  <CheckCircleFilled />
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
                  <CheckCircleFilled />
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
                  <CheckCircleFilled />
                </span>
              </div>
              <p>Dentist</p>
            </div>
          </Col>
        </Row>
      </div>
      <FooterNew />
    </>
  );
};
export default UniversityLanding;
