import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    logIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log("error", error.message));
  };

  return (
    <div className="flex justify-center items-center flex-col m-10 bg-custom">
      <h1 className="text-4xl">Log in to upload new materials!</h1>
      <button className="mt-10 btn btn-primary" onClick={handleGoogleSignIn}>
        Log in using Google
      </button>
    </div>
  );
};

export default Login;
