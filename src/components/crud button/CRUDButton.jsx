import React, { useState } from 'react';
import { Button, Modal, Flex } from 'antd';
import AddBtn from './AddBtn';
import DeleteBtn from './DeleteBtn';
import UpdateBtn from './UpdateBtn';
import './CRUDButton.scss';
import { DeleteChucVu, PostChucVu, UpdateChucVu } from 'api/LinhVuc/apiChucVu';

const CRUDButton = ({ handleUpdateList, id }) => {
  const lableNames = ['Tên Chức Vụ', 'Trạng Thái'];
  const names = ['ten_chuc_vu', 'trang_thai'];
  const msgs = ['Xin hãy điền tên chức vụ', 'Xin hãy điền tên trạng thái'];

  return (
    <div style={{ marginLeft: '70px', marginTop: '10px' }}>
      <Flex gap="small" style={{ display: 'flex', gap: '15px' }}>
        <AddBtn lableNames={lableNames} names={names} msgs={msgs} apiPost={PostChucVu} inputsNo={2} handleUpdateList={handleUpdateList} />
        <UpdateBtn lableNames={lableNames} names={names} msgs={msgs} apiPost={UpdateChucVu} inputsNo={2} handleUpdateList={handleUpdateList} id={id}/>
        <DeleteBtn apiPost={DeleteChucVu} handleUpdateList={handleUpdateList} id={id}/>
      </Flex>
    </div>
  );
};

export default CRUDButton;
