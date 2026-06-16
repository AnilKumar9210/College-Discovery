import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../services/api";
import { useAuth } from "./AuthContext";

const SavedCollegesContext =
  createContext();

export const SavedCollegesProvider = ({
  children,
}) => {
  const { user } = useAuth();

  const [
    savedColleges,
    setSavedColleges,
  ] = useState([]);

  useEffect(() => {
    if (user?.token) {
      fetchSavedColleges();
    } else {
      setSavedColleges([]);
    }
  }, [user]);

  const fetchSavedColleges =
    async () => {
      try {
        const response =
          await api.get(
            "/auth/me",
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );

        setSavedColleges(
          response.data.data
            .savedColleges || []
        );
      } catch (error) {
        console.log(error);
      }
    };

  const saveCollege =
    async (collegeId) => {
      try {
        await api.post(
          `/auth/save-college/${collegeId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        fetchSavedColleges();
      } catch (error) {
        console.log(error);
      }
    };

  const removeCollege =
    async (collegeId) => {
      try {
        await api.delete(
          `/auth/save-college/${collegeId}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        fetchSavedColleges();
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <SavedCollegesContext.Provider
      value={{
        savedColleges,
        saveCollege,
        removeCollege,
      }}
    >
      {children}
    </SavedCollegesContext.Provider>
  );
};

export const useSavedColleges =
  () =>
    useContext(
      SavedCollegesContext
    );