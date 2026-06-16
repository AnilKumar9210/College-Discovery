import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import MainLayout from "../../Layouts/MainLayout";
import api from "../../services/api";

import {
  MapPin,
  Star,
  GraduationCap,
  IndianRupee,
  Building2,
  Users,
} from "lucide-react";

const CollegeDetails = () => {
  const { id } = useParams();

  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchCollege = async () => {
      try {
        const response = await api.get(
          `/colleges/${id}`
        );

        setCollege(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollege();
  }, [id]);

  if (loading) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto py-20 px-4">
          <h1 className="text-3xl font-bold">
            Loading...
          </h1>
        </div>
      </MainLayout>
    );
  }

  if (!college) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto py-20 px-4">
          <h1 className="text-3xl font-bold">
            College Not Found
          </h1>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      {/* Hero Section */}
      <section className="relative h-[450px]">
        <img
          src={
            college.image ||
            "https://images.unsplash.com/photo-1562774053-701939374585?w=1200"
          }
          alt={college.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 pb-12 text-white w-full">

            <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">
              NIRF #{college.nirfRank || "N/A"}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              {college.name}
            </h1>

            <div className="flex flex-wrap gap-6 mt-4">

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                {college.location}
              </div>

              <div className="flex items-center gap-2">
                <Star size={18} />
                {college.rating}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="-mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="bg-white p-6 rounded-2xl shadow">
              <GraduationCap className="text-blue-600" />
              <h3 className="mt-3 font-semibold">
                Courses
              </h3>

              <p className="text-2xl font-bold">
                {college.courses?.length || 0}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <IndianRupee className="text-green-600" />
              <h3 className="mt-3 font-semibold">
                Fees
              </h3>

              <p className="font-bold">
                ₹{college.fees?.toLocaleString()}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <Building2 className="text-purple-600" />
              <h3 className="mt-3 font-semibold">
                NIRF Rank
              </h3>

              <p className="font-bold">
                #{college.nirfRank}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <Users className="text-orange-600" />
              <h3 className="mt-3 font-semibold">
                State
              </h3>

              <p className="font-bold">
                {college.state}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-8">

          {/* Overview */}
          <div className="bg-white rounded-2xl border p-8">

            <h2 className="text-2xl font-bold mb-4">
              Overview
            </h2>

            <p className="text-slate-600 leading-relaxed">
              {college.overview}
            </p>

          </div>

          {/* Courses */}
          <div className="bg-white rounded-2xl border p-8">

            <h2 className="text-2xl font-bold mb-6">
              Courses Offered
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              {college.courses?.map(
                (course, index) => (
                  <div
                    key={index}
                    className="border rounded-xl p-4"
                  >
                    <h3 className="font-semibold text-lg">
                      {course.name}
                    </h3>

                    <p className="text-slate-500">
                      Duration: {course.duration}
                    </p>

                    <p className="text-blue-600 font-medium">
                      ₹{course.fees?.toLocaleString()}
                    </p>
                  </div>
                )
              )}

            </div>

          </div>

          {/* Facilities */}
          <div className="bg-white rounded-2xl border p-8">

            <h2 className="text-2xl font-bold mb-6">
              Facilities
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

              {[
                "Library",
                "Hostel",
                "Sports Complex",
                "WiFi Campus",
                "Medical Center",
                "Cafeteria",
              ].map((facility, index) => (
                <div
                  key={index}
                  className="
                    bg-slate-50
                    p-4
                    rounded-xl
                    border
                  "
                >
                  ✓ {facility}
                </div>
              ))}

            </div>

          </div>

          {/* Placements */}
          <div className="bg-white rounded-2xl border p-8">

            <h2 className="text-2xl font-bold mb-6">
              Placement Statistics
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold">
                  Highest Package
                </h3>

                <p className="text-3xl font-bold text-blue-600 mt-2">
                  ₹
                  {college.placements?.highestPackage?.toLocaleString()} LPA
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold">
                  Average Package
                </h3>

                <p className="text-3xl font-bold text-green-600 mt-2">
                  ₹
                  {college.placements?.averagePackage?.toLocaleString()} LPA
                </p>
              </div>

            </div>

            <div className="mt-8">

              <h3 className="font-semibold text-lg mb-4">
                Top Recruiters
              </h3>

              <div className="flex flex-wrap gap-3">

                {college.placements?.topRecruiters?.map(
                  (company, index) => (
                    <span
                      key={index}
                      className="
                        px-4 py-2
                        bg-blue-100
                        text-blue-700
                        rounded-full
                      "
                    >
                      {company}
                    </span>
                  )
                )}

              </div>

            </div>

          </div>

        </div>
      </section>

    </MainLayout>
  );
};

export default CollegeDetails;