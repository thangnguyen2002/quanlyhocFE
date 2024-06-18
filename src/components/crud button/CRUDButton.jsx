import React, { useState } from 'react';
import { Button, Modal, Flex } from 'antd';
import AddBtn from './AddBtn';
import DeleteBtn from './DeleteBtn';
import UpdateBtn from './UpdateBtn';
import './CRUDButton.scss'
import { PostLinhVuc } from 'api/LinhVuc/apiLinhVuc';

const CRUDButton = () => {
  return (
    <div style={{'marginLeft': '70px', 'marginTop': '10px'}}>
    <Flex gap="small" style={{'display': 'flex', 'gap': '15px'}}>
      <AddBtn lableName={'Tên Lĩnh Vực'}
      name = {'tenlinhvuc'}
      msg = {'Xin hãy điền tên lĩnh vực'}
      apiPost = {PostLinhVuc}
      inputsNo = {1}
      />
      <UpdateBtn/>
      <DeleteBtn/>
    </Flex>
    </div>
  );
};

export default CRUDButton;
