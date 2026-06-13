import MainLayout from "../../layouts/MainLayout";

const Register = () => {
  return (
    <MainLayout>

      <div className="max-w-md mx-auto py-20 px-4">

        <h1 className="text-3xl font-bold mb-8">
          Register
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-xl"
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
            Create Account
          </button>

        </form>

      </div>

    </MainLayout>
  );
};

export default Register;