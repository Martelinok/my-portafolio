import React, { useState } from "react";
import SvgIcon from "../../Assets/Images/SvgIcon";
/* ------------------------------ Import Styles ----------------------------- */
import "./NavBar.css";

function NavBar({ image, Home, Services, Projects, AboutMe, Contact }) {
  const [navigation, setNavigation] = useState('Home');
  const [sideBar, setSideBar] = useState(false);

  const onClickOption = (option) => {
    setNavigation(option);
  }
  return (
    <React.Fragment>
      <div className="NavBar_Container">
        <div className="NavBar_Content">
          <div className={`SideNavbar_Content ${sideBar}`}>
            <div className="SideNavbar_Menu" onClick={() => setSideBar(false)}>
              <SvgIcon name="BackArrow" fill='#FC5073' />
            </div>
            <div className="SideNavbar_Options">
              <p className={`SideNavbar_Options_Text ${navigation === "Home" ? true : false}`} onClick={() => onClickOption('Home')}>{Home}</p>
              <p className={`SideNavbar_Options_Text ${navigation === "Services" ? true : false}`} onClick={() => onClickOption('Services')}>{Services}</p>
              <p className={`SideNavbar_Options_Text ${navigation === "Projects" ? true : false}`} onClick={() => onClickOption('Projects')}>{Projects}</p>
              <p className={`SideNavbar_Options_Text ${navigation === "AboutMe" ? true : false}`} onClick={() => onClickOption('AboutMe')}>{AboutMe}</p>
              <p className={`SideNavbar_Options_Text ${navigation === "Contact" ? true : false}`} onClick={() => onClickOption('Contact')}>{Contact}</p>
            </div>
          </div>
          <div className={`SideNavbar_Skin ${sideBar}`} onClick={() => setSideBar(false)}></div>
          <div className="NavBar_Menu_Content">
            <div className={`NavBar_Menu_Image ${sideBar}`} onClick={() => setSideBar(!sideBar)}>
              <SvgIcon name="Menu" fill='#FC5073' />
            </div>
          </div>
          <div className="NavBar_Logo_Content">
            <div className="NavBar_Logo_Image">{image}</div>
          </div>
          <div className="Navbar_Options_Content">
            <p className={`NavBar_Options_Text ${navigation === "Home" ? true : false}`} onClick={() => onClickOption('Home')}>{Home}</p>
            <p className={`NavBar_Options_Text ${navigation === "Services" ? true : false}`} onClick={() => onClickOption('Services')}>{Services}</p>
            <p className={`NavBar_Options_Text ${navigation === "Projects" ? true : false}`} onClick={() => onClickOption('Projects')}>{Projects}</p>
            <p className={`NavBar_Options_Text ${navigation === "AboutMe" ? true : false}`} onClick={() => onClickOption('AboutMe')}>{AboutMe}</p>
            <p className={`NavBar_Options_Text ${navigation === "Contact" ? true : false}`} onClick={() => onClickOption('Contact')}>{Contact}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default NavBar;  