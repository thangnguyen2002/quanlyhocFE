import React, { useState } from 'react';
import { Button, Modal, Flex } from 'antd';
import { Form, Input, message } from 'antd';

const SendEmailBtn = (props) => {
  const { lableNames, names, msgs, PostMailLienHe, inputsNo, handleUpdateList, id, email } = props;
  const [fieldData, setFieldData] = useState({
    nguoi_nhan: email,
    tieu_de: '',
    noi_dung: ''
  });
  const [openAdd, setOpenAdd] = useState(false);

  const showModalAdd = () => {
    setFieldData({
      nguoi_nhan: email,
      tieu_de: '',
      noi_dung: ''
    });
    setOpenAdd(true);
  };

  const handleOkAdd = async () => {
    try {
      // Cập nhật UI trước khi gọi API
    setOpenAdd(false); // Đóng modal ngay lập tức
    message.loading({ content: 'Đang gửi email...', key: 'sending' }); // Hiển thị thông báo "Đang gửi email..."

    const result = await PostMailLienHe(fieldData);
    console.log('Success:', result);
    
    message.success({ content: 'Gửi email thành công', key: 'sending' }); // Thông báo thành công
    setFieldData({}); // Reset field data sau khi thêm thành công
    } catch (error) {
      console.error('Error:', error);
      message.error('Gửi email thất bại');
    }

    setOpenAdd(false);
  };

  const handleCancelAdd = () => {
    setOpenAdd(false);
  };

  const handleInputChange = (e, name) => {
    setFieldData((prevData) => ({
      ...prevData,
      [name]: e.target.value
    }));
  };

  return (
    <>
      <Flex gap="small">
        <Button type="primary" onClick={showModalAdd}>
          Gửi Email
        </Button>
      </Flex>
      <Modal open={openAdd} onOk={handleOkAdd} onCancel={handleCancelAdd}>
          <h3 style={{'frontWeight': '500px'}}>
            Nhập nội dung email gửi tới <em style={{'frontWeight': '700px'}}>{email}</em>
          </h3>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          {Array.from({ length: inputsNo }, (_, index) => (
            <Form.Item key={index} label={lableNames[index]} name={names[index]} rules={[{ required: true, message: msgs[index] }]}>
              <Input onChange={(e) => handleInputChange(e, names[index])} />
            </Form.Item>
          ))}
        </Form>
      </Modal>
    </>
  );
};

export default SendEmailBtn;
