import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { useAuth } from "../../Context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="text-blue-600" size={30} />

            <span className="font-bold text-lg text-slate-900">
              CollegeDiscover
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-slate-700 hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              to="/colleges"
              className="text-slate-700 hover:text-blue-600 transition"
            >
              Colleges
            </Link>

            <Link
              to="/compare"
              className="text-slate-700 hover:text-blue-600 transition"
            >
              Compare
            </Link>
            <Link
              to="/dashboard"
              className="text-slate-700 hover:text-blue-600"
            >
              Dashboard
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="font-medium">{user.name}</span>

                <button
                  onClick={logout}
                  className="
        px-4 py-2
        bg-red-500
        text-white
        rounded-lg
      "
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login">Login</Link>

                <Link
                  to="/register"
                  className="
        px-4 py-2
        bg-blue-600
        text-white
        rounded-lg
      "
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col p-4 gap-4">
            <Link to="/">Home</Link>
            <Link to="/colleges">Colleges</Link>
            <Link to="/compare">Compare</Link>
            <Link to="/login">Login</Link>

            <Link
              to="/register"
              className="bg-blue-600 text-white text-center py-2 rounded-lg"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
