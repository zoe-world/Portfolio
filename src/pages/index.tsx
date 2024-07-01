import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./home";
import ProjectPage from "./project";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project" element={<ProjectPage />} />
    </Routes>
  );
}

export default Routing;
