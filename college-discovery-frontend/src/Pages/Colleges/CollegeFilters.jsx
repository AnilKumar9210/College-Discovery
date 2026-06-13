const CollegeFilters = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5">

      <h3 className="font-semibold text-lg mb-5">
        Filters
      </h3>

      <div className="space-y-4">

        <select className="w-full border rounded-lg p-3">
          <option>All States</option>
          <option>Telangana</option>
          <option>Maharashtra</option>
          <option>Karnataka</option>
        </select>

        <select className="w-full border rounded-lg p-3">
          <option>All Courses</option>
          <option>B.Tech</option>
          <option>MBA</option>
          <option>BCA</option>
        </select>

        <select className="w-full border rounded-lg p-3">
          <option>Fees Range</option>
          <option>Below ₹1L</option>
          <option>₹1L - ₹3L</option>
          <option>Above ₹3L</option>
        </select>

      </div>

    </div>
  );
};

export default CollegeFilters;