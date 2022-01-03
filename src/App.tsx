import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserCreate from "./pages/users/UserCreate";
import UserEdit from "./pages/users/UserEdit";
import Users from "./pages/users/Users";
import Roles from './pages/roles/Roles';

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
          <Route path={"users/:id/edit*"} element={<UserEdit />} />
          <Route path={"roles*"} element={<Roles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
