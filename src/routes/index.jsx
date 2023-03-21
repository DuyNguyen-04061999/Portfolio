import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";

const routes = [
  {
    element: <MainLayout />,
    children: [{ element: <Home />, index: true }],
  },
];

export default routes;
