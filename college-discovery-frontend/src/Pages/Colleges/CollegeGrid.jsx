import CollegeCard from "./CollegeCard";
import colleges from "../../data/colleges";

const CollegeGrid = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {colleges.map((college) => (
        <CollegeCard
          key={college.id}
          college={college}
        />
      ))}
    </div>
  );
};

export default CollegeGrid;