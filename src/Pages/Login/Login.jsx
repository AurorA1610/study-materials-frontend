import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    logIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
      })
      .catch((error) => console.log("error", error.message));
  };

  return (
    <div className="min-h-96">
      <div className="flex justify-center items-center flex-col m-10">
        <h1 className="text-4xl">Log in to access all the study materials!</h1>
        <button className="mt-10 btn btn-primary" onClick={handleGoogleSignIn}>
          Log in using Google
        </button>
      </div>
    </div>
  );
};

export default Login;
