const stats = [
  {
    number: "5,000+",
    label: "Colleges",
  },
  {
    number: "50,000+",
    label: "Students",
  },
  {
    number: "1,000+",
    label: "Courses",
  },
  {
    number: "95%",
    label: "Satisfaction",
  },
];

const Stats = () => {
  return (
    <section className="bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-blue-600">
                {stat.number}
              </h3>

              <p className="mt-2 text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;