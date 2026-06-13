import { useParams } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import colleges from "../../data/colleges";

const CollegeDetails = () => {
  const { id } = useParams();

  const college = colleges.find(
    (college) => college.id === Number(id)
  );

  if (!college) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold">
            College Not Found
          </h1>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      {/* Banner */}
      <section className="relative h-[350px]">

        <img
          src={college.image}
          alt={college.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 pb-10 text-white">

            <span className="bg-blue-600 px-4 py-2 rounded-full">
              {college.ranking}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              {college.name}
            </h1>

            <p className="mt-2">
              📍 {college.location}
            </p>

          </div>
        </div>

      </section>

      {/* Content */}
      <section className="py-12">

        <div className="max-w-7xl mx-auto px-4">

          {/* Overview */}
          <div className="bg-white rounded-2xl border p-8 mb-8">

            <h2 className="text-2xl font-bold mb-4">
              Overview
            </h2>

            <p className="text-slate-600">
              {college.description}
            </p>

          </div>

          {/* Courses */}
          <div className="bg-white rounded-2xl border p-8 mb-8">

            <h2 className="text-2xl font-bold mb-4">
              Courses Offered
            </h2>

            <div className="flex flex-wrap gap-3">

              <span className="bg-blue-100 px-4 py-2 rounded-full">
                B.Tech
              </span>

              <span className="bg-blue-100 px-4 py-2 rounded-full">
                MBA
              </span>

              <span className="bg-blue-100 px-4 py-2 rounded-full">
                MCA
              </span>

            </div>

          </div>

          {/* Placements */}
          <div className="bg-white rounded-2xl border p-8 mb-8">

            <h2 className="text-2xl font-bold mb-4">
              Placements
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold">
                  Highest Package
                </h3>

                <p className="text-3xl text-blue-600 font-bold mt-2">
                  ₹45 LPA
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold">
                  Average Package
                </h3>

                <p className="text-3xl text-blue-600 font-bold mt-2">
                  ₹15 LPA
                </p>
              </div>

            </div>

          </div>

          {/* Facilities */}
          <div className="bg-white rounded-2xl border p-8">

            <h2 className="text-2xl font-bold mb-4">
              Facilities
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

              <div className="bg-slate-50 p-4 rounded-xl">
                Library
              </div>

              <div className="bg-slate-50 p-4 rounded-xl">
                Hostel
              </div>

              <div className="bg-slate-50 p-4 rounded-xl">
                Sports Complex
              </div>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default CollegeDetails;