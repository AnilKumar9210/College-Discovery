import { createContext, useContext, useEffect, useState } from "react";

const SavedCollegesContext = createContext();

export const SavedCollegesProvider = ({ children }) => {
  const [savedColleges, setSavedColleges] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("savedColleges");

    if (stored) {
      setSavedColleges(JSON.parse(stored));
    }
  }, []);

  const saveCollege = (college) => {
    const exists = savedColleges.find(
      (item) => item.id === college.id
    );

    if (exists) return;

    const updated = [...savedColleges, college];

    setSavedColleges(updated);

    localStorage.setItem(
      "savedColleges",
      JSON.stringify(updated)
    );
  };

  const removeCollege = (id) => {
    const updated = savedColleges.filter(
      (college) => college.id !== id
    );

    setSavedColleges(updated);

    localStorage.setItem(
      "savedColleges",
      JSON.stringify(updated)
    );
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

export const useSavedColleges = () =>
  useContext(SavedCollegesContext);