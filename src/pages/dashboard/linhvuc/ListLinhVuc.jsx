import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetAllLinhVuc, PostLinhVuc } from 'api/apiLinhVuc';
import { useState, useEffect } from 'react';
import AddBtn from 'components/crud button/AddBtn';
import CRUDLinhVuc from 'components/crud button/crud-by-function/CRUDLinhVuc';

export default function ListLinhVuc() {
  const [linhVuc, setLinhVuc] = useState([]);
  const [error, setError] = useState(null);

  const lableNames = ['Tên Lĩnh Vực'];
  const names = ['ten_linh_vuc'];
  const msgs = ['Xin hãy điền tên lĩnh vực'];

  const fetchData = async () => {
    try {
      const data = await GetAllLinhVuc();
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
    <>
    <div style={{'marginBottom': '12px'}}>
      <AddBtn lableNames={lableNames} names={names} msgs={msgs} apiPost={PostLinhVuc} inputsNo={1} handleUpdateList={handleUpdateList} />
    </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Tên Lĩnh Vực</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {linhVuc.map((row) => (
              <TableRow key={row.maLinhVuc} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right">{row.maLinhVuc}</TableCell>
                <TableCell align="right">{row.tenLinhVuc}</TableCell>
                <CRUDLinhVuc handleUpdateList={handleUpdateList} id={row.maLinhVuc} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
