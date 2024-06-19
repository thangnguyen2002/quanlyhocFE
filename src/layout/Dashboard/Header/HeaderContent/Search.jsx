import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import { SearchChucVu } from 'api/LinhVuc/apiChucVu';
import ListChucVu from 'pages/dashboard/ListChucVu';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]); // Initialize with null

  const callSearchApi = async (keyword) => {
    try {
      const newKeyword = keyword.trim().toUpperCase();
      console.log('newKeyword:', newKeyword);
      const data = { keyword: newKeyword };
      const res = await SearchChucVu(data);
      console.log('API Response:', res);
      setSearchResult(res || []); // Set search result after API call
    } catch (error) {
      console.error('API Error:', error);
      setSearchResult([]); // Reset search result on error
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      callSearchApi(searchTerm);
    }
  };

  return (
    <>
      <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
        <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
          <OutlinedInput
            size="small"
            id="header-search"
            startAdornment={
              <InputAdornment position="start" sx={{ mr: -0.5 }}>
                <SearchOutlined />
              </InputAdornment>
            }
            aria-describedby="header-search-text"
            inputProps={{
              'aria-label': 'weight',
              onKeyPress: handleKeyPress
            }}
            placeholder="Tìm kiếm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </FormControl>
      </Box>
    </>
  );
}
