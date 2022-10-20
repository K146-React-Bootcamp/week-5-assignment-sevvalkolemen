import React, { useState } from "react";

function Header() {
  console.log("Header Component Render Edildi");

  let [name, setName] = useState("Test");

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-secondary"
                onClick={
                  name === "Test"
                    ? () => setName((name = "Deneme"))
                    : () => setName((name = "Test"))
                }
              >
                {name}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// React.memo Bileşinin aldığı props’ları yüzeysel olarak kontrol ederek, bir değişiklik yoksa son render edilen sonucu kullanır.
export default React.memo(Header);
