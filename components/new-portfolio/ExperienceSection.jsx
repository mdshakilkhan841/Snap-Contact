"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function ExperienceSection() {
  const experiences = [
    {
      num: "01",
      role: "Software Engineer",
      company: "Techdojo Limited",
      period: "2023-Present"
    },
    {
      num: "02",
      role: "Frontend Developer Intern",
      company: "Koel Fresh Pvt Ltd",
      period: "2022-2023"
    },
    {
      num: "03",
      role: "Full-Stack Developer",
      company: "Independent Projects",
      period: "2021-2022"
    }
  ];

  return (
    <section className="cv_experience_wrapper">
      <div className="cv_container container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-8">
            {experiences.map((item) => (
              <div key={item.num} className="cv_exp_box">
                <h2>{item.num}</h2>
                <div className="cv_exp_com">
                  <span>
                    <h3>{item.role}</h3>
                    <h4>- {item.company}</h4>
                  </span>
                  <h5>({item.period})</h5>
                </div>
              </div>
            ))}
          </div>
          <div className="col-xl-4">
            <div className="cv_exp_info">
              <div className="cv_exp_heading">
                <h2>My Experience</h2>
                <p>
                  Over 3+ years delivering performant web and mobile applications using modern frameworks including Next.js, React, Node.js, React Native, and enterprise databases.
                </p>
                <ul>
                  <li>
                    <a href="javascript:void(0);">
                      <img src="/new-portfolio/images/fig.svg" alt="Figma" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img src="/new-portfolio/images/ps.svg" alt="Photoshop" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img src="/new-portfolio/images/ai.svg" alt="Illustrator" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img src="/new-portfolio/images/ae.svg" alt="After Effects" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
