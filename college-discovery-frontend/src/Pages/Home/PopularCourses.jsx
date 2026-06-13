const courses = [
  "B.Tech",
  "MBA",
  "BCA",
  "MCA",
  "MBBS",
  "B.Com",
  "BBA",
  "M.Tech",
];

const PopularCourses = () => {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold">
            Popular Courses
          </h2>

          <p className="mt-4 text-slate-600">
            Browse colleges by your preferred course.
          </p>

        </div>

        <div className="flex flex-wrap justify-center gap-4">

          {courses.map((course) => (
            <button
              key={course}
              className="
                px-6 py-3
                rounded-full
                bg-white
                border
                border-slate-200
                hover:border-blue-600
                hover:text-blue-600
                transition
              "
            >
              {course}
            </button>
          ))}

        </div>

      </div>

    </section>
  );
};

export default PopularCourses;