import React, { Component } from "react";
import { Route } from "react-router-dom";
import TopNavigation from "./components/nevigation/TopNavigation";
import HomePage from "./components/pages/HomePage";
import MainPage from "./components/pages/MainPage";
import ProfilePage from "./components/pages/ProfilePage";
import ProjectPage from "./components/pages/ProjectPage";

import "./App.css";

const App = () => (
  <div>
    <div>
      <Route path="/" exact component={HomePage} />
    </div>
    <div>
      <TopNavigation />
      <Route path="/main" exact component={MainPage} />
      <Route path="/profile" exact component={ProfilePage} />
      <Route path="/projects" exact component={ProjectPage} />
    </div>
  </div>
);

export default App;
