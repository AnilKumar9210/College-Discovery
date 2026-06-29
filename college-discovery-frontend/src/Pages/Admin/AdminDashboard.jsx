import { useEffect, useState } from "react";
import {
  Users,
  GraduationCap,
  MessageSquare,
  Heart,
} from "lucide-react";

import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";
import { Link } from "react-router-dom";
import AnalyticsCharts from "./AnalyticsCharts";

const AdminDashboard = () => {

  const [stats, setStats] =
    useState({
      users: 0,
      colleges: 0,
      chats: 0,
      savedColleges: 0,
    });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchStats();

  }, []);

  const fetchStats =
    async () => {

      try {

        const user =
          JSON.parse(
            localStorage.getItem("user")
          );

        const response =
          await api.get(
            "/admin/stats",
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );

        setStats(
          response.data.data
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

  const cards = [
    {
      title: "Users",
      value: stats.users,
      icon: Users,
    },
    {
      title: "Colleges",
      value: stats.colleges,
      icon: GraduationCap,
    },
    {
      title: "AI Chats",
      value: stats.chats,
      icon: MessageSquare,
    },
    {
      title: "Saved Colleges",
      value: stats.savedColleges,
      icon: Heart,
    },
  ];

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
    mb-10
  "
>
  <h1
    className="
      text-4xl
      font-bold
      text-white
    "
  >
    Admin Dashboard
  </h1>

  <Link
    to="/admin/colleges"
    className="
      bg-cyan-600
      hover:bg-cyan-700
      text-white
      px-5
      py-3
      rounded-xl
      font-medium
    "
  >
    Manage Colleges
  </Link>
</div>

          {loading ? (

            <div className="text-white">
              Loading...
            </div>

          ) : (

            <div
              className="
                grid
                md:grid-cols-2
                lg:grid-cols-4
                gap-6
              "
            >

              {cards.map(
                (
                  card
                ) => {

                  const Icon =
                    card.icon;

                  return (

                    <div
                      key={
                        card.title
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

                      <div
                        className="
                          flex
                          justify-between
                          items-center
                        "
                      >

                        <h3
                          className="
                            text-slate-400
                          "
                        >
                          {
                            card.title
                          }
                        </h3>

                        <Icon
                          className="
                            text-cyan-400
                          "
                        />

                      </div>

                      <h2
                        className="
                          text-4xl
                          font-bold
                          text-white
                          mt-4
                        "
                      >
                        {
                          card.value
                        }
                      </h2>

                    </div>

                  );

                }
              )}

            </div>

          )}

        </div>

      </section>
      <AnalyticsCharts
      stats={stats}/>

    </MainLayout>
  );
};

export default AdminDashboard;