import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Link } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";

const ManageColleges = () => {

  const [colleges, setColleges] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

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

      } finally {

        setLoading(false);

      }

    };

  const deleteCollege =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete this college?"
        );

      if (!confirmDelete)
        return;

      try {

        const user =
          JSON.parse(
            localStorage.getItem("user")
          );

        await api.delete(
          `/admin/college/${id}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        fetchColleges();

      } catch (error) {

        console.log(error);

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
            max-w-7xl
            mx-auto
            px-4
          "
        >

          <div
            className="
              flex
              justify-between
              items-center
              mb-8
            "
          >

            <h1
              className="
                text-4xl
                font-bold
                text-white
              "
            >
              Manage Colleges
            </h1>

            <Link
              to="/admin/add-college"
              className="
                flex
                items-center
                gap-2
                bg-cyan-600
                hover:bg-cyan-700
                text-white
                px-5
                py-3
                rounded-xl
              "
            >
              <Plus size={18} />
              Add College
            </Link>

          </div>

          <div
            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              overflow-hidden
            "
          >

            <table
              className="
                w-full
                text-left
              "
            >

              <thead>

                <tr
                  className="
                    border-b
                    border-white/10
                  "
                >

                  <th className="p-4 text-white">
                    Name
                  </th>

                  <th className="p-4 text-white">
                    State
                  </th>

                  <th className="p-4 text-white">
                    Fees
                  </th>

                  <th className="p-4 text-white">
                    Rating
                  </th>

                  <th className="p-4 text-white">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {colleges.map(
                  (college) => (

                    <tr
                      key={
                        college._id
                      }
                      className="
                        border-b
                        border-white/5
                      "
                    >

                      <td className="p-4 text-white">
                        {college.name}
                      </td>

                      <td className="p-4 text-slate-300">
                        {college.state}
                      </td>

                      <td className="p-4 text-slate-300">
                        ₹{college.fees?.toLocaleString()}
                      </td>

                      <td className="p-4 text-slate-300">
                        {college.rating}
                      </td>

                      <td className="p-4">

                        <div className="flex gap-3">

                          <Link
                            to={`/admin/edit-college/${college._id}`}
                            className="
                              text-cyan-400
                            "
                          >
                            <Pencil size={18} />
                          </Link>

                          <button
                            onClick={() =>
                              deleteCollege(
                                college._id
                              )
                            }
                            className="
                              text-red-400
                            "
                          >
                            <Trash2 size={18} />
                          </button>

                        </div>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default ManageColleges;