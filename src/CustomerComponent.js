import React from "react";

const CustomerComponent = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header">Hitesh</div>
        <div className="card-body">
          <h5 className="card-title">hitesh@gmail.com</h5>
          <p className="card-text">Current Balance: 20</p>
          <a href="/" className="btn btn-primary">
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomerComponent;
