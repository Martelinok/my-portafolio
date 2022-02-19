import React from 'react';
import { useTranslate } from 'react-translate';
import { connect } from "react-redux";

/* ---------------------------- Import Components --------------------------- */
import NavBar from "../../Components/NavBar/NavBar";
import SvgIcon from "../../Assets/Images/SvgIcon"
import Home from "../Home/Home";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
/* ------------------------------ Import Styles ----------------------------- */
import './Start.css';

function Start({ navegationOptions }) {
  let t = useTranslate("NavBar");
  return (
    <React.Fragment>
      <div className="Start_Container">
        <div className="Start_Content">
          <NavBar
            image={
              <SvgIcon name="logo" fill='#FFFFFF' />
            }
            Home={t("Home")}
            Services={t("Services")}
            Projects={t("Projects")}
            AboutMe={t("AboutMe")}
            Contact={t("Contact")}
          />
          <div className="Start_Page_View">
            {
              navegationOptions === "Home" && <Home />
            }
            {
              navegationOptions === "Services" && <Services />
            }
            {
              navegationOptions === "Projects" && <Projects />
            }
            {
              navegationOptions === "AboutMe" && <AboutMe />
            }
            {
              navegationOptions === "Contact" && <Contact />
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  navegationOptions: state.stateReducer.navegationOptions
});
export default connect(mapStateToProps)(Start);