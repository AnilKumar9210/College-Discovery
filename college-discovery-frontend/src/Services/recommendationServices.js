import api from "./api"

export const getRecommendations =
  async (payload) => {

    const response =
      await api.post(
        "/recommendations",
        payload
      );

    return response.data;
};