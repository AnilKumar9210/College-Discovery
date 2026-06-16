import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

const fetchColleges = async ({
  queryKey,
}) => {
  const [
    _,
    page,
    search,
    filters,
  ] = queryKey;

  const response =
    await api.get("/colleges", {
      params: {
        page,
        limit: 9,
        search,
        ...filters,
      },
    });

  return response.data;
};

export const useColleges = (
  page,
  search,
  filters
) => {
  return useQuery({
    queryKey: [
      "colleges",
      page,
      search,
      filters,
    ],

    queryFn: fetchColleges,

    staleTime: 1000 * 60 * 5,

    gcTime: 1000 * 60 * 10,
  });
};