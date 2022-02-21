import React from "react";
import { useTranslate } from "react-translate";

/* ---------------------------- Import Components --------------------------- */
import SvgIcon from "../../assets/Images/SvgIcon"
/* ------------------------------ Import Style ------------------------------ */
import "./Contact.css";

function Contact({ params }) {
  const t = useTranslate("ContactMe");

  return (
    <React.Fragment>
      <div className="ContactMe_Container">
        <div className="ContactMe_Content">
          <div className="ContacMe_Text_Content">
            <div className="ContactMe_Text_Line"></div>
            <h3 className="ContactMe_Text_Title">{t("ContactMe")}</h3>
          </div>
          <div className="ContacMe_Title_Content">
            <h3 className="ContactMe_Title_H3">{t("ContactMeTitle")}</h3>
          </div>
          <div className="ContactMe_Text_P_Content">
            <p className="ContactMe_Text_P">{t("ContactMeText")}</p>
          </div>
          <div className="ContactMe_Image_Content">
            <div className="ContactMe_Image_Style">
              <SvgIcon name="Phone" fill="#FC5073" />
            </div>
            <p className="ContacMe_Image_Text">{t("Phone")}</p>
          </div>
          <div className="ContactMe_Image_Content">
            <div className="ContactMe_Image_Style">
              <SvgIcon name="Email" fill="#FC5073" />
            </div>
            <p className="ContacMe_Image_Text">{t("Email")}</p>
          </div>
          <div className="ContactMe_Image_Content">
            <div className="ContactMe_Image_Style">
              <SvgIcon name="Address" fill="#FC5073" />
            </div>
            <p className="ContacMe_Image_Text">{t("Address")}</p>
          </div>
        </div>
        <div className="Form_Container">
          <div className="Form_Backgroud"></div>
          <div className="From_Input_Content">
            <input type="text" className="Form_Iput_Style" placeholder={t("PlaceHolderName")}/>
            <input type="text" className="Form_Iput_Style" placeholder={t("PlaceHolderEmail")}/>
            <input type="text" className="Form_Iput_Style" placeholder={t("PlaceHolderSubject")}/>
            <textarea type="text" className="Form_Area_Style" placeholder={t("PlaceHolderMessage")}/>
            <button className="Form_Button_styles">{t("Send")}</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Contact;