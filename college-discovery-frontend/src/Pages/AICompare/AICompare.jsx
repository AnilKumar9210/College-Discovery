import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";

const AICompare = () => {

  const [colleges, setColleges] =
    useState([]);

  const [college1, setCollege1] =
    useState("");

  const [college2, setCollege2] =
    useState("");

  const [comparison, setComparison] =
    useState("");

  const [selectedColleges,
    setSelectedColleges] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {

    fetchColleges();

  }, []);

  const fetchColleges =
    async () => {

      try {

        const response =
          await api.get(
            "/colleges"
          );

        setColleges(
          response.data.data
        );

      } catch (error) {

        console.log(error);

      }

    };

  const handleCompare =
    async () => {

      if (
        !college1 ||
        !college2
      ) {
        return alert(
          "Select both colleges"
        );
      }

      try {

        setLoading(true);

        const response =
          await api.post(
            "/ai-compare",
            {
              college1,
              college2,
            }
          );

        setComparison(
          response.data
            .comparison
        );

        setSelectedColleges(
          response.data
            .colleges
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

  return (
    <MainLayout>

      <section
        className="
          min-h-screen
          bg-gradient-to-br
          from-slate-950
          via-slate-900
          to-blue-950
          py-10
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-4
          "
        >

          <div
            className="
              text-center
              mb-10
            "
          >

            <h1
              className="
                text-5xl
                font-bold
                text-white
              "
            >
              AI College Comparison
            </h1>

            <p
              className="
                text-slate-400
                mt-3
              "
            >
              Compare any two colleges
              using AI analysis
            </p>

          </div>

          {/* Selectors */}

          <div
            className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
              mb-10
            "
          >

            <div
              className="
                grid
                md:grid-cols-2
                gap-4
              "
            >

              <select
                value={college1}
                onChange={(e) =>
                  setCollege1(
                    e.target.value
                  )
                }
                className="
                  bg-slate-900/70
                  border
                  border-white/10
                  text-white
                  rounded-xl
                  p-4
                "
              >
                <option value="">
                  Select First College
                </option>

                {colleges.map(
                  (
                    college
                  ) => (
                    <option
                      key={
                        college._id
                      }
                      value={
                        college.name
                      }
                    >
                      {
                        college.name
                      }
                    </option>
                  )
                )}

              </select>

              <select
                value={college2}
                onChange={(e) =>
                  setCollege2(
                    e.target.value
                  )
                }
                className="
                  bg-slate-900/70
                  border
                  border-white/10
                  text-white
                  rounded-xl
                  p-4
                "
              >
                <option value="">
                  Select Second College
                </option>

                {colleges.map(
                  (
                    college
                  ) => (
                    <option
                      key={
                        college._id
                      }
                      value={
                        college.name
                      }
                    >
                      {
                        college.name
                      }
                    </option>
                  )
                )}

              </select>

            </div>

            <button
              onClick={
                handleCompare
              }
              className="
                mt-6
                w-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                py-4
                rounded-xl
                font-semibold
              "
            >
              {loading
                ? "Comparing..."
                : "Compare Colleges"}
            </button>

          </div>

          {/* Cards */}

          {selectedColleges.length >
            0 && (

            <div
              className="
                grid
                md:grid-cols-2
                gap-6
                mb-10
              "
            >

              {selectedColleges.map(
                (
                  college
                ) => (

                  <div
                    key={
                      college._id
                    }
                    className="
                      bg-white/5
                      backdrop-blur-xl
                      border
                      border-white/10
                      rounded-3xl
                      p-6
                    "
                  >

                    <h2
                      className="
                        text-white
                        text-2xl
                        font-bold
                      "
                    >
                      {
                        college.name
                      }
                    </h2>

                    <p
                      className="
                        text-slate-400
                        mt-2
                      "
                    >
                      {
                        college.state
                      }
                    </p>

                    <div className="mt-4">

                      <p className="text-cyan-400">
                        Rating:
                        {" "}
                        {
                          college.rating
                        }
                      </p>

                      <p className="text-green-400">
                        Fees:
                        {" "}
                        ₹
                        {college.fees?.toLocaleString()}
                      </p>

                      <p className="text-yellow-400">
                        Avg Package:
                        {" "}
                        ₹
                        {college
                          .placements
                          ?.averagePackage
                          ?.toLocaleString()}
                      </p>

                    </div>

                  </div>

                )
              )}

            </div>

          )}

          {/* AI Analysis */}

          {comparison && (

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

              <h2
                className="
                  text-white
                  text-3xl
                  font-bold
                  mb-6
                "
              >
                AI Verdict
              </h2>

              <div
                className="
                  text-slate-200
                  whitespace-pre-wrap
                  leading-8
                "
              >
                {comparison}
              </div>

            </div>

          )}

        </div>

      </section>

    </MainLayout>
  );
};

export default AICompare;