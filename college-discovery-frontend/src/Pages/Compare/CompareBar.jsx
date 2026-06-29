import { Link } from "react-router-dom";
import { useCompare } from "../../Context/CompareContext";

const CompareBar = () => {
  const {
    compareColleges,
    removeCollege,
  } = useCompare();

  if (
    compareColleges.length === 0
  ) {
    return null;
  }

  return (
    <div
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-80
        bg-white
        rounded-3xl
        shadow-2xl
        border
        border-slate-200
        p-5
      "
    >
      <div className="flex justify-between items-center mb-4">

        <h3 className="font-bold text-lg">
          Compare Colleges
        </h3>

        <span
          className="
            bg-blue-600
            text-white
            px-2
            py-1
            rounded-full
            text-xs
          "
        >
          {compareColleges.length}
        </span>

      </div>

      <div className="space-y-3">

        {compareColleges.map(
          (college) => (
            <div
              key={college._id}
              className="
                flex
                items-center
                justify-between
                bg-slate-50
                rounded-xl
                p-3
              "
            >
              <span className="text-sm font-medium">
                {college.name}
              </span>

              <button
                onClick={() =>
                  removeCollege(
                    college._id
                  )
                }
                className="
                  text-red-500
                  text-sm
                "
              >
                ✕
              </button>
            </div>
          )
        )}

      </div>

      <Link
        to="/compare"
        className="
          block
          mt-4
          text-center
          bg-blue-600
          hover:bg-blue-700
          text-white
          py-3
          rounded-xl
          transition
        "
      >
        Compare Now
      </Link>
    </div>
  );
};

export default CompareBar;