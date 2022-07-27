import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterUsers from "./components/RegisterUsers";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Messages from "./components/Messages";
import ViewData from "./components/ViewData";
import GetUsers from "./components/GetUsers";
import MessagesTo from "./components/MessagesTo";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUsers />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/view" element={<ViewData />} />
        <Route path="/users" element={<GetUsers />} />
        <Route path="/to" element={<MessagesTo />} />
      </Routes>
    </div>
  );
}

export default App;
