"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function EducationSection() {
  const educationList = portfolioData.education.map((item) => ({
    title: `${item.degree} — ${item.field}`,
    year: item.period.split(" - ")[1] || item.period,
    institution: item.institution,
    detail: `${item.grade}. ${item.description}`
  }));

  return (
    <section className="cv_education_wrapper">
      <div className="cv_container container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-4">
            <div className="cv_edu_heading">
              <h2>Education</h2>
              <p>
                A rigorous academic engineering foundation in Computer Science from National Institute of Technology (NIT) Rourkela, paired with consistent top-tier distinctions.
              </p>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="cv_edu_info">
              {educationList.map((item, index) => (
                <div key={index} className={`cv_edu_box box-${index + 1}`}>
                  <div className="cv_edu_title">
                    <h4>{item.title}</h4>
                    <h1>{item.year}</h1>
                  </div>
                  <div className="cv_edu_detail">
                    <span>- {item.institution}</span>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
