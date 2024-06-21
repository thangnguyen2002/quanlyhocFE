import axios from 'axios';

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const endpoints = {
  KhoaHoc: `${BASE_API_URL}/khoahoc`
};

export async function PostKhoaHoc(data) {
  const response = await axios.post(endpoints.KhoaHoc, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}

export async function GetAllKhoaHoc(page = 0, size = 10, sortBy = 'maKhoaHoc') {
  const response = await axios.get(endpoints.KhoaHoc, {
    params: {
      page,
      size,
      sortBy
    }
  });
  return response.data;
}

export async function GetKhoaHocById(id) {
  const response = await axios.get(`${endpoints.KhoaHoc}/${id}`);
  return response.data;
}

export async function UpdateKhoaHoc(id, data) {
  const response = await axios.put(`${endpoints.KhoaHoc}/${id}`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}

export async function DeleteKhoaHoc(id) {
  const response = await axios.delete(`${endpoints.KhoaHoc}/${id}`);
  return response.data;
}

export async function SearchKhoaHoc(data) {
  const response = await axios.post(`${endpoints.KhoaHoc}/search`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}
