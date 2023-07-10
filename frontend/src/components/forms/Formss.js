import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../card/Card";

import "./Form.scss";

const Formss = () => {
  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <div className="heading">
          <span>Demand Details</span>
        </div>
        <form>
          <label>Demand No:</label>
          <input type="number" placeholder="Demand no" name="name" />

          <label>Demand Date:</label>
          <input type="date" placeholder="Date" name="category" />

          <label>initiating Officer:</label>
          <select name="select">
            <option value="volvo">abhinash , sce </option>
            <option value="saab">ayush do</option>
            <option value="mercedes">Mical dr</option>
            <option value="audi">jack ma</option>
          </select>

          <label>Description of Item:</label>
          <ReactQuill theme="snow" />

          <label> Quantity:</label>
          <input type="text" placeholder="q............" name="quantity" />

          <label>Item Type: (c/Nc/Misc/Job)</label>
          <select name="select">
            <option value="c"> C</option>
            <option value="nc">NC</option>
            <option value="misc">Misc</option>
            <option value="job">Job</option>
          </select>

          <label>Mode:</label>
          <select name="select">
            <option value="Gem"> Gem</option>
            <option value="ss">ss</option>
            <option value="m">m</option>
            <option value="a">a</option>
          </select>

          <label> Initiation Amount:(INR)</label>
          <input type="text" placeholder="amount" name="amount" />

          <label>Category:</label>
          <select name="select">
            <option value="Gem"> Transportation</option>
            <option value="ss">others</option>
          </select>
          <label>Sub Category :</label>
          <select name="select">
            <option value="Gem"> Sub cat 1</option>
            <option value="ss">others</option>
          </select>
          <div className="--my">
            <button type="submit" className="--btn btn">
              Add Demand
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Formss;
