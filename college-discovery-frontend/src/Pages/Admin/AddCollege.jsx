import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";

const AddCollege = () => {

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

  const handleChange = (e) => {

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

        await api.post(
          "/admin/colleges",
          formData,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        alert(
          "College added successfully"
        );

        navigate(
          "/admin/colleges"
        );

      } catch (error) {

        console.log(error);

        alert(
          "Failed to add college"
        );

      } finally {

        setLoading(false);

      }

    };

  return (
    <MainLayout>

      <section
        className="
          min-h-screen
          bg-slate-950
          py-12
        "
      >

        <div
          className="
            max-w-4xl
            mx-auto
            px-4
          "
        >

          <div
            className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
            "
          >

            <h1
              className="
                text-4xl
                font-bold
                text-white
                mb-8
              "
            >
              Add College
            </h1>

            <form
              onSubmit={
                handleSubmit
              }
              className="
                grid
                md:grid-cols-2
                gap-5
              "
            >

              <input
                type="text"
                name="name"
                placeholder="College Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="
                  bg-slate-900
                  text-white
                  border
                  border-white/10
                  p-4
                  rounded-xl
                "
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
                className="
                  bg-slate-900
                  text-white
                  border
                  border-white/10
                  p-4
                  rounded-xl
                "
              />

              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
                className="
                  bg-slate-900
                  text-white
                  border
                  border-white/10
                  p-4
                  rounded-xl
                "
              />

              <input
                type="number"
                name="fees"
                placeholder="Fees"
                value={formData.fees}
                onChange={handleChange}
                required
                className="
                  bg-slate-900
                  text-white
                  border
                  border-white/10
                  p-4
                  rounded-xl
                "
              />

              <input
                type="number"
                step="0.1"
                name="rating"
                placeholder="Rating"
                value={formData.rating}
                onChange={handleChange}
                required
                className="
                  bg-slate-900
                  text-white
                  border
                  border-white/10
                  p-4
                  rounded-xl
                "
              />

              <input
                type="number"
                name="nirfRank"
                placeholder="NIRF Rank"
                value={formData.nirfRank}
                onChange={handleChange}
                className="
                  bg-slate-900
                  text-white
                  border
                  border-white/10
                  p-4
                  rounded-xl
                "
              />

              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                className="
                  md:col-span-2
                  bg-slate-900
                  text-white
                  border
                  border-white/10
                  p-4
                  rounded-xl
                "
              />

              <textarea
                name="overview"
                placeholder="College Overview"
                value={formData.overview}
                onChange={handleChange}
                rows={5}
                required
                className="
                  md:col-span-2
                  bg-slate-900
                  text-white
                  border
                  border-white/10
                  p-4
                  rounded-xl
                "
              />

              <button
                type="submit"
                className="
                  md:col-span-2
                  bg-cyan-600
                  hover:bg-cyan-700
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                "
              >
                {loading
                  ? "Adding..."
                  : "Add College"}
              </button>

            </form>

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default AddCollege;