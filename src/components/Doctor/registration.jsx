import { Form, Input, Button, message, Row, Col, DatePicker } from "antd";
import imageRegister from "../../assets/images/register.png";
import "../Doctor/registerDoctor.css";
import { Web3Context } from "../Web3Context.js";
import { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router";

const RegisterDoctor = () => {
  const web3 = useContext(Web3Context);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const birthDate = new Date(values._date_of_birth).getTime();
    const web3Context = await web3();
    const account = await web3Context.accounts;
    console.log(account);
    const res = await web3Context.medify.methods
      .setDoctorDetails(
        values._drId,
        values._name,
        values._phone_Number,
        values._speciality,
        birthDate
      )
      .send({ from: account[0] })
      .once("receipt", (receipt) => {
        setLoading(false);
        message.success(
          `Doctor Regisetered Successfully! Transaction hash: ${receipt.transactionHash}`
        );
        setRedirect("/universities");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  if (redirect) {
    return <Redirect exact to="/univesities" />;
  }
  return (
    <>
      <Row type="flex" align="middle">
        <Col span={12}>
          <img width={800} src={imageRegister} />
        </Col>

        <Col span={12} className="registration_form">
          <div
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form
              className="registration_form"
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <h2>
                  <b>Doctor Registration</b>
                </h2>
              </div>
              <Form.Item
                label="Doctor ID: "
                name="_drId"
                rules={[
                  { required: true, message: "Please input a username!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Username"
                name="_name"
                rules={[
                  { required: true, message: "Please input a username!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="_phone_Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your a number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Date of Birth" name="_date_of_birth">
                <DatePicker />
              </Form.Item>
              <Form.Item
                label=" speciality"
                name="_speciality"
                rules={[
                  {
                    required: true,
                    message: "Please input a speciality!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default RegisterDoctor;
