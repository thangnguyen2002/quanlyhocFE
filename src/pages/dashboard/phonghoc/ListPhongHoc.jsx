import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Pagination } from 'antd';
import CRUDPhongHoc from 'components/crud button/crud-by-function/CRUDPhongHoc';
import AddBtn from 'components/crud button/AddBtn';
import { GetAllPhongHoc, PostPhongHoc } from 'api/apiPhongHoc';

export default function ListPhongHoc() {
  const [phongHoc, setPhongHoc] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0); // Thay đổi từ totalItems thành totalPages
  const [error, setError] = useState(null);

  const pageSize = 10; // Số lượng bản ghi trên mỗi trang

  const lableNames = ['Ghi Chú', 'Số chỗ ngồi', 'Tên Phòng Học'];
  const names = ['ghi_chu', 'so_cho_ngoi', 'ten_phong_hoc'];
  const msgs = ['Xin hãy điền ghi chú', 'Xin hãy điền số chỗ ngồi', 'Xin hãy điền tên phòng học'];

  const fetchData = async (page = 1) => { // Điều chỉnh page mặc định từ 0 thành 1
    try {
      const data = await GetAllPhongHoc(page - 1, pageSize); // Truyền page - 1 để phù hợp với API

      setPhongHoc(data.phongHocList);
      setTotalPages(data.totalPages); // Thay đổi thành totalPages

      setCurrentPage(page);
    } catch (error) {
      setError(error);
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Chỉ fetch data khi component được mount

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleUpdateList = () => {
    fetchData(currentPage); // Gọi lại fetchData để cập nhật danh sách sau khi thêm mới thành công
  };

  const handlePageChange = (page) => {
    fetchData(page);
  };
  console.log('total:', totalPages);
  console.log('size:', pageSize);

  return (
    <>
      <div style={{ marginBottom: '12px' }}>
        <AddBtn
          lableNames={lableNames}
          names={names}
          msgs={msgs}
          apiPost={PostPhongHoc}
          inputsNo={3}
          handleUpdateList={handleUpdateList}
        />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Tên Phòng học</TableCell>
              <TableCell align="right">Số chỗ ngồi</TableCell>
              <TableCell align="right">Ghi chú</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {phongHoc.map((row) => (
              <TableRow key={row.maPhongHoc} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right">{row.maPhongHoc}</TableCell>
                <TableCell align="right">{row.tenPhongHoc}</TableCell>
                <TableCell align="right">{row.soChoNgoi}</TableCell>
                <TableCell align="right">{row.ghiChu}</TableCell>
                <CRUDPhongHoc handleUpdateList={handleUpdateList} id={row.maPhongHoc} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalPages*10} // Sử dụng totalPages thay vì totalItems
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </>
  );
}
