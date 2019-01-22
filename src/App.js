import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import DashboardPage from "./components/pages/DashboardPage";
import "./App.css";

const App = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/dashboard" exact component={DashboardPage} />
  </div>
);

export default App;
