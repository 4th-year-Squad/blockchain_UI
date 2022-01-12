import { Form, Input, Button, Select, Row, Col, Image } from "antd";
import imageRegister from "../../assets/images/univ.png";

const RegisterUniversity = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <Row align="middle">
        <Col flex={12}>
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
                  <b>University Registration</b>
                </h2>
              </div>
              <Form.Item
                label="Name of University"
                name="NameofUniversity"
                rules={[
                  {
                    required: true,
                    message: "Please input name of University!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="President "
                name="president"
                rules={[
                  {
                    required: true,
                    message: "Please enter your president !",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Region">
                <Select
                  defaultValue="Addis Ababa"
                  style={{ width: 120 }}
                  onChange={handleChange}
                >
                  <Option value="Addis Ababa">Addis Ababa</Option>
                  <Option value="Oromia">Oromia</Option>
                  <Option value="Amhara">Amhara</Option>
                  <Option value="Tigray">Tigray</Option>
                  <Option value="Sidama">Sidama</Option>
                  <Option value="Afar">Afar</Option>
                  <Option value="Benshangul">Benshangul</Option>
                  <Option value="Gambela">Gambela</Option>
                  <Option value="South Nations">South Nations</Option>
                  <Option value="Somali">Somali</Option>
                </Select>
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

export default RegisterUniversity;
