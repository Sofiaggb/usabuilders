import { Component } from "react";
import about from "../assets/images/about.jpg"

// traduccion
import { withTranslation } from "react-i18next";

class About extends Component {

    render() {

        const { t } = this.props
        return (
            <div className="about">
                <div className="mision">
                    <div className="mision-center">
                        <div className="con">
                            <div className="t-m">
                                <p >{t("about.miniTitle")}</p>
                            </div>

                            <div className="line-about"></div>
                        </div>
                        <h2 className="title-mision">{t("about.title")}</h2>
                        <div className="tex-mision">
                            <p>{t("about.content")}</p>
                        </div>
                    </div>
                </div>

                <div className="image-mision">
                    <img src={about} alt="about us" />
                </div>
            </div>
        );
    }
}

export default withTranslation('global')(About);