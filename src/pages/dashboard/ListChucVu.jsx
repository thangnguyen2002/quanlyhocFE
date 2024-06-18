import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CRUDButton from 'components/crud button/CRUDButton';
import { GetAllChucVu } from 'api/LinhVuc/apiChucVu';
import { useState, useEffect } from 'react';

export default function ListChucVu() {
  const [linhVuc, setLinhVuc] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await GetAllChucVu();
      console.log('data: ', data);
      setLinhVuc(data);
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
    fetchData(); // Gọi lại fetchData để cập nhật danh sách sau khi thêm mới thành công
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Tên Chức Vụ</TableCell>
            <TableCell align="right">Trạng Thái</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {linhVuc.map((row) => (
            <TableRow key={row.maChucVu} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="right">{row.maChucVu}</TableCell>
              <TableCell align="right">{row.tenChucVu}</TableCell>
              <TableCell align="right">{row.trangThai}</TableCell>
              <CRUDButton handleUpdateList={handleUpdateList} id={row.maChucVu}/>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
