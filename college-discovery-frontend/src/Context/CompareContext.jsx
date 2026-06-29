import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";
import toast from "react-hot-toast";

const CompareContext =
  createContext();

export const CompareProvider = ({
  children,
}) => {

const [
  compareColleges,
  setCompareColleges,
] = useState(() => {

  const stored =
    localStorage.getItem(
      "compareColleges"
    );

  return stored
    ? JSON.parse(stored)
    : [];

});

useEffect(() => {

  localStorage.setItem(
    "compareColleges",
    JSON.stringify(
      compareColleges
    )
  );

}, [compareColleges]);

  const addCollege = (
    college
  ) => {

    const exists =
      compareColleges.find(
        (item) =>
          item._id === college._id
      );

    if (exists) {
        toast.error ("College already exists");
        return;
    };

    if (
      compareColleges.length >= 3
    ) {
      alert(
        "Maximum 3 colleges can be compared"
      );
      return;
    }

    setCompareColleges([
      ...compareColleges,
      college,
    ]);

    toast.success ("College added successfully")
  };

  const removeCollege = (
    id
  ) => {
    setCompareColleges(
      compareColleges.filter(
        (college) =>
          college._id !== id
      )
    );
  };

  const clearComparison =
    () => {
      setCompareColleges([]);
    };

    

  return (
    <CompareContext.Provider
      value={{
        compareColleges,
        addCollege,
        removeCollege,
        clearComparison,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare =
  () =>
    useContext(
      CompareContext
    );