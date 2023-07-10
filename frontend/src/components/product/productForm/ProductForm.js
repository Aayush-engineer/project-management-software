import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";
import { Link } from "react-router-dom";

import "./ProductForm.scss";

const ProductForm = ({
  product,
  productImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveProduct,
}) => {
  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <form onSubmit={saveProduct}>
          <Card cardClass={"group"}>
            <label>Project Image</label>
            <code className="--color-dark">
              Supported Formats: jpg, jpeg, png
            </code>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="product" />
              </div>
            ) : (
              <p>No image set for this project</p>
            )}
          </Card>
          <label>Project Name:</label>
          <input
            type="text"
            placeholder="Project name"
            name="name"
            value={product?.name}
            onChange={handleInputChange}
          />

          <label>Project No:</label>
          <input
            type="text"
            placeholder="Project number"
            name="category"
            value={product?.category}
            onChange={handleInputChange}
          />

          <label>Cost of project</label>
          <input
            type="text"
            placeholder="Project cost"
            name="price"
            value={product?.price}
            onChange={handleInputChange}
          />

          {/* <label>Project Quantity:</label> */}
          <label>Project pdc:</label>

          <input
            type="text"
            placeholder="Project pdc"
            name="quantity"
            value={product?.quantity}
            onChange={handleInputChange}
          />

          <label> Date of senction:</label>

          <input type="text" placeholder="date of project" name="date" />

          <label>Project Description:</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
          />

          <div className="--my">
            <button type="submit" className="--btn btn">
              Save Project
            </button>
          </div>
        </form>

        <div className="heading">
          <span>MORE DETAILS</span>
        </div>

        <div className="heading1">
          <span>
            <Link className="footerlinks --btn" to="/add-demand">
              Add demand
            </Link>
          </span>
        </div>

        <div className="heading1">
          <span>
            <Link className="footerlinks --btn" to="/add-supplyorder">
              Enter supply order detail
            </Link>
          </span>
        </div>
        <div className="heading1">
          <span>
            <Link className="footerlinks --btn" to="/add-supplyorder">
              Enter Rn detail
            </Link>
          </span>
        </div>
        <div className="heading1 ">
          <span>
            <Link className="footerlinks --btn" to="/add-supplyorder">
              Enter crv detail
            </Link>
          </span>
        </div>
        <div className="heading1">
          <span>
            <Link className="footerlinks --btn" to="/add-supplyorder">
              Enter payment detail
            </Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ProductForm;
