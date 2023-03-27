import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section id="about" className=" p-5 my-5">
        <div className="container about mt-4 d-flex flex-column align-items-center">
          <h2>ABOUT</h2>
          <div className="d-flex my-3 w-50 justify-content-center align-items-center ">
            <div className="line"></div>
            <i className="fas fa-star px-3 fs-1"></i>
            <div className="line"></div>
          </div>
          <div className="row px-lg-5">
            <div className="col-lg-6">
              <p className="lead">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-lg-6">
              <p className="lead">
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
