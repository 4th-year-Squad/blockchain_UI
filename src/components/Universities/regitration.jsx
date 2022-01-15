import {
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  message,
  notification,
} from "antd";
import imageRegister from "../../assets/images/univ.png";
import { Web3Context } from "../Web3Context.js";
import { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router";
import { async } from "regenerator-runtime";

const RegisterUniversity = () => {
  const web3 = useContext(Web3Context);
  const [selected, setselected] = useState("Addis Ababa");
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  function handleChange(selectedValue) {
    setselected(selectedValue);
    console.log(`selected ${selectedValue}`);
  }
  const onFinish = async (values) => {
    setLoading(true);
    const web3Context = await web3();
    console.log(web3Context);
    console.log(Object.values(values), selected);
    const account = await web3Context.accounts;
    const res = await web3Context.medify.methods
      .setUniversities(values._uId, values._name, values._president, selected)
      .send({ from: account[0] })
      .once("receipt", (receipt) => {
        setLoading(false);
        notification.success({
          message: `University Regisetered Successfully! Transaction hash: ${receipt.transactionHash}`,
        });
        setRedirect("/moh");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { Option } = Select;

  if (redirect) {
    return <Redirect exact to="/moh" />;
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
                label="University ID: "
                name="_uId"
                rules={[
                  {
                    required: true,
                    message: "Please enter university Id !",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Name of University"
                name="_name"
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
                name="_president"
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
                <Button loading={loading} type="primary" htmlType="submit">
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
