import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/front.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";
import myImage from "../../assets/drdo_logo.png";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <img src={myImage} size={35} />
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard" style={{ fontSize: "20px" }}>
                  Dashboard
                </Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Project Management Software</h2>
          <p>
            Assign Projects, Manage Staff, Keep Track of Timelines & More. Start
            a Free Trial. Easily Integrate With Over a Dozen Apps. Manage
            Systems and Track Hours in One Place.
          </p>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
  );
};

export default Home;
