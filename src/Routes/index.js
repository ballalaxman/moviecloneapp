import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layouts";
import Moviedetails from "../Components/Movies/Moviedetails";
import Tvshowdetails from "../Components/Tvshows/Tvshowdetails";

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
        <Route
          path="/movies/:id"
          element={
            <React.Suspense>
              <Moviedetails />
            </React.Suspense>
          }
        />
        {/* <Route
          path="/recommendmovies/:id"
          element={
            <React.Suspense>
              <Moviedetails />
            </React.Suspense>
          } */}
        />
        <Route
          path="/tvshows/:id"
          element={
            <React.Suspense>
              <Tvshowdetails />
            </React.Suspense>
          }
        />
      </Routes>
    </React.Fragment>
  );
};
export default Index;
