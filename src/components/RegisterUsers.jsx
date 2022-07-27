import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./register.css";
import ImageBanner from "../assets/couple.png";

// code starts here
function RegisterUsers() {
  let history = useNavigate();
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    telephone: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      first_name: data.first_name,
      last_name: data.last_name,
      telephone: data.telephone,
      password: data.password,
    };
    // console.log(sendData);
    axios
      .post("http://localhost/penzi-v2.0/API/insert.php", sendData)
      .then((response) => {
        if (response.data.Status === "Invalid") {
          alert("Invalid User");
        } else {
          Swal.fire({
            title: "Registration Complete",
            text: "Hurray!! Your account was created successfully",
            icon: "success",
          });
          history(`/login`);
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
				transition-delay: ${idx * 50}ms
			">${letter}</span>`
      )
      .join("");
  });

  return (
    <div className="form__box">
      <div className="form__box__right">
        <h3>Penzi Registration Form</h3>
        <img src={ImageBanner} alt="banner" className="img-love" />
        <p className="reg__text">
          Sign up and get hooked up with your soul mate today. <br /> If you
          have an account login here to get started
        </p>
        <Link to="/login" className="btn-reg-log">
          LOGIN
        </Link>
      </div>
      <div className="form__box__left">
        <div className="form__container">
          <form onSubmit={submitForm}>
            {/* collect form data */}
            <h2 className="form__text__intro">Register</h2>
            <div className="input__box">
              <input
                type="text"
                onChange={handleChange}
                value={data.first_name}
                name="first_name"
                required
              />
              <label for="FirstName">FirstName:</label>
            </div>

            {/* last_name */}
            <div className="input__box">
              <input
                type="text"
                onChange={handleChange}
                value={data.last_name}
                name="last_name"
                required
              />
              <label for="LastName">LastName:</label>
            </div>
            {/* telephone */}
            <div className="input__box">
              <input
                type="tel"
                onChange={handleChange}
                value={data.telephone}
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
                value={data.password}
                name="password"
                required
              />
              <label for="password">Password</label>
            </div>
            <button type="submit" className="btn__submit">
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterUsers;
