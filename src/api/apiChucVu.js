import axios from 'axios';

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const endpoints = {
  chucvu: `${BASE_API_URL}/chucvu`
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

export async function GetChucVuById(id) {
  const response = await axios.get(`${endpoints.chucvu}/${id}`);
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

export async function SearchChucVu(data) {
  const response = await axios.post(`${endpoints.chucvu}/search`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}
