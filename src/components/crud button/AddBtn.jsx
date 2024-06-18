import React, { useState } from 'react';
import { Button, Modal, Flex } from 'antd';
import { Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const AddBtn = (props) => {
  const { lableName, name, msg, apiPost, inputsNo } = props;
  const [fieldData, setFieldData] = useState('');
  const [openAdd, setOpenAdd] = useState(false);
  const showModalAdd = () => {
    setOpenAdd(true);
  };
  const handleOkAdd = async () => {
    try {
      const result = await apiPost(fieldData);
      console.log('Success:', result);
      // Xử lý kết quả trả về, ví dụ: thông báo thành công, làm sạch form, v.v.
    } catch (error) {
      console.error('Error:', error);
      // Xử lý lỗi
    }

    setOpenAdd(false);
  };
  const handleCancelAdd = () => {
    setOpenAdd(false);
  };

  return (
    <>
      <Flex gap="small">
        <Button type="primary" onClick={showModalAdd}>
          Thêm
        </Button>
      </Flex>
      <Modal open={openAdd} onOk={handleOkAdd} onCancel={handleCancelAdd}>
        <h2>Thêm bản ghi</h2>
        <Form
          name="basic"
          labelCol={{
            span: 8
          }}
          wrapperCol={{
            span: 16
          }}
          style={{
            maxWidth: 600
          }}
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {Array.from({ length: inputsNo }, (_, index) => (
            <Form.Item
            label={lableName}
            name={name}
            rules={[
              {
                required: true,
                message: msg
              }
            ]}
          >
            <Input onChange={(e) => setFieldData(e.target.value)} />
          </Form.Item>
          ))}
        </Form>
      </Modal>
    </>
  );
};

export default AddBtn;
