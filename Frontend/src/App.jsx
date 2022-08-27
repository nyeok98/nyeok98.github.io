import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="about" element={<About />} exact />
      </Routes>
    </>
  );
};

export default App;
