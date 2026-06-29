import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response =
        await api.post(
          "/auth/forgot-password",
          { email }
        );

      toast.success(
        response.data.message
      );

      setEmail("");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to send reset link"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto py-20 px-4">

        <h1 className="text-3xl font-bold mb-8">
          Forgot Password
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              w-full
              border
              p-3
              rounded-xl
            "
            required
          />

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
              ? "Sending..."
              : "Send Reset Link"}
          </button>

        </form>

      </div>
    </MainLayout>
  );
};

export default ForgotPassword;