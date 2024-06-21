import React, { useState } from 'react';
import { Button, Modal, Flex } from 'antd';
import '../CRUDButton.scss'
import { DeletePhongHoc, GetPhongHocById, UpdatePhongHoc } from 'api/apiPhongHoc';
import UpdateBtn from '../UpdateBtn';
import DeleteBtn from '../DeleteBtn';

const CRUDPhongHoc = ({ handleUpdateList, id }) => {
  const lableNames = ['Ghi Chú', 'Số chỗ ngồi', 'Tên Phòng Học'];
  const names = ['ghi_chu', 'so_cho_ngoi', 'ten_phong_hoc'];
  const msgs = ['Xin hãy điền ghi chú', 'Xin hãy điền số chỗ ngồi', 'Xin hãy điền tên phòng học'];

  return (
    <div style={{ marginLeft: '70px', marginTop: '10px' }}>
      <Flex gap="small" style={{ display: 'flex', gap: '15px' }}>
        <UpdateBtn lableNames={lableNames} names={names} msgs={msgs} apiPost={UpdatePhongHoc}
        apiFindById={GetPhongHocById} inputsNo={3} handleUpdateList={handleUpdateList} id={id}/>
        <DeleteBtn apiPost={DeletePhongHoc} handleUpdateList={handleUpdateList} id={id}/>
      </Flex>
    </div>
  );
};

export default CRUDPhongHoc;
