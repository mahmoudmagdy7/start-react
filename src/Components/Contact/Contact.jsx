import React, { Component } from "react";

export default class Contact extends Component {
  colorChanger(e) {
    let label = document.querySelectorAll("label");
    for (const i of label) {
      i.style.color = "black";
      if (i.getAttribute("For") === e.target.id) {
        i.style.color = "#1abc9c";
      }
    }
  }

  LabelChanger(e) {
    e.target.nextElementSibling.style.display = "none";
    if (e.target.getAttribute("id") == "userMail") {
      let validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.\w+$/;
      if (!document.querySelector("#userMail").value.match(validation)) {
        document.querySelector(
          "#userMail"
        ).nextElementSibling.innerHTML = `<span className="me-1">&bull;</span> Not a valid email address`;
        document.querySelector("#userMail").nextElementSibling.style.display =
          "block";
        console.log("hello");
        e.preventDefault();
      } else {
        document.querySelector("#userMail").nextElementSibling.style.display =
          "none";
        document.querySelector(
          "#userMail"
        ).nextElementSibling.innerHTML = `<span className="me-1">&bull;</span> Please enter your email`;
      }
    }
    let labels = document.querySelectorAll("label");
    let label;
    for (const i of labels) {
      if (i.getAttribute("For") === e.target.id) {
        label = i;
      }
    }
    if (e.target.value !== "") {
      label.style.top = "0";
    } else {
      label.style.top = "25px";
    }
  }
  validation(e) {
    let input = document.querySelectorAll(".input");
    for (const i of input) {
      if (i.value === "") {
        e.preventDefault();
        i.nextElementSibling.style.display = "block";
      }
    }
  }
  emailValidation(e) {
    const emailInput = document.querySelector("#userMail");
    const emailError = emailInput.nextElementSibling;
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.\w+$/;

    if (!emailInput.value.match(emailValidation)) {
      emailError.style.display = "block";
      emailError.innerHTML = `<span className="me-1">&bull;</span> Not a valid email address`;
      e.preventDefault();
    } else {
      emailError.style.display = "none";
      emailError.innerHTML = `<span className="me-1">&bull;</span> Please enter your email`;
    }
  }
  render() {
    return (
      <>
        <section id="contact" className=" p-5 my-5">
          <div className="container contact mt-4 d-flex flex-column align-items-center">
            <h2>CONTACT ME</h2>
            <div className="d-flex my-3 w-50 justify-content-center align-items-center ">
              <div className="line"></div>
              <i className="fas fa-star px-3 fs-1"></i>
              <div className="line"></div>
            </div>

            <div className="form-container px-md-5 w-75 m-auto">
              <form className="w-100 ">
                <div className="form-group">
                  <div className="label-container overflow-hidden">
                    <label id="userNameLabel" htmlFor="userName">
                      Name
                    </label>
                  </div>
                  <input
                    onClick={this.colorChanger}
                    onKeyUp={this.LabelChanger}
                    id="userName"
                    type="text"
                    placeholder="Name"
                    className="w-100 input"
                  />
                  <p>
                    <span className="me-1">&bull;</span> Please enter your name.
                  </p>
                </div>
                <div className="form-group">
                  <div className="label-container overflow-hidden">
                    <label id="mailLabel" htmlFor="userMail">
                      Email Address
                    </label>
                  </div>

                  <input
                    onKeyUp={this.LabelChanger}
                    onClick={this.colorChanger}
                    id="userMail"
                    type="email"
                    placeholder="Email Address"
                    className="w-100 input"
                  />
                  <p>
                    <span className="me-1">&bull;</span> Please enter your email
                    address.
                  </p>
                </div>
                <div className="form-group">
                  <div className="label-container overflow-hidden">
                    <label id="phoneLabel" htmlFor="phoneNumber">
                      Phone Number
                    </label>
                  </div>
                  <input
                    onKeyUp={this.LabelChanger}
                    onClick={this.colorChanger}
                    id="phoneNumber"
                    type="number"
                    placeholder="Phone Number"
                    className="w-100 input"
                  />
                  <p>
                    <span className="me-1">&bull;</span> Please enter your phone
                    number.
                  </p>
                </div>
                <div className="form-group">
                  <div className="label-container overflow-hidden">
                    <label id="messageLabel" htmlFor="message">
                      Message
                    </label>
                  </div>

                  <textarea
                    onKeyUp={this.LabelChanger}
                    onClick={this.colorChanger}
                    id="message"
                    rows="6"
                    placeholder="Message"
                    className="w-100 input"
                  ></textarea>
                  <p>
                    <span className="me-1">&bull;</span> Please enter a message.
                  </p>
                </div>

                <button onClick={this.validation} className="btn ">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}
