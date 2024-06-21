import React from 'react';
import { Flex } from 'antd';
import UpdateBtn from '../UpdateBtn';
import DeleteBtn from '../DeleteBtn';
import { GetKhoaHocById, UpdateKhoaHoc, DeleteKhoaHoc } from 'api/apiKhoaHoc';

const CRUDKhoaHoc = ({ handleUpdateList, id }) => {
  const lableNames = [
    'Tên Khóa học',
    'Học phí',
    'Số buổi',
    'Ghi chú',
    'Nội dung khóa học',
    'Nội dung tóm tắt',
    'Mã lĩnh vực' // Bổ sung trường mã lĩnh vực
  ];
  const names = [
    'ten_khoa_hoc',
    'hoc_phi',
    'so_buoi',
    'ghi_chu',
    'noi_dung_khoa_hoc',
    'noi_dung_tom_tat_khoa_hoc',
    'ma_linh_vuc' // Bổ sung trường mã lĩnh vực
  ];
  const msgs = [
    'Xin hãy điền tên khóa học',
    'Xin hãy điền học phí',
    'Xin hãy điền số buổi',
    'Xin hãy điền ghi chú',
    'Xin hãy điền nội dung khóa học',
    'Xin hãy điền nội dung tóm tắt khóa học',
    'Xin hãy điền mã lĩnh vực' // Bổ sung thông báo lỗi cho trường mã lĩnh vực
  ];

  return (
    <div style={{ marginLeft: '70px', marginTop: '10px' }}>
      <Flex gap="small" style={{ display: 'flex', gap: '15px' }}>
        <UpdateBtn
          lableNames={lableNames}
          names={names}
          msgs={msgs}
          apiPost={UpdateKhoaHoc}
          apiFindById={GetKhoaHocById}
          inputsNo={7} // Số lượng trường nhập liệu
          handleUpdateList={handleUpdateList}
          id={id}
        />
        <DeleteBtn apiPost={DeleteKhoaHoc} handleUpdateList={handleUpdateList} id={id} />
      </Flex>
    </div>
  );
};

export default CRUDKhoaHoc;
