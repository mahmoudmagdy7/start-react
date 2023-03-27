import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div className="bg-dark vh-100 vw-100 d-flex justify-content-center align-items-center">
        <h2 className="text-warning fw-bolder display-1 bg-warning bg-opacity-10 px-5 py-2 rounded-4">
          Error 404
        </h2>
      </div>
    );
  }
}

export default NotFound;
