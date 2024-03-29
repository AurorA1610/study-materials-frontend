import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/study-materials">Study Materials</Link>
            </li>
            <li>
              <Link to="/upload-materials">Upload Materials</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Study Materials</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/study-materials">Study Materials</Link>
          </li>
          <li>
            <Link to="/upload-materials">Upload Materials</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div>
            <span className="text-green-600 me-5">{user.displayName}</span>
            <button className="btn btn-ghost" onClick={handleSignOut}>
              Log Out
            </button>
          </div>
        ) : (
          <Link className="btn" to="/login">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
