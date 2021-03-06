import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Pendidikan
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Pendidikan Terakhir Saya
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                Saya Telah Aktif Dalam Pembuatan Website Saat masih kuliah.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
