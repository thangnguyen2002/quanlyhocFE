import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

export const endpoints = {
  chucvu: `${BASE_URL}/chucvu`
};

export async function PostChucVu(data) {
  const response = await axios.post(endpoints.chucvu, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}

export async function GetAllChucVu() {
  const response = await axios.get(endpoints.chucvu);
  return response.data;
}

export async function UpdateChucVu(id, data) {
  const response = await axios.put(`${endpoints.chucvu}/${id}`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}

export async function DeleteChucVu(id) {
  const response = await axios.delete(`${endpoints.chucvu}/${id}`);
  return response.data;
}
