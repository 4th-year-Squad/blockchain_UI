import { Form, Input, Button, Checkbox, Row, Col, DatePicker } from "antd";
import imageRegister from "../../assets/images/register.png";
import "../Doctor/registerDoctor.css";

const RegisterDoctor = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input a username!" },
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
                    message: "Please input your a number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Date of Birth">
                <DatePicker />
              </Form.Item>
              <Form.Item
                label=" speciality"
                name="Speciality"
                rules={[
                  {
                    required: true,
                    message: "Please input a speciality!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please input  password!" }]}
              >
                <Input.Password />
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

export default RegisterDoctor;
