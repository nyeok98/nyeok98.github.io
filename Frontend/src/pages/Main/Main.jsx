import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <h1>Main</h1>
      <Link to="/about">Who is this?</Link>
    </>
  );
};

export default Main;
