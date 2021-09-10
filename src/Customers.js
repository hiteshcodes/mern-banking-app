import React, { useEffect, useState } from "react";
import CustomerComponent from "./CustomerComponent";

const Customers = () => {
  const [customersList, setCustomerList] = useState();
  return (
    <div className="m-2">
          <h1 className="">Customers List</h1>
          {}
      <CustomerComponent />
    </div>
  );
};

export default Customers;
