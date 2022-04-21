import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Body />
          </>
        }
      />
      <Route path="*" element={<p>Not found</p>} />
    </Routes>
  );
};

export default App;
