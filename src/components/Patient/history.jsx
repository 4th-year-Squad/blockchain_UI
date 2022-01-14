import { useEffect, useState, useContext } from "react";
import { Modal, Form, Input, Button, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Web3Context } from "../Web3Context.js";

const AddHistory = ({ isOpen, onClose, patient, handleSubmit }) => {
  const web3 = useContext(Web3Context);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [currentPatient, setCurrentPatient] = useState();

  return (
    <>
      <Modal
        title="Add Parient History"
        visible={isOpen}
        onOk={handleSubmit}
        footer={[]}
      >
        <Form initialValues={{ ...patient }} onFinish={handleSubmit}>
          <Form.Item name="_paName">
            <Input
              size="large"
              placeholder={`${patient ? patient.pa_Name : ""}`}
              disabled
            />
          </Form.Item>
          <Form.Item name="_paId" rules={[]}>
            <Input
              size="large"
              placeholder={`${patient ? patient.pa_Id : ""}`}
              disabled
            />
          </Form.Item>
          <Form.Item
            name="_symptom"
            rules={[
              { required: true, message: "Please input patient symptoms!" },
            ]}
          >
            <Input.TextArea rows={5} placeholder="symptoms" />
          </Form.Item>
          <Form.Item
            name="_prescription"
            rules={[
              {
                required: true,
                message: "Please input patient prescriptions!",
              },
            ]}
          >
            <Input.TextArea rows={5} placeholder="Add prescriptions" />
          </Form.Item>

          <Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "150px" }}
              >
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddHistory;
