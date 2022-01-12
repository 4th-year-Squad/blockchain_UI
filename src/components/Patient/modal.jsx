import { Modal, Form, Input, Button, Upload, Typography, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const CreateHistory = ({ isOpen, onClose, patient }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Modal
        title="Create Parient History"
        visible={isOpen}
        onOk={handleSubmit}
        onCancel={onClose}
        footer={[]}
      >
        <Form initialValues={{ patient }} onFinish={handleSubmit}>
          <Form.Item
          
            name="name"
            rules={[
              { required: true, message: "Please enter name of patient!" },
            ]}
          >
            <Input
              size="large"
              placeholder={`${patient ? patient.name.last : ""}`}
              disabled
            />
          </Form.Item>
          <Form.Item
            name="name"
            rules={[
              { required: true, message: "Please enter name of patient!" },
            ]}
          >
            <Input
              size="large"
              placeholder={`${patient ? patient.name.last : ""}`}
              disabled
            />
          </Form.Item>
          <Form.Item
            name="symptoms"
            rules={[
              { required: true, message: "Please input patient symptoms!" },
            ]}
          >
            <Input.TextArea rows={5} placeholder="symptoms" />
          </Form.Item>
          <Form.Item
            name="prescription"
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
      {/* <Modal
        visible={preview.previewVisible}
        title={preview.previewTitle}
        footer={null}
        onCancel={() => setPreview({ previewVisible: false })}
      >
        <img
          alt="example"
          style={{ width: "100%" }}
          src={preview.previewImage}
        />
      </Modal></> */}
    </>
  );
};

export default CreateHistory;
