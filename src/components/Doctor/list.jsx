import React, { useState, useEffect, useContext } from "react";
import {
  List,
  message,
  Avatar,
  Button,
  Skeleton,
  Row,
  Col,
  Card,
  Spin,
  notification,
} from "antd";
import VirtualList from "rc-virtual-list";
const { Meta } = Card;
import { Web3Context } from "../Web3Context";

const ContainerHeight = 700;

const DoctorsList = () => {
  const web3 = useContext(Web3Context);
  const [loading, setloading] = useState(false);
  const [data, setData] = useState([]);
  const [selectedPatient, setselectedPatient] = useState(null);
  const [isModalOpen, setModal] = useState(false);

  const appendData = async () => {
    setloading(true);
    const web3Instance = await web3();
    const doctorCount = await web3Instance.medify.methods.doctorCount().call();
    const doctors = [];
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

  return (
    <>
      <Row>
        <Col span={18}>
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
                              padding: 100,
                              fontWeight: "bold",
                              color: "darkgreen",
                            }
                          : { padding: 100, fontWeight: "bold", color: "red" }
                      }
                    >
                      {item.state ? "verified " : "Not-Verified "}
                    </div>
                    <Button
                      shape="round"
                      type="primary"
                      onClick={() => {
                        setselectedPatient(item);
                      }}
                    >
                      Detail
                    </Button>
                  </List.Item>
                )}
              </VirtualList>
            )}
          </List>
        </Col>
        <Col span={6}>
          {selectedPatient ? (
            <Card
              style={{ width: 600, marginLeft: 200 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                title="Doctor's Name"
                description={`${selectedPatient.d_Name}`}
              />
              <Meta
                title="Date of Birth"
                description={`${selectedPatient.d_date_of_birth}`}
              />
              <Meta
                title="University name"
                description={`${selectedPatient.university.name}`}
              />
              <Meta
                title="Phone Number"
                description={`${selectedPatient.d_phone_Number}`}
              />
            </Card>
          ) : (
            <Card style={{ width: 600, marginLeft: 200 }}>
              <Meta title="Card title" description="Select Patient" />
            </Card>
          )}
        </Col>
      </Row>
    </>
  );
};
export default DoctorsList;
