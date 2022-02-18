import React from "react";

/* ------------------------------ Import Styles ----------------------------- */
import "./NavBar.css";

function NavBar({ image, Home, Services, Projects, AboutMe, Contact }) {
  return (
    <React.Fragment>
      <div className="NavBar_Container">
        <div className="NavBar_Content">
          <div className="NavBar_Logo_Content">
            <div className="NavBar_Logo_Image">{image}</div>
          </div>
          <div className="Navbar_Options_Content">
            <p className="NavBar_Options_Text">{Home}</p>
            <p className="NavBar_Options_Text">{Services}</p>
            <p className="NavBar_Options_Text">{Projects}</p>
            <p className="NavBar_Options_Text">{AboutMe}</p>
            <p className="NavBar_Options_Text">{Contact}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default NavBar;  