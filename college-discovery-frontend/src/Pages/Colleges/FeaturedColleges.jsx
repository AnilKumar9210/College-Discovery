import CollegeCard from "./CollegeCard";
import { getColleges } from "../../services/collegeService";
import { useEffect, useState } from "react";
import api from "../../services/api";


const FeaturedColleges = () => {

  const [colleges,setColleges] = useState ([]);

  useEffect (()=> {
    
    const fetchColleges = async ()=> {
      try {
  const response = await api.get("/colleges");

  console.log(response.data);

  setColleges(response.data.data);

  } catch (error) {
    console.log(error)
  }
}
  fetchColleges ();
  },[])

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Colleges
          </h2>

          <p className="mt-4 text-slate-600">
            Explore top-ranked institutions across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colleges.map((college) => (
            <CollegeCard
              key={college._id}
              college={college}
            />
          ))}
        </div>

        {/* <div>
  {JSON.stringify(colleges[0], null, 2)}
</div> */}

      </div>
    </section>
  );
};

export default FeaturedColleges;