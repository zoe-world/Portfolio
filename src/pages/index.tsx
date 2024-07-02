import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./home";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default Routing;
