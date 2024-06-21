import axios from 'axios';

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const endpoints = {
  LienHe: `${BASE_API_URL}/lienhe`
};

// export async function PostLienHe(data) {
//   const response = await axios.post(endpoints.LienHe, data, {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   return response.data;
// }

export async function GetAllLienHe(page = 0, size = 10, sortBy = 'ngayLienHe') {
  const response = await axios.get(endpoints.LienHe, {
    params: {
      page,
      size,
      sortBy
    }
  });
  return response.data;
}

export async function PostMailLienHe(data) {
  const response = await axios.post(`${endpoints.LienHe}/guiEmailLienHe`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}

export async function GetLienHeById(id) {
  const response = await axios.get(`${endpoints.LienHe}/${id}`);
  return response.data;
}

export async function DeleteLienHe(id) {
  const response = await axios.delete(`${endpoints.LienHe}/${id}`);
  return response.data;
}

export async function SearchLienHe(data) {
  const response = await axios.post(`${endpoints.LienHe}/search`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}
