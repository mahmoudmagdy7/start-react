import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <>
        <div className="position-absolute">
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="fas fa-times me-1 "></i>
                </button>

                <div class="modal-body">
                  <div className="details-card d-flex flex-column align-items-center">
                    <h2>TASTY CAKE</h2>
                    <div className="d-flex my-3 w-50 justify-content-center align-items-center ">
                      <div className="line"></div>
                      <i className="fas fa-star px-3 fs-1"></i>
                      <div className="line"></div>
                    </div>
                  </div>
                  <div className="content text-center d-flex justify-content-center flex-column px-5  align-items-center">
                    <figure className="rounded-3 overflow-hidden">
                      <img id="targetimg" src="" alt="" />
                    </figure>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam unde culpa fugit odit, perferendis accusamus
                      corrupti libero dolorum enim praesentium labore
                      repellendus iure aliquam eius pariatur alias ex!
                      Praesentium, earum.
                    </p>
                    <button
                      data-bs-dismiss="modal"
                      className="btn d-flex align-items-center "
                    >
                      <i class="fas fa-times me-1 "></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          ></div>
          <div className="position-relative rounded-3 overflow-hidden ">
            <img src={this.props.src} className=" img-fluid" alt="card" />
            <div
              onClick={this.props.click}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="hover-layer position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center"
            >
              <i className="fas fa-plus fa-5x"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
