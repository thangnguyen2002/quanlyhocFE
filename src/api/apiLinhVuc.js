import axios from 'axios';

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const endpoints = {
  linhvuc: `${BASE_API_URL}/linhvuc`
};

export async function PostLinhVuc(data) {
  const response = await axios.post(endpoints.linhvuc, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}

export async function GetAllLinhVuc() {
  const response = await axios.get(endpoints.linhvuc);
  return response.data;
}

export async function GetLinhVucById(id) {
  const response = await axios.get(`${endpoints.linhvuc}/${id}`);
  return response.data;
}

export async function UpdateLinhVuc(id, data) {
  const response = await axios.put(`${endpoints.linhvuc}/${id}`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}

export async function DeleteLinhVuc(id) {
  const response = await axios.delete(`${endpoints.linhvuc}/${id}`);
  return response.data;
}

export async function SearchLinhVuc(data) {
  const response = await axios.post(`${endpoints.linhvuc}/search`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}
