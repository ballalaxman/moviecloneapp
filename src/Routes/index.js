import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layouts";

const Home = React.lazy(() => import("../Pages/home"));
const Movies = React.lazy(() => import("../Pages/movies"));
const Tvshows = React.lazy(() => import("../Pages/tvshows"));
const Auth = React.lazy(() => import("../Pages/auth"));

const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <React.Suspense>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="movies"
            element={
              <React.Suspense>
                <Movies />
              </React.Suspense>
            }
          />
          <Route
            path="tvshows"
            element={
              <React.Suspense>
                <Tvshows />
              </React.Suspense>
            }
          />
          <Route
            path="auth"
            element={
              <React.Suspense>
                <Auth />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </React.Fragment>
  );
};
export default Index;
