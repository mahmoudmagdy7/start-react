import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className=" pt-5">
          <div className="row gy-4 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 text-white mx-auto container">
            <div className="col my-3 text-center">
              <h2>LOCATION</h2>
              <p className="lead fw-normal">
                2215 John Daniel Drive <br /> Clark, MO 65243
              </p>
            </div>
            <div className="col my-3 text-center">
              <h2>AROUND THE WEB</h2>

              <div className="social-icons d-flex justify-content-center">
                <div className="icon d-flex justify-content-center align-items-center border border-3 rounded-circle">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="icon d-flex justify-content-center align-items-center border border-3 rounded-circle">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="icon d-flex justify-content-center align-items-center border border-3 rounded-circle">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div className="icon d-flex justify-content-center align-items-center border border-3 rounded-circle">
                  <i className="fab fa-dribbble"></i>
                </div>
              </div>
            </div>
            <div className="col my-3 text-center">
              <h2>ABOUT FREELANCER</h2>
              <p className="lead fw-normal">
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Route
              </p>
            </div>
          </div>
          <div className="copyright py-4 text-center">
            <p className="m-0">Copyright © Your Website 2021</p>
          </div>
        </footer>
      </>
    );
  }
}
