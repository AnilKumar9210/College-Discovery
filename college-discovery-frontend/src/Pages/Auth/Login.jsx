import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { useAuth } from "../../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      name: "Anil Kumar",
      email,
    });

    navigate("/");
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto py-20 px-4">

        <h1 className="text-3xl font-bold mb-8">
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

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

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-xl"
          />

          <button
            className="
              w-full
              bg-blue-600
              text-white
              py-3
              rounded-xl
            "
          >
            Login
          </button>

        </form>

      </div>
    </MainLayout>
  );
};

export default Login;