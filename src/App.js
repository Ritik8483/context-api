import logo from "./logo.svg";
import "./App.css";
import Component2 from "./components/Component2";
import { Component1 } from "./components/Component1";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
// import Home from "./lazyFolder/Home";
// import Card from "./lazyFolder/Card";
const Home = React.lazy(() => import("./lazyFolder/Home"));
const Card = React.lazy(() => import("./lazyFolder/Card"));

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="home"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route path="card" element={<Card />} />
          <Route
            path="/"
            element={
              <Component1>
                <Component2 />
              </Component1>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
