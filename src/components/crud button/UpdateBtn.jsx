import React, { useState } from 'react';
import { Button, Modal, Flex } from 'antd';

const UpdateBtn = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const showModalUpdate = () => {
    setOpenUpdate(true);
  };
  const handleUpdate = () => {
    setOpenUpdate(false);
  };
  const handleCancelUpdate = () => {
    setOpenUpdate(false);
  };

  return (
    <>
    <Flex gap="small">
      <Button style={{'background': '#6dbda3', 'color': '#fff'}} onClick={showModalUpdate}>
        Cập nhật
      </Button>
    </Flex>
      <Modal
        open={openUpdate}
        onOk={handleUpdate}
        onCancel={handleCancelUpdate}
      >
        <p>Cập nhật bản ghi</p>
      </Modal>
      </>
  );
};

export default UpdateBtn;
;
