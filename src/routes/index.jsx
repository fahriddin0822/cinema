import { useRoutes } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/home/Home";
import Latest from "@/pages/latest/Latest";
import Details from "@/pages/details/Details";
import Movies from "@/components/movies/Movies";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/latest",
      element: (
        <Layout>
          <Latest />
        </Layout>
      ),
    },
    {
      path: "/details",
      element: (
        <Layout>
          <Details />
        </Layout>
      ),
    },
    {
      path: "/movies",
      element: (
        <Layout>
          <Movies />
        </Layout>
      ),
    },
  ]);
};

export default Router;
