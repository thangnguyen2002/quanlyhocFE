import React, { useState } from 'react';
import { Button, Modal, Flex } from 'antd';
import '../CRUDButton.scss'
import { DeleteChucVu, GetChucVuById, UpdateChucVu } from 'api/apiChucVu';
import UpdateBtn from '../UpdateBtn';
import DeleteBtn from '../DeleteBtn';

const CRUDChucVu = ({ handleUpdateList, id }) => {
  const lableNames = ['Tên Chức Vụ', 'Trạng Thái'];
  const names = ['ten_chuc_vu', 'trang_thai'];
  const msgs = ['Xin hãy điền tên chức vụ', 'Xin hãy điền tên trạng thái'];

  return (
    <div style={{ marginLeft: '70px', marginTop: '10px' }}>
      <Flex gap="small" style={{ display: 'flex', gap: '15px' }}>
        <UpdateBtn lableNames={lableNames} names={names} msgs={msgs} apiPost={UpdateChucVu}
        apiFindById={GetChucVuById} inputsNo={2} handleUpdateList={handleUpdateList} id={id}/>
        <DeleteBtn apiPost={DeleteChucVu} handleUpdateList={handleUpdateList} id={id}/>
      </Flex>
    </div>
  );
};

export default CRUDChucVu;
