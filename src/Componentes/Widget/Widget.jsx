import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";

function Widget() {
  return (
    <>
      <Button variant="outline-dark">
        <i className="bi bi-cart3"></i>
      </Button>
    </>
  );
}

export default Widget;
