import { Carousel, Row, Col, Card } from "antd";
import { ReactDOM } from "react";
import HeroImg from "../../assets/images/phero.png";
import FooterNew from "../../components/Common/Footer/index.jsx";
import doc1 from "../../assets/images/doc1.jpg";
import doc2 from "../../assets/images/doc2.jpg";
import doc3 from "../../assets/images/doc3.jpg";
import sp1 from "../../assets/images/speciality/specialities-01.png";
const { Meta } = Card;
import "../Patient/style.css";
import DoctorsList from "../../components/Doctor/list.jsx";
import { CheckCircleFilled } from "@ant-design/icons";
const patientLanding = () => {
  return (
    <>
      <div>
        <img src={HeroImg} alt="" width="100%" />
      </div>
      <div style={{ textAlign: "center", padding: 100 }}>
        <h1 style={{ fontSize: 32 }}>
          <b>What are you looking for?</b>{" "}
        </h1>
      </div>
      <div>
        <Row type="flex" style={{ alignItems: "center" }} justify="center">
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
                <Meta
                  title="Prescriptions"
                  description="Directly given by doctors."
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
                  title="University to be part of this system"
                  description="www.instagram.com"
                />
              </Card>
            </div>
          </Col>
        </Row>
      </div>

      <div className="specialities-slider slider">
        <Row style={{ padding: 20, margin: 80 }}>
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
        <Row>
          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              textAlign: "center",
              paddingTop: 50,
              display: "block",
            }}
          >
            <h1 style={{ fontSize: 32 }}>Our currently available doctors</h1>
            <h2 style={{ margin: "50px 300px 100px 300px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur officia, ratione dicta suscipit sapiente atque vitae
              eum. Placeat, totam sapiente ab repellendus ea, eos quibusdam iste
              explicabo eligendi cumque accusamus!
            </h2>
            <Col style={{ margin: "10px" }}>
              <DoctorsList />
            </Col>
          </div>
        </Row>
      </div>
      <FooterNew />
    </>
  );
};
export default patientLanding;
