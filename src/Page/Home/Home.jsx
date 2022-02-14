import React from "react";
/* ---------------------------- import components --------------------------- */
import NavBar from "../../Components/NavBar/NavBar";
import SvgIcon from "../../Assets/Images/SvgIcon"

import './Home.css';
function Home() {

  return (
    <React.Fragment>
      <div className="Home_Container">
        <div className="Home_Content">
          <NavBar
            image={
              <SvgIcon name="logo" fill='#FFFFFF' />
            }
            name="Kevin Martello"
            description="Full Stack Developer"
            Porafoli="Porafoli"
            Experience="Experience"
            WorkTogether="Work Together"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;