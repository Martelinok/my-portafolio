import React from "react";
import { useTranslate } from "react-translate";
import { connect } from "react-redux";

import './Home.css';
function Home() {
  let t = useTranslate("NavBar");    
  return (
    <React.Fragment>
      <div className="Home_Container">
        <div className="Home_Content">
          
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
});
export default connect(mapStateToProps)(Home);