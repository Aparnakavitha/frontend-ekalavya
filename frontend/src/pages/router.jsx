import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./index";
import Explore from "./Explore";
import EventDescription from "./EventDescription";
import Mentor from "./mentor/Mentor";

const RouterComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/explore/description"
            element={<EventDescription />}
          />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/*" element={<Home />} />
          <Route exact path="/mentor" element={<Mentor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterComponent;
