import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Pagination } from 'antd';
import CRUDKhoaHoc from 'components/crud button/crud-by-function/CRUDKhoaHoc';
import AddBtn from 'components/crud button/AddBtn';
import { GetAllKhoaHoc, PostKhoaHoc } from 'api/apiKhoaHoc';

export default function ListKhoaHoc() {
  const [khoaHoc, setKhoaHoc] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  const pageSize = 10;

  const lableNames = [
    'Tên Khóa học',
    'Học phí',
    'Số buổi',
    'Ghi chú',
    'Nội dung khóa học',
    'Nội dung tóm tắt',
    'Mã lĩnh vực'
  ];
  const names = [
    'ten_khoa_hoc',
    'hoc_phi',
    'so_buoi',
    'ghi_chu',
    'noi_dung_khoa_hoc',
    'noi_dung_tom_tat_khoa_hoc',
    'ma_linh_vuc'
  ];
  const msgs = [
    'Xin hãy điền tên khóa học',
    'Xin hãy điền học phí',
    'Xin hãy điền số buổi',
    'Xin hãy điền ghi chú',
    'Xin hãy điền nội dung khóa học',
    'Xin hãy điền nội dung tóm tắt khóa học',
    'Xin hãy điền mã lĩnh vực'
  ];

  const fetchData = async (page = 1) => {
    try {
      const data = await GetAllKhoaHoc(page - 1, pageSize);
      setKhoaHoc(data.khoaHocList);
      setTotalPages(data.totalPages);
      setCurrentPage(page);
    } catch (error) {
      setError(error);
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleUpdateList = () => {
    fetchData(currentPage);
  };

  const handlePageChange = (page) => {
    fetchData(page);
  };

  return (
    <>
      <div style={{ marginBottom: '12px' }}>
        <AddBtn
          lableNames={lableNames}
          names={names}
          msgs={msgs}
          apiPost={PostKhoaHoc}
          inputsNo={7}
          handleUpdateList={handleUpdateList}
        />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Tên Khóa học</TableCell>
              <TableCell align="right">Học phí</TableCell>
              <TableCell align="right">Số buổi</TableCell>
              <TableCell align="right">Ghi chú</TableCell>
              <TableCell align="right">Nội dung khóa học</TableCell>
              <TableCell align="right">Nội dung tóm tắt</TableCell>
              <TableCell align="right">Lĩnh vực</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {khoaHoc.map((row) => (
              <TableRow key={row.maKhoaHoc} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right">{row.maKhoaHoc}</TableCell>
                <TableCell align="right">{row.tenKhoaHoc}</TableCell>
                <TableCell align="right">{row.hocPhi}</TableCell>
                <TableCell align="right">{row.soBuoi}</TableCell>
                <TableCell align="right">{row.ghiChu}</TableCell>
                <TableCell align="right">{row.noiDungKhoaHoc}</TableCell>
                <TableCell align="right">{row.noiDungTomTatKhoaHoc}</TableCell>
                <TableCell align="right">{row.linhVuc.tenLinhVuc}</TableCell>
                <CRUDKhoaHoc handleUpdateList={handleUpdateList} id={row.maKhoaHoc} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalPages * 10}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </>
  );
}
