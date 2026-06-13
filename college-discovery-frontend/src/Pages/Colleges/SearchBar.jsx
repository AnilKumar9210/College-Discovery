import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="bg-white shadow-sm border border-slate-200 rounded-2xl p-2 flex items-center">

      <Search
        className="text-slate-400 ml-3"
        size={20}
      />

      <input
        type="text"
        placeholder="Search colleges, courses, cities..."
        className="
          flex-1
          px-4
          py-3
          outline-none
          rounded-xl
        "
      />

      <button
        className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-xl
          hover:bg-blue-700
          transition
        "
      >
        Search
      </button>

    </div>
  );
};

export default SearchBar;