import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../../redux/features/auth/authSlice";
import { getProduct } from "../../../redux/features/product/productSlice";
import Card from "../../card/Card";
import { SpinnerImg } from "../../loader/Loader";
import "./ProductDetail.scss";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const { id } = useParams();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { product, isLoading, isError, message } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProduct(id));
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div className="product-detail">
      <h3 className="--mt">project Detail</h3>
      <Card cardClass="card">
        {isLoading && <SpinnerImg />}
        {product && (
          <div className="detail">
            <Card cardClass="group">
              {product?.image ? (
                <img
                  src={product.image.filePath}
                  alt={product.image.fileName}
                />
              ) : (
                <p>No image set for this project</p>
              )}
            </Card>
            <hr />
            <h4>
              <span className="badge">Name of Project: </span> &nbsp;{" "}
              {product.name}
            </h4>
            <p>
              <b>&rarr; project no : </b> {product.category}
            </p>
            <p>
              <b>&rarr; Cost of project : </b> {"$"}
              {product.price}
            </p>
            <p>
              <b>&rarr; Project pdc : </b> {product.quantity}
            </p>
            <p>
              <b>&rarr; Total Value of project : </b> {"$"}
              {product.price * product.quantity}
            </p>

            <div className="heading1">
              <span>
                <Link className="footerlinks --btn" to="/add-demand">
                  demand Details
                </Link>
              </span>
            </div>

            <div className="heading1">
              <span>
                <Link className="footerlinks --btn" to="/add-supplyorder">
                  supply order detail
                </Link>
              </span>
            </div>
            <div className="heading1">
              <span>
                <Link className="footerlinks --btn" to="/add-supplyorder">
                  Rn detail of project
                </Link>
              </span>
            </div>
            <div className="heading1 ">
              <span>
                <Link className="footerlinks --btn" to="/add-supplyorder">
                  crv detail
                </Link>
              </span>
            </div>
            <div className="heading1">
              <span>
                <Link className="footerlinks --btn" to="/add-supplyorder">
                  payment detail
                </Link>
              </span>
            </div>
            <hr />
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.description),
              }}
            ></div>
            <hr />
            <code className="--color-dark">
              Created on: {product.createdAt.toLocaleString("en-US")}
            </code>
            <br />
            <code className="--color-dark">
              Last Updated: {product.updatedAt.toLocaleString("en-US")}
            </code>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ProductDetail;
