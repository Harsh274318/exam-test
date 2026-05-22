import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleClick = () => {
    if (token) {
      toast.success("Successfully Loggedout")
      localStorage.removeItem("token");
      navigate("/");
      window.location.reload();
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-gray-700">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold text-white">
          TestForge
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Dashboard Button */}
          {token && (
            <button
              onClick={() => navigate("/dashboard")}
              className="
          bg-white text-black
          px-3 sm:px-5
          py-1.5 sm:py-2
          text-sm sm:text-base
          rounded-lg sm:rounded-xl
          font-medium
          hover:bg-gray-200
          transition
        "
            >
              Dashboard
            </button>
          )}

          {/* Login / Logout */}
          <button
            onClick={handleClick}
            className="
        bg-gray-800 text-white
        px-3 sm:px-5
        py-1.5 sm:py-2
        text-sm sm:text-base
        rounded-lg sm:rounded-xl
        border border-gray-600
        hover:bg-gray-700
        transition
      "
          >
            {token ? "Logout" : "Login"}
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;