import React from 'react';
import { Button, Modal, message } from 'antd';

const DeleteBtn = ({ apiPost, handleUpdateList, id }) => {
  const [openDelete, setOpenDelete] = React.useState(false);

  const showModalDelete = () => {
    setOpenDelete(true);
  };

  const handleOkDelete = async () => {
    try {
      await apiPost(id); // Pass id as parameter to the delete function
      message.success('Xóa thành công');
      if (handleUpdateList) {
        handleUpdateList(); // Gọi hàm cập nhật danh sách
      }
    } catch (error) {
      console.error('Xóa thất bại:', error);
      message.error('Xóa thất bại');
    }

    setOpenDelete(false);
  };

  const handleCancelDelete = () => {
    setOpenDelete(false);
  };

  return (
    <>
      <Button type="primary" danger onClick={showModalDelete}>
        Xóa
      </Button>
      <Modal
        title="Xác nhận xóa"
        open={openDelete}
        onOk={handleOkDelete}
        onCancel={handleCancelDelete}
        okText="Xóa"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xóa bản ghi này?</p>
      </Modal>
    </>
  );
};

export default DeleteBtn;
