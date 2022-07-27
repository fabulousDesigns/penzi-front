import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./register.css";
import Footer from "./Footer";

// code begins here
function Login() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    telephone: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      telephone: user.telephone,
      password: user.password,
    };
    // console.log(sendData);
    axios
      .post("http://localhost/penzi-v2.0/API/login.php", sendData)
      .then((response) => {
        if (response.data.Status === "200") {
          Swal.fire({
            title: "Login",
            text: "Login successful",
            icon: "success",
          });
          window.localStorage.setItem("telephone", response.data.telephone);
          navigate(`/dashboard`);
        } else {
          // alert("Invalid User");
          Swal.fire({
            title: "Invalid Credentials",
            text: "Oops something went wrong",
            icon: "error",
          });
        }
      });
  };
  const inputs = document.querySelectorAll(".input__box input");
  const labels = document.querySelectorAll(".input__box label");

  labels.forEach((label) => {
    label.innerHTML = label.innerText
      .split("")
      .map(
        (letter, idx) => `<span style="
				transition-delay: ${idx * 5}ms
			">${letter}</span>`
      )
      .join("");
  });

  return (
    <section>
      <div className="login__container">
        <form onSubmit={submitForm}>
          <h3>Penzi Login </h3>
          {/* Telephone */}
          <div className="input__box">
            <input
              type="tel"
              onChange={handleChange}
              value={user.telephone}
              name="telephone"
              required
            />
            <label for="Telephone">Telephone</label>
          </div>
          {/* password */}
          <div className="input__box">
            <input
              type="password"
              onChange={handleChange}
              value={user.password}
              name="password"
              required
            />
            <label for="password">Password</label>
          </div>
          <button type="submit" className="btn__submit">
            LOGIN
          </button>
          <span>
            <small>
              <b>
                Not a member? Register <Link to="/register">Here</Link>
              </b>
            </small>
          </span>
        </form>
      </div>
      {/* footer */}
      <Footer />
    </section>
  );
}

export default Login;
