import axios from 'axios';

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const endpoints = {
  PhongHoc: `${BASE_API_URL}/phonghoc`
};

export async function PostPhongHoc(data) {
  const response = await axios.post(endpoints.PhongHoc, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}

export async function GetAllPhongHoc(page = 0, size = 10, sortBy = 'maPhongHoc') {
  const response = await axios.get(endpoints.PhongHoc, {
    params: {
      page,
      size,
      sortBy
    }
  });
  return response.data;
}

export async function GetPhongHocById(id) {
  const response = await axios.get(`${endpoints.PhongHoc}/${id}`);
  return response.data;
}

export async function UpdatePhongHoc(id, data) {
  const response = await axios.put(`${endpoints.PhongHoc}/${id}`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}

export async function DeletePhongHoc(id) {
  const response = await axios.delete(`${endpoints.PhongHoc}/${id}`);
  return response.data;
}

export async function SearchPhongHoc(data) {
  const response = await axios.post(`${endpoints.PhongHoc}/search`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}
