import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

export const endpoints = {
  linhvuc: `${BASE_URL}/linhvuc`
};

export async function PostLinhVuc(data) {
  const response = await axios.post(endpoints.linhvuc, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}
