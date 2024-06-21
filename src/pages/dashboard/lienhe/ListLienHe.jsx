import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Pagination } from 'antd';
import CRUDLienHe from 'components/crud button/crud-by-function/CRUDLienHe';
import AddBtn from 'components/crud button/AddBtn';
import { GetAllLienHe } from 'api/apiLienHe';

export default function ListLienHe() {
  const [lienHe, setLienHe] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  const pageSize = 10;

  const fetchData = async (page = 1) => {
    try {
      const data = await GetAllLienHe(page - 1, pageSize);
      setLienHe(data.lienHeList);
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
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Họ Tên</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Số Điện Thoại</TableCell>
              <TableCell align="right">Ngày Liên Hệ</TableCell>
              <TableCell align="right">Ý Kiến</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lienHe.map((row) => (
              <TableRow key={row.maKhach} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right">{row.maKhach}</TableCell>
                <TableCell align="right">{row.hoTen}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.soDienThoai}</TableCell>
                <TableCell align="right">{row.ngayLienHe}</TableCell>
                <TableCell align="right">{row.ykien}</TableCell>
                <CRUDLienHe handleUpdateList={handleUpdateList} id={row.maKhach} />
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
