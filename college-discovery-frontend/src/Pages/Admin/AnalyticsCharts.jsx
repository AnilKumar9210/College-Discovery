import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const AnalyticsCharts = ({
  stats,
}) => {

  const pieData = [
    {
      name: "Users",
      value: stats.users,
    },
    {
      name: "Chats",
      value: stats.chats,
    },
    {
      name: "Saved",
      value:
        stats.savedColleges,
    },
  ];

  const barData = [
    {
      name: "Users",
      count: stats.users,
    },
    {
      name: "Colleges",
      count: stats.colleges,
    },
    {
      name: "Chats",
      count: stats.chats,
    },
    {
      name: "Saved",
      count:
        stats.savedColleges,
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-10">

      {/* Pie */}

      <div
        className="
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-6
        "
      >
        <h2 className="text-white text-xl font-bold mb-4">
          Platform Activity
        </h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <PieChart>

            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={100}
            >
              {pieData.map(
                (_, index) => (
                  <Cell
                    key={index}
                  />
                )
              )}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </div>

      {/* Bar */}

      <div
        className="
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-6
        "
      >

        <h2 className="text-white text-xl font-bold mb-4">
          System Overview
        </h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <BarChart
            data={barData}
          >

            <XAxis
              dataKey="name"
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="count"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default AnalyticsCharts;