import React,{useState} from "react";

/* ------------------------------ Import Styles ----------------------------- */
import "./NavBar.css";

function NavBar({ image, Home, Services, Projects, AboutMe, Contact }) {
  const [navigation, setNavigation] = useState('Home');
  
  const onClickOption = (option) => {
    setNavigation(option);
  }
  return (
    <React.Fragment>
      <div className="NavBar_Container">
        <div className="NavBar_Content">
          <div className="NavBar_Logo_Content">
            <div className="NavBar_Logo_Image">{image}</div>
          </div>
          <div className="Navbar_Options_Content">
            <p className={`NavBar_Options_Text ${navigation === "Home" ? true : false}`} onClick={()=> onClickOption('Home')}>{Home}</p>
            <p className={`NavBar_Options_Text ${navigation === "Services" ? true : false}`} onClick={()=> onClickOption('Services')}>{Services}</p>
            <p className={`NavBar_Options_Text ${navigation === "Projects" ? true : false}`} onClick={()=> onClickOption('Projects')}>{Projects}</p>
            <p className={`NavBar_Options_Text ${navigation === "AboutMe" ? true : false}`} onClick={()=> onClickOption('AboutMe')}>{AboutMe}</p>
            <p className={`NavBar_Options_Text ${navigation === "Contact" ? true : false}`} onClick={()=> onClickOption('Contact')}>{Contact}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default NavBar;  