import React from "react";
import { useTranslate } from "react-translate";
/* ---------------------------- import components --------------------------- */
import NavBar from "../../Components/NavBar/NavBar";
import SvgIcon from "../../Assets/Images/SvgIcon"

import './Home.css';
function Home() {
  let t = useTranslate("NavBar");

  return (
    <React.Fragment>
      <div className="Home_Container">
        <div className="Home_Content">
          <NavBar
            image={
              <SvgIcon name="logo" fill='#FFFFFF' />
            }
            Home={t("Home")}
            Services={t("Services")}
            Projects= {t("Projects")}
            AboutMe={t("AboutMe")}
            Contact={t("Contact")}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;