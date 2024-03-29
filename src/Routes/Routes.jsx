import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllPdfs from "../Pages/StudyMaterials/AllPdfs/AllPdfs";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import UploadStudyMaterials from "../Pages/UploadStudyMaterials/UploadStudyMaterials";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "study-materials",
        element: <AllPdfs></AllPdfs>,
      },
      {
        path: "upload-materials",
        element: (
          <PrivateRoute>
            <UploadStudyMaterials></UploadStudyMaterials>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);
