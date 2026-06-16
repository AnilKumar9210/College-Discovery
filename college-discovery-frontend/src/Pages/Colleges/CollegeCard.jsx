import { Link } from "react-router-dom";
import {
  MapPin,
  Heart,
  Star,
  GraduationCap,
} from "lucide-react";

import { useSavedColleges } from "../../Context/SavedCollegesContext";

const CollegeCard = ({ college }) => {
  const {
    saveCollege,
    removeCollege,
    savedColleges,
  } = useSavedColleges();

  const isSaved = savedColleges.some(
    (item) => item._id === college._id
  );

  const handleSaveToggle = (e) => {
    e.preventDefault();

    if (isSaved) {
      removeCollege(college._id);
    } else {
      saveCollege(college);
    }
  };

  return (
    <div
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        border
        border-slate-200
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={
            college.image ||
            "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
          }
          alt={college.name}
          className="w-full h-52 object-cover"
        />

        <button
          onClick={handleSaveToggle}
          className="
            absolute
            top-4
            right-4
            bg-white
            p-2
            rounded-full
            shadow
            hover:scale-110
            transition
          "
        >
          <Heart
            size={18}
            className={`transition ${
              isSaved
                ? "fill-red-500 text-red-500"
                : "text-red-500"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-center">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            NIRF #{college.nirfRank || "N/A"}
          </span>

          <div className="flex items-center gap-1">
            <Star
              size={16}
              className="text-yellow-500 fill-yellow-500"
            />

            <span className="font-medium">
              {college.rating || 0}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-4">
          {college.name}
        </h3>

        <div className="flex items-center gap-1 text-slate-500 mt-2">
          <MapPin size={16} />
          <span>{college.location}</span>
        </div>

        <div className="mt-5 space-y-2">
          <div className="flex items-center gap-2 text-slate-700">
            <GraduationCap size={18} />
            <span>
              {college.courses?.length || 0} Courses
            </span>
          </div>

          <div className="font-semibold text-blue-600">
            ₹{college.fees?.toLocaleString()}
          </div>

          <div className="text-green-600 font-medium">
            Avg Package ₹
            {college.placements?.averagePackage?.toLocaleString() || "N/A"}
          </div>
        </div>

        <Link
          to={`/college/${college._id}`}
          className="
            block
            mt-5
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
