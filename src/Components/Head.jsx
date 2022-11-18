import React from "react";
import { header } from "../portfolio";
import Navbar from "./Navbar/Navbar";
import "./Header/Header.css";

function Head() {
  const { homepage, title } = header;
  return (
    <>
      <div class="d-flex justify-content-between">
        <nav class="navbar bg-light p-5" style={{width:'100%'}}>
          <h3 style={{ paddingRight: "180px" }}>
            {homepage ? (
              <a
                href={homepage}
                className="link"
                style={{ fontFamily: "Jaldi", color: "rgb(58, 97, 182)" }}
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          <Navbar />
        </nav>
      </div>
    </>
  );
}

export default Head;
