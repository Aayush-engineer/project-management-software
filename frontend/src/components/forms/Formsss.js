import React from "react";

import "react-quill/dist/quill.snow.css";
import Card from "../card/Card";

import "./Form.scss";

const Formsss = () => {
  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <div className="heading">
          <span>Supply Order Details</span>
        </div>
        <form>
          <label>Demand No:</label>
          <select name="select">
            <option value="volvo">34</option>
            <option value="volvo">355</option>
            <option value="volvo">66</option>
            <option value="volvo">e44</option>
          </select>

          <label>supply order No:</label>
          <input type="text" placeholder="Enter So Number" name="category" />

          <label>supply order Date:</label>
          <input type="Date" placeholder="dd-mm-yyyy" name="category" />

          <label>Firm Name and Address:</label>
          <input
            type="address"
            placeholder="enter name and address"
            name="category"
          />
          <label>Supply Order Value: (INR)</label>
          <input type="text" placeholder="Order value" name="amount" />

          <label>Supply Order Dp Date:</label>
          <input type="date" placeholder="Order value" name="amount" />

          <div className="--my">
            <button type="submit" className="--btn btn">
              Add Supply order Detail
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Formsss;
