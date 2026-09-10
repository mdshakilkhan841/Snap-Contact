"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <div className="cv_about_wrapper">
      <div className="cv_container container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="cv_about_content">
              <div className="cv_about_img">
                <img
                  src="/new-portfolio/images/about-img.webp"
                  alt="About Shakil"
                  className="img-fluid"
                />
                <div className="cv_about_experience">
                  <div className="cv_about_exp">
                    <h2>{portfolioData.personal.experienceYears}</h2>
                    <span>
                      <p>YEARS</p>
                      <p>OF EXPERIENCE</p>
                    </span>
                  </div>
                  <div className="cv_about_rating">
                    <span>
                      <img
                        src="/new-portfolio/images/rating.svg"
                        alt="Rating"
                      />
                      <h6>{portfolioData.personal.rating}</h6>
                    </span>
                    <p>High-Quality Reviews</p>
                  </div>
                </div>
              </div>

              <div className="cv_about_info">
                <h2>About Me</h2>
                <div className="cv_about_box">
                  <h3>Who I’m</h3>
                  <p>{portfolioData.personal.detailedBio[0]}</p>
                  <p>{portfolioData.personal.detailedBio[1]}</p>
                </div>
                <div className="cv_about_btn">
                  <a
                    href={portfolioData.personal.resumeUrl}
                    download="Md_Shakil_Khan_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="cv_btn"
                  >
                    Download Resume
                  </a>
                  <Link href="/contact" className="cv_btn">
                    Hire Me
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
