import React from 'react';

const FormItems = (props) => {
  const { lableName, name, msg, apiPost } = props;
  const [funcName, setFuncName] = useState('');

  return (
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
      <Input onChange={(e) => setFuncName(e.target.value)} />
    </Form.Item>
  );
};

export default FormItems;
