import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="navbar">
          <div className="navBar-logo">
            <img src="/img/logo/logo.png" alt="" />
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a href>Home</a>
              </li>
              <li>
                <a href>Listing</a>
              </li>
              <li>
                <a href>PROPERTY</a>
              </li>
              <li>
                <a href>Pages</a>
              </li>
              <li>
                <a href>Contact</a>
              </li>
              <li>
                <a href>
                  <i className="fas fa-phone-alt"></i> (+88 1990 6868)
                </a>
              </li>
              <li>
                <a href>
                  <i className="fas fa-user"></i>
                </a>
              </li>
              <li>
                <a href target="_blank" className="book-btn">
                  Create Listing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div
        className="about-section"
        style={{ backgroundImage: "url(/img/headerImage/Header.jpg)" }}
      >
        <div className="overlay">
          <div className="inner-details">
            <p className="inner-text">It's great to be home!</p>
            <h2 className="inner-heading">Find your perfect home</h2>
            <ul>
              <li>Buy</li>
              <li>Rent</li>
              <li>Sold</li>
            </ul>
            <div className="form-div">
              <form></form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
