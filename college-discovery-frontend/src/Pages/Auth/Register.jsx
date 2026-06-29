import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import MainLayout from "../../layouts/MainLayout";
import { registerUser } from "../../Services/authServices";
import toast from "react-hot-toast";

const Register = () => {
  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {

        setLoading(true);

        await registerUser(
          name,
          email,
          password
        );

        toast.success ("Account created successfully")

        navigate("/login");

      } catch (error) {

        // alert(
        //   error.response?.data?.message ||
        //   "Registration failed"
        // );

        toast.error (`${error.response?.data?.message} || Registration failed`)

      } finally {
        setLoading(false);
      }
    };

  return (
    <MainLayout>

      <div className="max-w-md mx-auto py-20 px-4">

        <h1 className="text-3xl font-bold mb-8">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-xl"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-xl"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <div className="relative">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              className="
                w-full
                border
                p-3
                rounded-xl
                pr-12
              "
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-slate-500
              "
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          <button
            disabled={loading}
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-3
              rounded-xl
              transition
            "
          >
            {loading
              ? "Creating..."
              : "Create Account"}
          </button>

        </form>

      </div>

    </MainLayout>
  );
};

export default Register;