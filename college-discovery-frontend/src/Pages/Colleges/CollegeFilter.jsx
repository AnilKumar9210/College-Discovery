const CollegeFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

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
      <h2 className="text-xl font-semibold mb-6">Filters</h2>

      <div className="space-y-5">
        {/* Location */}

        <div>
          <label className="font-medium block mb-2">Location</label>

          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleChange}
            placeholder="Mumbai, Delhi..."
            className="
              w-full
              border
              rounded-xl
              p-3
              outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />
        </div>

        {/* Minimum Rating */}

        <div>
          <label className="font-medium block mb-2">Minimum Rating</label>

          <select
            name="minRating"
            value={filters.minRating}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          >
            <option value="">Any Rating</option>

            <option value="4">4+</option>

            <option value="4.5">4.5+</option>

            <option value="4.8">4.8+</option>
          </select>
        </div>

        {/* Fee Range */}

        <div>
          <label className="font-medium block mb-2">Maximum Fees</label>

          <select
            name="maxFees"
            value={filters.maxFees}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          >
            <option value="">Any Fees</option>

            <option value="100000">Below ₹1 Lakh</option>

            <option value="300000">Below ₹3 Lakhs</option>

            <option value="500000">Below ₹5 Lakhs</option>

            <option value="1000000">Below ₹10 Lakhs</option>
          </select>
        </div>

        {/* Reset */}

        <button
          onClick={() =>
            setFilters({
              location: "",
              minFees: "",
              maxFees: "",
              minRating: "",
            })
          }
          className="
            w-full
            bg-slate-100
            hover:bg-slate-200
            py-3
            rounded-xl
            font-medium
            transition
          "
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default CollegeFilters;
