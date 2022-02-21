import React from  'react';
/* ------------------------------ Import Style ------------------------------ */
import './Widget.css';
function Widget({Title, Image, Text, Color1 ="rgba(63, 26, 137, 1)", Color2="rgba(0, 180, 204, 1)"}) {
    return (
        <React.Fragment>
            <div className="Widget_Content" style={{background: `linear-gradient(to bottom right, ${Color1}, ${Color2})`}}>
                <div className="Widget_Title_Content">
                    <div className="Widget_Image_Content">
                        {Image}
                    </div>
                    <div className="Widget_Title_Content_Text">
                        <h3 className="Widget_Title_Content_Text_H3">{Title}</h3>
                    </div>
                </div>
                <div className="Widget_Text_Content">
                    <p className="Widget_Text_P">{Text}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Widget;