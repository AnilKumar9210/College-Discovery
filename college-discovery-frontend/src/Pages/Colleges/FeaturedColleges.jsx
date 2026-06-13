import CollegeCard from "./CollegeCard";
import colleges from "../../data/colleges";


const FeaturedColleges = () => {
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
              key={college.id}
              college={college}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedColleges;