import { Form, Input, Button, Radio, Row, Col, Image, DatePicker } from "antd";
import imageRegister from "../../assets/images/register.png";

const RegisterPatient = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
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
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="PhoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item label="Date of Birth">
                <DatePicker />
              </Form.Item>
              <Form.Item label="Blood type">
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={1}>A+</Radio>
                  <Radio value={2}>A-</Radio>
                  <Radio value={3}>B+</Radio>
                  <Radio value={4}>B-</Radio>
                  <Radio value={5}>AB+</Radio>
                  <Radio value={6}>AB-</Radio>
                  <Radio value={7}>O+</Radio>
                  <Radio value={8}>O-</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
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
