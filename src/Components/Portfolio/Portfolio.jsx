import React, { Component } from "react";
import Card from "./Card";
// import DetailsCard from "./../DetailsCard/DetailsCard";
export default class Portfolio extends Component {
  state = {
    data: [
      { src: "assets/asset 1.png", title: "LOG CABIN" },
      { src: "assets/asset 2.png", title: "TASTY CAKE" },
      { src: "assets/asset 3.png", title: "CIRCUS TENT" },
      { src: "assets/asset 4.png", title: "CONTROLLER" },
      { src: "assets/asset 5.png", title: "LOCKED SAFE" },
      { src: "assets/asset 6.png", title: "SUBMARINE" },
    ],
  };
  showMe(el) {
    let src = el.target.previousElementSibling.getAttribute("src");
    let elem = document.querySelector("#targetimg");
    elem.setAttribute("src", src);
  }

  render() {
    return (
      <>
        <section id="portfolio" className="container">
          <div className="portfolio mt-4 pt-5 pb-3 d-flex flex-column align-items-center">
            <h2>PORTFOLIO</h2>
            <div className="d-flex my-3 w-50 justify-content-center align-items-center ">
              <div className="line"></div>
              <i className="fas fa-star px-3 fs-1"></i>
              <div className="line"></div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-sm-1  mx-auto g-5 ">
            {this.state.data.map((e, key) => (
              <Card
                click={(el) => {
                  this.showMe(el);
                }}
                key={key}
                src={e.src}
              />
            ))}
          </div>
        </section>
      </>
    );
  }
}
