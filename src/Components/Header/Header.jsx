import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <header className="p-5 text-center ">
        <div className="container my-5 d-flex justify-content-center align-items-center flex-column">
          <img src="assets/asset0.svg" className="my-5" alt="character" />
          <h1>START REACT</h1>
          <div className="d-flex my-3 w-50 justify-content-center align-items-center ">
            <div className="line"></div>
            <i className="fas fa-star px-3 fs-1"></i>
            <div className="line"></div>
          </div>
          <p className="fs-5 fw-normal mt-4">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </header>
    );
  }
}
