import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector"; // Import the LanguageSelector component

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md flex justify-between items-center">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <Link to="/" className="text-sky-500 text-xl font-bold">
          stockVideoApp
        </Link>
      </div>

      {/* Middle Section: Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700">
        <li>
          <Link to="/" className="hover:text-sky-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/videos" className="hover:text-sky-500">
            Videos
          </Link>
        </li>
        <li>
          <Link to="/images" className="hover:text-sky-500">
            Images
          </Link>
        </li>
        <li>
          <Link to="/search" className="hover:text-sky-500">
            Search
          </Link>
        </li>
        <li>
          <Link to="/detail/1" className="hover:text-sky-500">
            Detail
          </Link>
        </li>
        <li>
          <Link to="/upload" className="hover:text-sky-500">
            Upload
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-sky-500">
            Profile
          </Link>
        </li>
      </ul>

      {/* Right Section: Utility Links and Buttons */}
      <div className="flex items-center space-x-4">
        {/* Hidden on small screens */}
        <div className="hidden md:flex items-center space-x-2 text-gray-700">
          <span>0 Credits Available</span>
          <Link to="/pricing" className="hover:text-gray-900">
            Pricing
          </Link>
        </div>

        {/* Integrating the Language Selector */}
        <LanguageSelector />

        {/* Favorite & Cart Icons */}
        <button className="hidden md:block p-2 text-gray-500 hover:text-gray-900">
          ❤️
        </button>
        <button className="hidden md:block p-2 text-gray-500 hover:text-gray-900">
          🛒
        </button>

        {/* Log in and Sign up buttons */}
        <Link to="/login" className="px-4 py-1 border border-gray-300 rounded hover:bg-gray-100 text-gray-700">
          Log in
        </Link>
        <Link to="/signup" className="px-4 py-1 bg-gray-900 text-white rounded hover:bg-gray-700">
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
