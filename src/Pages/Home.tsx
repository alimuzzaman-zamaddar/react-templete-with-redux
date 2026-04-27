import { useAuth } from "../Provider/AuthProvider";

const Home = () => {
  const { isAuthenticated, login, logoutAction } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
      <h1 className="text-4xl font-extrabold text-gray-800">
        Welcome to the React Template
      </h1>
      <p className="text-lg text-gray-600 max-w-xl text-center">
        This template is pre-configured with React Router, Redux Toolkit,
        Axios, Context API, and TailwindCSS to kickstart your project.
      </p>

      <div className="p-6 bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-semibold">Auth Status</h2>
        {isAuthenticated ? (
          <div className="space-y-2">
            <p className="text-green-600 font-medium">You are logged in!</p>
            <button
              onClick={logoutAction}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-amber-600 font-medium">You are not logged in.</p>
            <button
              onClick={() => login("fake-token-123", { name: "Test User" })}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Login (Mock)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
