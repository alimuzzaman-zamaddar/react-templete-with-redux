import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="container mx-auto font-bold text-xl text-blue-600">
          React Template
        </div>
      </header>

      <main className="grow container mx-auto p-4">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <div className="container mx-auto text-sm">
          &copy; {new Date().getFullYear()} React Template. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
