import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserCreate from "./pages/users/UserCreate";
import Users from "./pages/users/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"users/*"} element={<Users />} />
          <Route path={"register/*"} element={<Register />} />
          <Route path={"login/*"} element={<Login />} />
          <Route path={"users/create/*"} element={<UserCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
