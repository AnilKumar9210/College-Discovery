import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

const fetchProfile = async () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const response =
    await api.get(
      "/auth/me",
      {
        headers: {
          Authorization:
            `Bearer ${user.token}`,
        },
      }
    );

  return response.data.data;
};

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });
};