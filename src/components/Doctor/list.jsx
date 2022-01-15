import React, { useState, useEffect, useContext } from "react";
import {
  List,
  message,
  Popconfirm,
  Button,
  Divider,
  Row,
  Col,
  Card,
  Spin,
  notification,
} from "antd";
import VirtualList from "rc-virtual-list";
import { Web3Context } from "../Web3Context";
import { useCookies } from "react-cookie";

const { Meta } = Card;

const ContainerHeight = 700;

const DoctorsList = () => {
  const web3 = useContext(Web3Context);
  const [loading, setloading] = useState(false);
  const [data, setData] = useState([]);
  const [selectedDoctor, setselectedDoctor] = useState(null);
  const [isModalOpen, setModal] = useState(false);
  const [cookies, setCookies] = useCookies();

  const appendData = async () => {
    setloading(true);
    const web3Instance = await web3();
    const doctorCount = await web3Instance.medify.methods.doctorCount().call();

    const doctors = [];
    console.log(doctorCount, "ajsda");
    for (let i = 1; i <= doctorCount; i++) {
      let doctor = await web3Instance.medify.methods.DoctorList(i).call();
      doctor.university = await web3Instance.medify.methods
        .UniversityInfo(doctor.universities)
        .call();
      doctors.push(doctor);
    }
    setData(doctors);
    notification.open({ message: `${doctors.length}  doctors loaded!` });
    setloading(false);
    // fetch(fakeDataUrl)
    //   .then((res) => res.json())
    //   .then((body) => {
    //     setData(data.concat(body.results));
    //   });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop === ContainerHeight) {
      appendData();
    }
  };
  const text = "Are you sure to change doctor's state";

  async function confirm() {
    setloading(true);
    const web3Instance = await web3();
    console.log(selectedDoctor.dr_Id, !selectedDoctor.state);
    await web3Instance.medify.methods
      .updateDoctorState(selectedDoctor.dr_Id, !selectedDoctor.state)
      .send({ from: "0x12987F47574D86565532Ed272C0d08E7C3550c65" })
      .once("receipt", (receipt) => {
        window.location.reload();
        setloading(false);
        notification.success({ message: "Doctor state updated!" });
      });

    message.info("Clicked on Yes.");
  }
  return (
    <>
      <Row>
        <Col span={16}>
          <div style={{ textAlign: "center" }}>
            <h1>
              <b>List of Doctors</b>
            </h1>
          </div>

          <List>
            {loading ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Spin tip="Loading doctors" />
              </div>
            ) : (
              <VirtualList
                data={data}
                height={ContainerHeight}
                itemHeight={47}
                itemKey="email"
                onScroll={onScroll}
              >
                {(item) => (
                  <>
                    <List.Item key={item.dr_Id}>
                      <List.Item.Meta
                        // avatar={<Avatar src={item.picture.large} />}
                        title={<a href="https://ant.design">{item.d_Name}</a>}
                        description={item.d_speciality}
                      />

                      <div
                        style={
                          item.state
                            ? {
                                padding: 6,
                                marginRight: "100px",
                                fontWeight: "bold",
                                color: "darkgreen",
                                borderColor: "green",
                                border: "1px solid",
                                borderRadius: 30,
                              }
                            : {
                                padding: 6,
                                marginRight: "100px",
                                fontWeight: "bold",
                                color: "red",
                                borderColor: "pink",
                                border: "1px solid",
                                borderRadius: 30,
                              }
                        }
                      >
                        {item.state ? "Verified " : "Not-Verified "}
                      </div>
                      <Button
                        shape="round"
                        type="primary"
                        onClick={() => {
                          setselectedDoctor(item);
                        }}
                      >
                        Detail
                      </Button>
                    </List.Item>
                    <Divider />
                  </>
                )}
              </VirtualList>
            )}
          </List>
        </Col>
        <Col span={6}>
          {selectedDoctor ? (
            <Card
              style={{ width: 400, margin: 100 }}
              cover={
                <img
                  alt="example"
                  src="https://d29fhpw069ctt2.cloudfront.net/icon/image/59461/preview.svg"
                />
              }
            >
              <div style={{ fontSize: 18 }}>
                <span style={{ color: "#09E5AB" }}>Doctor's Name: </span>
                <span>{`${selectedDoctor.d_Name}`}</span>
              </div>
              <div style={{ fontSize: 18 }}>
                <span style={{ color: "#09E5AB" }}>Date of Birth: </span>
                <span>{`${selectedDoctor.d_date_of_birth}`}</span>
              </div>
              <div style={{ fontSize: 18 }}>
                <span style={{ color: "#09E5AB" }}>University name: </span>
                <span>{`${selectedDoctor.university.name}`}</span>
              </div>
              <div style={{ fontSize: 18 }}>
                <span style={{ color: "#09E5AB" }}>Phone Number: </span>
                <span>{`${selectedDoctor.d_phone_Number}`}</span>
              </div>
              {cookies["user"] === "moh" ? (
                <Popconfirm
                  placement="topLeft"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button
                    shape="round"
                    style={{
                      backgroundColor: "#2DE0FC",
                      padding: "10",
                      margin: "20px",
                      borderColor: "#2DE0FC",
                      position: "absolute",
                      right: 0,
                      top: 0,
                    }}
                  >
                    {cookies["isVerified"] === "false"
                      ? "Verify Doctor"
                      : "Revoke certificate"}
                  </Button>
                </Popconfirm>
              ) : (
                ""
              )}
            </Card>
          ) : (
            <Card
              style={{
                width: 500,
                marginLeft: 100,
                borderColor: "pink",
                borderRadius: "25px",
              }}
            >
              <Meta
                title="No Doctor Selected"
                description="View Detail of one patient"
              />
            </Card>
          )}
        </Col>
        <Col span={16}></Col>
      </Row>
    </>
  );
};
export default DoctorsList;
