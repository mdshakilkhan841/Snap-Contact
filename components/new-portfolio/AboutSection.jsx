"use client";

import React from "react";
import Link from "next/link";
import { FaGraduationCap, FaPaperPlane } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { portfolioData } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <div className="cv_about_wrapper" id="about">
      <div className="cv_container container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-11 col-xxl-10">
            {/* Header: — About Me */}
            <div className="cv_about_header_area">
              <span className="cv_about_header_line" />
              <h2 className="cv_about_header_title">About Me</h2>
            </div>

            {/* Main Glassmorphism Card */}
            <div className="cv_about_card_container">
              {/* Left Column: Photo with Badges */}
              <div className="cv_about_photo_col">
                <div className="cv_about_photo_wrapper">
                  {/* Top-Left Graduate Badge */}
                  <div className="cv_badge_graduate">
                    <div className="cv_badge_graduate_icon">
                      <FaGraduationCap />
                    </div>
                    <div className="cv_badge_graduate_text">
                      <h4 className="cv_badge_grad_title">GRADUATE</h4>
                      <p className="cv_badge_grad_sub">B.Tech (CSE)</p>
                      <p className="cv_badge_grad_inst">NIT Rourkela (2022)</p>
                    </div>
                  </div>

                  {/* Photo Frame Box */}
                  <div className="cv_about_photo_box">
                    <img
                      src="/new-portfolio/images/about-img.png"
                      alt="Md Shakil Khan - About"
                      className="cv_about_photo_img"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Bio Info & Action Buttons */}
              <div className="cv_about_info_col">
                <h3 className="cv_about_who_title">Who I’m</h3>
                <div className="cv_about_desc">
                  <p>{portfolioData.personal.detailedBio[0]}</p>
                  <p>{portfolioData.personal.detailedBio[1]}</p>
                </div>
                <div className="cv_about_action_btns">
                  <a
                    href={portfolioData.personal.resumeUrl}
                    download="Md_Shakil_Khan_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="cv_about_btn cv_about_btn_resume"
                  >
                    <FiDownload className="cv_btn_icon" />
                    <span>Download Resume</span>
                  </a>
                  <Link href="/contact" className="cv_about_btn cv_about_btn_hire">
                    <FaPaperPlane className="cv_btn_icon" />
                    <span>Hire Me</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

