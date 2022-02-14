import React from "react";

/* ------------------------------ Import Styles ----------------------------- */
import "./NavBar.css";

function NavBar({ name, description, image, Porafoli, Experience, WorkTogether }) {
  return (
    <React.Fragment>
      <div className="NavBar_Container">
        <div className="NavBar_Content">
          <div className="Logo_Container">
            <div className="Logo_Image_Content">
              {image}
            </div>
            <div className="Logo_Name_Content">
              <h3 className="Logo_Name_Content_Name">{name}</h3>
              <p className="Logo_Name_Content_Description">{description}</p>
            </div>
          </div>
          <div className="NavBar_Navegation_Content">
            <p className="NavBar_Navegation_Text">{Porafoli}</p>
            <p className="NavBar_Navegation_Text">{Experience}</p>
            <p className="NavBar_Navegation_Text">{WorkTogether}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default NavBar;  