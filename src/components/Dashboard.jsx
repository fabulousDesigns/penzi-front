import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import Messages from "./Messages";
function Dashboard() {
  return (
    <>
      <div class="sidebar">
        <div className="d__title">
          <h3>DASHBOARD</h3>
        </div>
        <div className="d__links">
          <a href="#home">Home</a>
          <a href="#messages">Messages</a>
          <a href="#contact">Contact</a>
          <a href="#about">Setting</a>
        </div>
        <button type="submit" className="btn__logout">
          LOGOUT
        </button>
      </div>

      <div className="content">
        <section id="home">
          <h2 className="home__header">WELCOME TO THE DASHBORD</h2>
        </section>
        <Messages />
      </div>
    </>
  );
}

export default Dashboard;
