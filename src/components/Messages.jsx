import React, { useState } from "react";
import "./messages.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// WithCountrySelect

function Messages() {
  let history = useNavigate();
  const [msg, setMsg] = useState({
    msg_code: "",
    telephone: "",
    msg_from_text: "",
  });

  const handleChange = (e) => {
    setMsg({ ...msg, [e.target.name]: e.target.value });
    console.log(msg);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      msg_code: msg.msg_code,
      telephone: msg.telephone,
      msg_from_text: msg.msg_from_text,
    };
    console.log(sendData);
    axios
      .post("http://localhost/penzi-v2.0/API/messagesFrom.php", sendData)
      .then((response) => {
        if (response.data.status === "Invalid") {
          alert("Invalid User");
        } else {
          Swal.fire({
            title: "Message Sent",
            text: "Message sent successfully",
            icon: "success",
          });
          history(`/dashboard`);
        }
      });
  };

  return (
    <section id="messages">
      <div className="form__center">
        <form onSubmit={submitForm}>
          <div className="input__box">
            <input
              type="text"
              placeholder="sms code"
              name="msg_code"
              required
              onChange={handleChange}
              value={msg.msg_code}
            />
          </div>
          <div className="input__box">
            <input
              type="text"
              placeholder="phone number"
              name="telephone"
              required
              onChange={handleChange}
              value={msg.telephone}
            />
          </div>
          <div className="input__box">
            <textarea
              name="msg_from_text"
              rows="7"
              placeholder="your Message"
              required
              onChange={handleChange}
              value={msg.msg_from_text}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Messages;
