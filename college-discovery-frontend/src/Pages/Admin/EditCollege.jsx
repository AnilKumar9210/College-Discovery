import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";

const EditCollege = () => {

  const { id } = useParams();

  const navigate =
    useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      location: "",
      state: "",
      fees: "",
      rating: "",
      nirfRank: "",
      image: "",
      overview: "",
    });

  useEffect(() => {

    fetchCollege();

  }, []);

  const fetchCollege =
    async () => {

      try {

        const response =
          await api.get(
            `/colleges/${id}`
          );

        const college =
          response.data.data;

        setFormData({
          name:
            college.name || "",

          location:
            college.location || "",

          state:
            college.state || "",

          fees:
            college.fees || "",

          rating:
            college.rating || "",

          nirfRank:
            college.nirfRank || "",

          image:
            college.image || "",

          overview:
            college.overview || "",
        });

      } catch (error) {

        console.log(error);

      }

    };

  const handleChange =
    (e) => {

      setFormData({
        ...formData,
        [e.target.name]:
          e.target.value,
      });

    };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const user =
          JSON.parse(
            localStorage.getItem("user")
          );

        await api.put(
          `/admin/colleges/${id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        alert(
          "College updated successfully"
        );

        navigate(
          "/admin/colleges"
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

  return (
    <MainLayout>

      <section className="min-h-screen bg-slate-950 py-12">

        <div className="max-w-4xl mx-auto px-4">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h1 className="text-4xl font-bold text-white mb-8">
              Edit College
            </h1>

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-5"
            >

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="College Name"
                className="bg-slate-900 text-white border border-white/10 p-4 rounded-xl"
              />

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="bg-slate-900 text-white border border-white/10 p-4 rounded-xl"
              />

              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="bg-slate-900 text-white border border-white/10 p-4 rounded-xl"
              />

              <input
                type="number"
                name="fees"
                value={formData.fees}
                onChange={handleChange}
                placeholder="Fees"
                className="bg-slate-900 text-white border border-white/10 p-4 rounded-xl"
              />

              <input
                type="number"
                step="0.1"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                placeholder="Rating"
                className="bg-slate-900 text-white border border-white/10 p-4 rounded-xl"
              />

              <input
                type="number"
                name="nirfRank"
                value={formData.nirfRank}
                onChange={handleChange}
                placeholder="NIRF Rank"
                className="bg-slate-900 text-white border border-white/10 p-4 rounded-xl"
              />

              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="md:col-span-2 bg-slate-900 text-white border border-white/10 p-4 rounded-xl"
              />

              <textarea
                rows={5}
                name="overview"
                value={formData.overview}
                onChange={handleChange}
                placeholder="Overview"
                className="md:col-span-2 bg-slate-900 text-white border border-white/10 p-4 rounded-xl"
              />

              <button
                type="submit"
                className="md:col-span-2 bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-xl"
              >
                {loading
                  ? "Updating..."
                  : "Update College"}
              </button>

            </form>

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default EditCollege;