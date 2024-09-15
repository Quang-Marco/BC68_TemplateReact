import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import UserTemplate from "../templates/UserTemplate/UserTemplate";
import { pathDefault } from "../common/path";
import RegisterPage from "../pages/Register/RegisterPage";
import LoginPage from "../pages/Login/LoginPage";
import ListJobPage from "../pages/ListJobPage/ListJobPage";
import AdminTemplate from "../templates/AdminTemplate/AdminTemplate";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
// import ManagerUser from "../pages/ManagerUser/ManagerUser";
import CreateUser from "../pages/CreateUser/CreateUser";
import { Skeleton } from "antd";
import Body from "../components/Body/Body";
import ManagerJob from "../pages/ManagerJob/ManagerJob";
const ManagerUser = lazy(() => import("../pages/ManagerUser/ManagerUser"));

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: pathDefault.homePage,
      element: <UserTemplate />,
      children: [
        {
          index: true,
          element: <Body />,
        },
        {
          path: pathDefault.listJob,
          element: <ListJobPage />,
        },
      ],
    },
    {
      path: pathDefault.register,
      element: <RegisterPage />,
    },
    {
      path: pathDefault.login,
      element: <LoginPage />,
    },
    {
      path: pathDefault.admin,
      element: <AdminTemplate />,
      children: [
        {
          index: true,
          element: <ManagerJob />,
        },
        {
          path: "manager-user",
          element: (
            <Suspense fallback={<Skeleton />}>
              <ManagerUser />
            </Suspense>
          ),
        },
        {
          path: "create-user",
          element: <CreateUser />,
        },
        // {
        //   path: "manager-job",
        //   element: <ManagerJob />,
        // },
      ],
    },
    {
      path: "/admin-login",
      element: <AdminLogin />,
    },
  ]);
  return routes;
};

export default useRoutesCustom;
