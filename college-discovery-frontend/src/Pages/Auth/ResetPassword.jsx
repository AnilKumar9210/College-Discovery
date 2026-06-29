import { useState } from "react";
import { useParams } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const { token } = useParams();

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const response =
        await api.post(
          `/auth/reset-password/${token}`,
          {
            password,
          }
        );

      toast.success(
        response.data.message
      );

      setPassword("");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Reset failed"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>

      <div className="max-w-md mx-auto py-20 px-4">

        <h1 className="text-3xl font-bold mb-8">
          Reset Password
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div className="relative">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="New Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="
                w-full
                border
                p-3
                rounded-xl
                pr-12
              "
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
              text-white
              py-3
              rounded-xl
            "
          >
            {loading
              ? "Updating..."
              : "Update Password"}
          </button>

        </form>

      </div>

    </MainLayout>
  );
};

export default ResetPassword;