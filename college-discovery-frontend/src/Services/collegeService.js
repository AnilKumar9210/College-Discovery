import api from "./api";

export const getColleges = async (params = {}) => {
  const response = await api.get(
    "/colleges",
    {
      params,
    }
  );

  console.log (response.data.data)

  return response.data.data;
};

export const getCollegeById = async (id) => {
  const response = await api.get(
    `/colleges/${id}`
  );

  return response.data.data;
};