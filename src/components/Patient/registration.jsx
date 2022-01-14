import {
  Form,
  Input,
  Button,
  Radio,
  Row,
  Col,
  Image,
  DatePicker,
  message,
} from "antd";
import imageRegister from "../../assets/images/register.png";
import { Web3Context } from "../Web3Context.js";
import { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router";

const RegisterPatient = () => {
  const web3 = useContext(Web3Context);
  const [bloodType, setBloodType] = useState("A+");
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const birthDate = new Date(values._paDateOfBirth).getTime();
    const web3Context = await web3();
    console.log(web3Context);
    console.log(Object.values(values));
    const account = await web3Context.accounts;
    const res = await web3Context.medify.methods
      .setPatientDetails(
        account[0],
        values._paName,
        values._paPhoneNumber,
        bloodType,
        birthDate
      )
      .send({ from: account[0] })
      .once("receipt", (receipt) => {
        setLoading(false);
        message.success(
          `Patient Regisetered Successfully! Transaction hash: ${receipt.transactionHash}`
        );
        setRedirect("/");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setBloodType(e.target.value);
  };

  if (redirect) {
    return <Redirect exact to="/" />;
  }
  return (
    <>
      <Row type="flex" align="middle">
        <Col span={12}>
          <Image width={800} src={imageRegister} />
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
                  <b>Patient Registration</b>
                </h2>
              </div>
              <Form.Item
                label="Username"
                name="_paName"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="_paPhoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Date of Birth" name="_paDateOfBirth">
                <DatePicker />
              </Form.Item>
              <Form.Item label="Blood type" name="_paBloodType">
                <Radio.Group onChange={onChange} value={bloodType}>
                  <Radio value={"A+"}>A+</Radio>
                  <Radio value={"A-"}>A-</Radio>
                  <Radio value={"B+"}>B+</Radio>
                  <Radio value={"B-"}>B-</Radio>
                  <Radio value={"AB+"}>AB+</Radio>
                  <Radio value={"AB-"}>AB-</Radio>
                  <Radio value={"O+"}>O+</Radio>
                  <Radio value={"O-"}>O-</Radio>
                </Radio.Group>
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

export default RegisterPatient;
