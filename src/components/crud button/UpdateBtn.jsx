import React, { useState } from 'react';
import { Button, Modal, Flex } from 'antd';
import { Form, Input } from 'antd';

const UpdateBtn = (props) => {
  const { lableNames, names, msgs, apiPost, inputsNo, handleUpdateList, id } = props;
  const [fieldData, setFieldData] = useState({});
  const [openUpdate, setOpenUpdate] = useState(false);

  const showModalUpdate = () => {
    setOpenUpdate(true);
  };

  const handleOkUpdate = async () => {
    try {
      const result = await apiPost(id, fieldData);
      console.log('Success:', result);
      if (handleUpdateList) {
        handleUpdateList(result); // Gọi hàm onSuccess và truyền dữ liệu mới vào
      }
      setFieldData({}); // Reset field data sau khi thêm thành công
    } catch (error) {
      console.error('Error:', error);
    }

    setOpenUpdate(false);
  };

  const handleCancelUpdate = () => {
    setOpenUpdate(false);
  };

  const handleInputChange = (e, name) => {
    setFieldData({
      ...fieldData,
      [name]: e.target.value,
    });
  };

  return (
    <>
      <Flex gap="small">
        <Button type="primary" green onClick={showModalUpdate}>
          Cập nhật
        </Button>
      </Flex>
      <Modal open={openUpdate} onOk={handleOkUpdate} onCancel={handleCancelUpdate}>
        <h2>Cập nhật bản ghi</h2>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          {Array.from({ length: inputsNo }, (_, index) => (
            <Form.Item
              key={index}
              label={lableNames[index]}
              name={names[index]}
              rules={[
                {
                  required: true,
                  message: msgs[index],
                },
              ]}
            >
              <Input onChange={(e) => handleInputChange(e, names[index])} />
            </Form.Item>
          ))}
        </Form>
      </Modal>
    </>
  );
};

export default UpdateBtn;
