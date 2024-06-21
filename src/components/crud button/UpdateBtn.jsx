import React, { useState,useEffect } from 'react';
import { Button, Modal, Flex } from 'antd';
import { Form, Input } from 'antd';

const UpdateBtn = (props) => {
  const { lableNames, names, msgs, apiPost, apiFindById, inputsNo, handleUpdateList, id } = props;
  const [fieldData, setFieldData] = useState({});
  const [openUpdate, setOpenUpdate] = useState(false);
  const [preFilledForm, setPreFilledForm] = useState({});
  const [form] = Form.useForm();

  useEffect(() => {
    if (openUpdate && id) {
      showModalUpdate();
    }
  }, [openUpdate, id]);

  const showModalUpdate = async () => {
    try {
      const result = await apiFindById(id);

      // Extract the first property dynamically
      const firstKey = Object.keys(result)[0];
      const { [firstKey]: _, ...dataWithoutId } = result;
      // console.log(dataWithoutId);

      form.setFieldsValue(dataWithoutId); // Set all fields except 'id' with data from `result`
      setPreFilledForm(dataWithoutId); // Optionally store pre-filled form data in state
      setOpenUpdate(true);
      message.success('Cập nhật thành công');
    } catch (error) {
      console.error('Error fetching data:', error);
      message.error('Cập nhật thất bại');
    }
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
      [name]: e.target.value
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
          form={form}
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
          initialValues={preFilledForm} // Use initialValues to pre-fill form fields
          autoComplete="off"
        >
          {Array.from(
            { length: inputsNo },
            (
              _,
              index //loops input numbers
            ) => (
              <Form.Item
                key={index}
                label={lableNames[index]}
                name={names[index] + index} // Ensure names are unique by appending index
                rules={[
                  {
                    required: true,
                    message: msgs[index]
                  }
                ]}
              >
                {/* {console.log('preFilledForm[names[index]]: ', preFilledForm[names[index]])}
                {console.log('preFilledForm: ', preFilledForm)} */}
                <Input onChange={(e) => handleInputChange(e, names[index])} />
              </Form.Item>
            )
          )}
        </Form>
      </Modal>
    </>
  );
};

export default UpdateBtn;
