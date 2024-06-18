import React, { useState } from 'react';
import { Button, Modal, Flex } from 'antd';

const DeleteBtn = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const showModalDelete = () => {
    setOpenDelete(true);
  };
  const handleDelete = () => {
    setOpenDelete(false);
  };
  const handleCancelDelete = () => {
    setOpenDelete(false);
  };

  return (
    <>
    <Flex gap="small">
      <Button type='primary' danger onClick={showModalDelete}>
        Xoá
      </Button>
    </Flex>
      <Modal
        open={openDelete}
        onOk={handleDelete}
        onCancel={handleCancelDelete}
      >
        <p>Xoá bản ghi</p>
      </Modal>
      </>
  );
};

export default DeleteBtn;
;
