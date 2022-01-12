import React, { useState, useEffect } from "react";
import { List, message, Avatar, Button, Skeleton, Row, Col, Card } from "antd";
import VirtualList from "rc-virtual-list";
const { Meta } = Card;

const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 700;

const DoctorsList = () => {
  const [data, setData] = useState([]);
  const [selectedPatient, setselectedPatient] = useState(null);
  const [isModalOpen, setModal] = useState(false);

  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
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
        <Col span={14}>
          <div style={{ textAlign: "center" }}>
            <h1>
              <b>List of Doctors</b>
            </h1>
          </div>
          <List>
            <VirtualList
              data={data}
              height={ContainerHeight}
              itemHeight={47}
              itemKey="email"
              onScroll={onScroll}
            >
              {(item) => (
                <List.Item key={item.email}>
                  <List.Item.Meta
                    s
                    avatar={<Avatar src={item.picture.large} />}
                    title={<a href="https://ant.design">{item.name.last}</a>}
                    description={item.email}
                  />
                  <Button
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
          </List>
        </Col>
        <Col span={10}>
          {selectedPatient ? (
            <Card
              style={{ width: 500, marginLeft: 200 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                title="Patient Name"
                description={`${selectedPatient.name.last}`}
              />
              <Meta
                title="Date of Birth"
                description="This is the description"
              />
              <Meta
                title="Prescription"
                description="This is the description"
              />
              <Meta title="Doctors" description="This is the description" />
              <Meta title="" description="This is the description" />
              <Button style={{ padding: 5, margin: "20px" }}>
                Add Patient History
              </Button>
            </Card>
          ) : (
            <Card style={{ width: 500, marginLeft: 200 }}>
              <Meta title="Card title" description="Select Patient" />
            </Card>
          )}
        </Col>
      </Row>
    </>
  );
};
export default DoctorsList;
