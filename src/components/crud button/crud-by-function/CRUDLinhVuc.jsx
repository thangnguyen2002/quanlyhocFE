import React, { useState } from 'react';
import { Button, Modal, Flex } from 'antd';
import '../CRUDButton.scss'
import { DeleteLinhVuc, GetLinhVucById, UpdateLinhVuc } from 'api/apiLinhVuc';
import UpdateBtn from '../UpdateBtn';
import DeleteBtn from '../DeleteBtn';

const CRUDLinhVuc = ({ handleUpdateList, id }) => {
  const lableNames = ['Tên Lĩnh Vực'];
  const names = ['ten_linh_vuc'];
  const msgs = ['Xin hãy điền tên lĩnh vực'];

  return (
    <div style={{ marginLeft: '70px', marginTop: '10px' }}>
      <Flex gap="small" style={{ display: 'flex', gap: '15px' }}>
        <UpdateBtn lableNames={lableNames} names={names} msgs={msgs} apiPost={UpdateLinhVuc}
        apiFindById={GetLinhVucById} inputsNo={1} handleUpdateList={handleUpdateList} id={id}/>
        <DeleteBtn apiPost={DeleteLinhVuc} handleUpdateList={handleUpdateList} id={id}/>
      </Flex>
    </div>
  );
};

export default CRUDLinhVuc;
