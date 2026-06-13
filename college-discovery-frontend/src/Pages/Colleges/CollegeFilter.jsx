const CollegeFilters = () => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-slate-200
        p-6
        sticky
        top-24
      "
    >
      <h2 className="text-xl font-semibold mb-6">
        Filters
      </h2>

      <div className="space-y-5">

        <div>
          <label className="font-medium block mb-2">
            State
          </label>

          <select className="w-full border rounded-xl p-3">
            <option>All States</option>
            <option>Telangana</option>
            <option>Maharashtra</option>
          </select>
        </div>

        <div>
          <label className="font-medium block mb-2">
            Course
          </label>

          <select className="w-full border rounded-xl p-3">
            <option>All Courses</option>
            <option>B.Tech</option>
            <option>MBA</option>
          </select>
        </div>

        <div>
          <label className="font-medium block mb-2">
            Fees
          </label>

          <select className="w-full border rounded-xl p-3">
            <option>All Fees</option>
            <option>Below ₹1L</option>
            <option>₹1L - ₹3L</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default CollegeFilters;