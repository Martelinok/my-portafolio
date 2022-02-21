import React from "react";
import { useTranslate } from "react-translate";
import { connect } from "react-redux";
/* ---------------------------- import Components --------------------------- */
import SvgIcon from "../../assets/Images/SvgIcon";
import ProfileImage from "../../assets/Images/Kmc-Black.jpg";
import Widget from "./Widget/Widget"
import './Home.css';
function Home() {
  let t = useTranslate("Home");
  return (
    <React.Fragment>
      <div className="Home_Content">
        <div className="Home_Me_Content">
          <div className="Home_Name_Content">
            <p className="Home_Name_Content_P">{t("Iam")}</p>
            <h1 className="Home_Name_Content_H1">{t("Name")}</h1>
            <h2 className="Home_Name_Content_H2">{t("Profesion")}</h2>
            <div className="Home_SocialMedia_Content">
              <div className="Home_SocialMedia_Content_Text">
                <p className="Home_SocialMedia_P">{t("Follow")}</p>
              </div>
              <a className="Home_SocialMedia_Image" href="https://www.facebook.com/kamil.m.c.mendoza">
                <SvgIcon name="Github" fill="#FC5073" />
              </a>
              <a className="Home_SocialMedia_Image" href="https://www.facebook.com/kamil.m.c.mendoza">
                <SvgIcon name="LinkedIn" fill="#FC5073" />
              </a>
              <a className="Home_SocialMedia_Image" href="https://www.facebook.com/kamil.m.c.mendoza">
                <SvgIcon name="Instagram" fill="#FC5073" />
              </a>
            </div>
          </div>
          <div className="Home_Image_Content">
            <img src={ProfileImage} alt="" className="Home_Image_Content_Style" />
          </div>
        </div>
        <div className="Home_What_Do_Content">
          <div className="Home_What_Do_Widget_Content">
            <Widget
              Color1="rgba(63, 26, 137, 1)"
              Color2="rgba(0, 180, 204, 1)"
              Title={t("WebApp")}
              Image={<SvgIcon name="WebApp" fill="#FC5073" />}
              Text={t("WebAppText")}
            />
            <Widget
              Color1="rgba(46, 33, 175, 1)"
              Color2="rgba(106, 91, 226, 1)"
              Title={t("WebApp")}
              Image={<SvgIcon name="WebApp" fill="#FC5073" />}
              Text={t("WebAppText")}
            />
          </div>
          <div className="Home_What_Do_Text_Content">
            <div className="Home_What_Do_Text_Title_Content">
              <div className="Home_What_Do_Text_Title_Line"></div>
              <h3 className="Home_What_Do_Text_Title_H3">{t("WhatDo")}</h3>
            </div>
            <div className="Home_What_Do_P_Content">
              <p className="Home_What_Do_P">{t("WhatDoText")}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
});
export default connect(mapStateToProps)(Home);