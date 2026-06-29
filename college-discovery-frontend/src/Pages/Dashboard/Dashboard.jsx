import MainLayout from "../../layouts/MainLayout";
import { useSavedColleges } from "../../Context/SavedCollegesContext";
import CollegeCard from "../Colleges/CollegeCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { savedColleges } = useSavedColleges();

  return (
    <MainLayout>
      <section className="py-12 bg-slate-50 min-h-screen">

        <div className="max-w-7xl mx-auto px-4">

          <h1 className="text-4xl font-bold mb-8">
            Dashboard
          </h1>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-slate-500">
                Saved Colleges
              </h3>

              <p className="text-4xl font-bold text-blue-600 mt-3">
                {savedColleges.length}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-slate-500">
                Colleges Compared
              </h3>

              <p className="text-4xl font-bold text-teal-600 mt-3">
                0
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-slate-500">
                Profile Status
              </h3>

              <p className="text-2xl font-bold text-green-600 mt-3">
                Active
              </p>
            </div>

          </div>

        </div>

        <div className="mt-12">

  <div className="flex justify-between items-center mb-6">

    <h2 className="text-2xl font-bold">
      Saved Colleges
    </h2>

    <Link
      to="/saved-colleges"
      className="text-blue-600 font-medium"
    >
      View All →
    </Link>

  </div>

  {savedColleges.length === 0 ? (

    <div className="bg-white rounded-2xl p-8 text-center">
      No saved colleges yet.
    </div>

  ) : (

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {savedColleges
        .slice(0, 3)
        .map((college) => (
          <CollegeCard
            key={college._id}
            college={college}
          />
        ))}

    </div>

  )}

</div>

      </section>
      
    </MainLayout>
  );
};

export default Dashboard;