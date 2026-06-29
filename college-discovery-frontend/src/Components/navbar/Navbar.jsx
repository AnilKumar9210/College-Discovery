import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useAuth } from "../../Context/AuthContext";
import { useCompare } from "../../Context/CompareContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [aiMenuOpen, setAiMenuOpen] = useState(false);

  const { user, logout } = useAuth();

  const { compareColleges } = useCompare();

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

          {/* Desktop Nav */}

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

            {/* AI Tools Dropdown */}

            <div className="relative">
              <button
                onClick={() => setAiMenuOpen(!aiMenuOpen)}
                className="
                  flex
                  items-center
                  gap-1
                  text-slate-700
                  hover:text-blue-600
                  transition
                "
              >
                AI Tools
                <motion.div
                  animate={{
                    rotate: aiMenuOpen ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence>
                {aiMenuOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -10,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="
        absolute
        top-12
        left-0
        w-56
        backdrop-blur-xl
bg-white/95
        rounded-2xl
        shadow-xl
        py-2
        origin-top
      "
                  >
                    <Link
                      to="/compare"
                      className="
                      flex
                      justify-between
                      px-4
                      py-3
                      hover:bg-slate-100
                    "
                    >
                      <span>Compare</span>

                      {compareColleges.length > 0 && (
                        <span
                          className="
                          bg-blue-600
                          text-white
                          text-xs
                          px-2
                          py-1
                          rounded-full
                        "
                        >
                          {compareColleges.length}
                        </span>
                      )}
                    </Link>

                    <Link
                      to="/ai-chat"
                      className="
                      block
                      px-4
                      py-3
                      hover:bg-slate-100
                    "
                    >
                      AI Counselor
                    </Link>

                    <Link
                      to="/ai-compare"
                      className="
                      block
                      px-4
                      py-3
                      hover:bg-slate-100
                    "
                    >
                      AI Compare
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/dashboard"
              className="text-slate-700 hover:text-blue-600 transition"
            >
              Dashboard
            </Link>

            {user?.role === "admin" && (
              <Link
                to="/admin"
                className="text-slate-700 hover:text-blue-600 transition"
              >
                Admin
              </Link>
            )}
          </nav>

          {/* User Section */}

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <div
                  className="
                    h-10
                    w-10
                    rounded-full
                    bg-blue-600
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                >
                  {user.name?.charAt(0)?.toUpperCase()}
                </div>

                <span className="font-medium text-slate-700">{user.name}</span>

                <button
                  onClick={logout}
                  className="
                    px-4
                    py-2
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    rounded-lg
                    transition
                  "
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-slate-700 hover:text-blue-600"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="
                    px-4
                    py-2
                    bg-blue-600
                    hover:bg-blue-700
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
          <div className="flex flex-col gap-4 p-4">
            <Link to="/">Home</Link>

            <Link to="/colleges">Colleges</Link>

            <Link to="/compare">Compare</Link>

            <Link to="/ai-chat">AI Counselor</Link>

            <Link to="/ai-compare">AI Compare</Link>

            <Link to="/dashboard">Dashboard</Link>

            {user?.role === "admin" && <Link to="/admin">Admin</Link>}

            {user ? (
              <button
                onClick={logout}
                className="
                  bg-red-500
                  text-white
                  py-2
                  rounded-lg
                "
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login">Login</Link>

                <Link
                  to="/register"
                  className="
                    bg-blue-600
                    text-white
                    text-center
                    py-2
                    rounded-lg
                  "
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
