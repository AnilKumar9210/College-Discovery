import { useState } from "react";

import MainLayout from "../../layouts/MainLayout";
import CollegeCard from "../Colleges/CollegeCard";

import api from "../../services/api";

const Recommendations = () => {
  const [formData, setFormData] = useState({
    exam: "JEE",
    rank: "",
    maxFees: "",
    state: "",
  });

  const states = [
    "Andhra Pradesh",
    "Telangana",
    "Tamil Nadu",
    "Karnataka",
    "Maharashtra",
    "Delhi",
    "Kerala",
    "Rajasthan",
    "West Bengal",
    "Uttar Pradesh",
  ];

  const [colleges, setColleges] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/recommendations", formData);

      setColleges(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <section className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">AI College Recommendations</h1>

            <p className="text-slate-600 mt-3">
              Get personalized college suggestions based on your rank, budget
              and preferences.
            </p>
          </div>

          {/* Form */}

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-sm
              border
              mb-10
            "
          >
            <form
              onSubmit={handleSubmit}
              className="
                grid
                md:grid-cols-4
                gap-4
              "
            >
              <select
                name="exam"
                value={formData.exam}
                onChange={handleChange}
                className="
                  border
                  rounded-xl
                  p-3
                "
              >
                <option value="JEE">JEE</option>

                <option value="NEET">NEET</option>

                <option value="CAT">CAT</option>
              </select>

              <input
                type="number"
                name="rank"
                placeholder="Your Rank"
                value={formData.rank}
                onChange={handleChange}
                className="
                  border
                  rounded-xl
                  p-3
                "
              />

              <input
                type="number"
                name="maxFees"
                placeholder="Max Fees"
                value={formData.maxFees}
                onChange={handleChange}
                className="
                  border
                  rounded-xl
                  p-3
                "
              />

              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="
    border
    rounded-xl
    p-3
  "
              >
                <option value="">Any State</option>

                <option value="Maharashtra">Maharashtra</option>

                <option value="Telangana">Telangana</option>

                <option value="Karnataka">Karnataka</option>

                <option value="Tamil Nadu">Tamil Nadu</option>

                <option value="Delhi">Delhi</option>

                <option value="Kerala">Kerala</option>

                <option value="Rajasthan">Rajasthan</option>

                <option value="West Bengal">West Bengal</option>

                <option value="Uttar Pradesh">Uttar Pradesh</option>

                <option value="Andhra Pradesh">Andhra Pradesh</option>
              </select>

              <button
                type="submit"
                className="
                  md:col-span-4
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  py-3
                  rounded-xl
                  transition
                "
              >
                {loading ? "Finding Colleges..." : "Get Recommendations"}
              </button>
            </form>
          </div>

          {/* Results */}

          {colleges.length > 0 && (
            <div>
              <h2
                className="
                  text-3xl
                  font-bold
                  mb-8
                "
              >
                Recommended Colleges
              </h2>

              <div
                className="
                  grid
                  md:grid-cols-2
                  lg:grid-cols-3
                  gap-8
                "
              >
                {colleges.map((college) => (
                  <CollegeCard key={college._id} college={college} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Recommendations;
