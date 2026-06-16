import MainLayout from "../../layouts/MainLayout";
import { useSavedColleges } from "../../Context/SavedCollegesContext";

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

      </section>
    </MainLayout>
  );
};

export default Dashboard;