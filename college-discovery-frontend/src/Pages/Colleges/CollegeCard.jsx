import { Link } from "react-router-dom";
import { MapPin, Heart } from "lucide-react";
import { useSavedColleges } from "../../Context/SavedCollegesContext";

const CollegeCard = ({ college }) => {
  const {saveCollege} = useSavedColleges();
  return (
    <div
      className="
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-sm
        border border-slate-200
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      <img
        src={college.image}
        alt={college.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
            {college.ranking}
          </span>
          <button
            onClick={() => saveCollege(college)}
            className="
    p-2
    rounded-lg
    hover:bg-red-50
    transition
  "
          >
            <Heart size={18} className="text-red-500" />
          </button>
          <div className="flex items-center gap-1 text-slate-500 text-sm">
            <MapPin size={16} />
            <span>{college.location}</span>
          </div>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-slate-900">
          {college.name}
        </h3>

        <p className="mt-2 text-slate-600">Fees: {college.fees}</p>
        <Link
          to={`/college/${college.id}`}
          className="
    mt-5
    block
    w-full
    text-center
    bg-blue-600
    hover:bg-blue-700
    text-white
    py-3
    rounded-xl
    transition
  "
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CollegeCard;
