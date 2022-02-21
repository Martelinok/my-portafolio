import React from "react";
import { useTranslate } from "react-translate";
/* ---------------------------- Import Components --------------------------- */
import Kcm from "../../assets/Images/Kcm-Layout.png";
import Skills from "../../assets/Images/Skills.png";
/* ------------------------------ Import Style ------------------------------ */
import './AboutMe.css';
function AboutMe(params) {
    const t = useTranslate("AboutMe");
    return (
        <React.Fragment>
            <div className="AboutMe_Container">
                <div className="AboutMe_Content">
                    <div className="AboutMe_Text_Content">
                        <div className="AboutMe_Text_Title_Content">
                            <div className="AboutMe_Title_Line"></div>
                            <h3 className="AboutMe_Text_Title">{t("AboutMe")}</h3>
                        </div>
                        <div className="AboutMe_Text_Big_Title_Content">
                            <h1 className="AboutMe_Text_Big_Title_H1">{t("AboutMeTitle")}</h1>
                        </div>
                        <div className="AboutMe_Text_P_Content">
                            <p className="AboutMe_Text_P">{t("AboutMeText")}</p>
                        </div>
                    </div>
                    <div className="AboutMe_Image_Content">
                        <img src={Kcm} alt="" className="AboutMe_Image_Pair_Style" />
                    </div>
                </div>
                <div className="AboutMe_MySkills_Content">
                    <div className="MySkills_Image_Content">
                        <img src={Skills} alt="" className="MySkills_Image_Style" />
                    </div>
                    <div className="MySkills_Text_Content">
                        <div className="MySkills_Title_Content">
                            <div className="MySkills_Title_Line"></div>
                            <h3 className="MySkills_Text_Title">{t("MySkills")}</h3>
                        </div>
                        <div className="MySkills_Text_P_Content">
                            <p className="MySkills_Text_P">{t("MySkillsText")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default AboutMe;