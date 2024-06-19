import React, { useState } from 'react';
import { Button, Modal, Flex } from 'antd';
import { Form, Input } from 'antd';

const AddBtn = (props) => {
  const { lableNames, names, msgs, apiPost, inputsNo, handleUpdateList } = props;
  const [fieldData, setFieldData] = useState({});
  const [openAdd, setOpenAdd] = useState(false);

  const showModalAdd = () => {
    setOpenAdd(true);
  };

  const handleOkAdd = async () => {
    try {
      const result = await apiPost(fieldData);
      console.log('Success:', result);
      if (handleUpdateList) {
        handleUpdateList(result); // Gọi hàm onSuccess và truyền dữ liệu mới vào
      }
      setFieldData({}); // Reset field data sau khi thêm thành công
    } catch (error) {
      console.error('Error:', error);
    }

    setOpenAdd(false);
  };

  const handleCancelAdd = () => {
    setOpenAdd(false);
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
        <Button style={{'background': '#4dc972', 'color': 'white', 
          'border': 'none', 'outline':'none', 'padding': '5px 20px'}} onClick={showModalAdd}>
          Thêm
        </Button>
      </Flex>
      <Modal open={openAdd} onOk={handleOkAdd} onCancel={handleCancelAdd}>
        <h2>Thêm bản ghi</h2>
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

export default AddBtn;
