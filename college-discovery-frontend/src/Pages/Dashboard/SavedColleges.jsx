import MainLayout from "../../layouts/MainLayout";
import CollegeCard from "../Colleges/CollegeCard";
import { useSavedColleges } from "../../Context/SavedCollegesContext";

const SavedColleges = () => {
  const { savedColleges } = useSavedColleges();

  return (
    <MainLayout>

      <section className="py-12">

        <div className="max-w-7xl mx-auto px-4">

          <h1 className="text-4xl font-bold mb-8">
            Saved Colleges
          </h1>

          {savedColleges.length === 0 ? (
            <p>No saved colleges yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {savedColleges.map((college) => (
                <CollegeCard
                  key={college.id}
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

export default SavedColleges;