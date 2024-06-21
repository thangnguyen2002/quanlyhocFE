import React, { useEffect, useState } from 'react';
import { Flex } from 'antd';
import UpdateBtn from '../UpdateBtn';
import DeleteBtn from '../DeleteBtn';
import { GetLienHeById, DeleteLienHe, PostMailLienHe } from 'api/apiLienHe';
import SendEmailBtn from '../SendEmail';

const CRUDLienHe = ({ handleUpdateList, id }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const res = await GetLienHeById(id);
        setEmail(res.email);
      } catch (error) {
        console.error('Error fetching email:', error);
      }
    };

    fetchEmail();
  }, [id]);

  const lableNames = [
    'Tiêu Đề',
    'Nội Dung'
  ];
  const names = [
    'tieu_de',
    'noi_dung',
  ];
  const msgs = [
    'Xin hãy điền tiêu đề',
    'Xin hãy điền nội dung'
  ];

  return (
    <div style={{ marginLeft: '70px', marginTop: '10px' }}>
      <Flex gap="small" style={{ display: 'flex', gap: '15px' }}>
        <SendEmailBtn lableNames={lableNames} names={names} msgs={msgs} PostMailLienHe={PostMailLienHe}
          apiFindById={GetLienHeById} inputsNo={2} id={id} email={email} />
        <DeleteBtn
          apiPost={DeleteLienHe}
          handleUpdateList={handleUpdateList}
          id={id}
        />
      </Flex>
    </div>
  );
};

export default CRUDLienHe;
