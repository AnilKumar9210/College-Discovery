import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";
import { getColleges } from "../../services/collegeService";

const CollegeGrid = ({colleges,loading}) => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
    
  //   const fetchColleges = async () => {
  //     try {
  //       const data = await getColleges();
        
  //       setColleges(data);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchColleges();
  // }, []);

  if (loading) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="
            bg-white
            rounded-3xl
            border
            border-slate-200
            p-4
            animate-pulse
          "
        >
          <div className="h-52 bg-slate-200 rounded-xl" />

          <div className="mt-4 h-5 bg-slate-200 rounded" />

          <div className="mt-2 h-4 bg-slate-200 rounded w-2/3" />

          <div className="mt-6 h-10 bg-slate-200 rounded-xl" />
        </div>
      ))}

    </div>
  );
}

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

      {colleges.map((college) => (
        <CollegeCard
          key={college._id}
          college={college}
        />
      ))}

    </div>
  );
};

export default CollegeGrid;