"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function EducationSection() {
  const educationList = [
    {
      title: "B.Tech In Computer Science & Engineering",
      year: "2022",
      institution: "NIT Rourkela",
      detail: "First Class with Honors (CGPA 7.30/10). Strong foundation in algorithms, systems architecture, distributed computing, and software development."
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      year: "2015",
      institution: "BNMPC Dhaka",
      detail: "Perfect GPA 5.00/5.00 in Science discipline with focus on Higher Mathematics, Physics, and analytical problem-solving."
    },
    {
      title: "Secondary School Certificate (SSC)",
      year: "2013",
      institution: "Ibne Taimiya",
      detail: "Perfect GPA 5.00/5.00 with academic distinction across Science, Mathematics, and foundational Computer Studies."
    },
    {
      title: "Full-Stack Software Architecture",
      year: "2024",
      institution: "Professional Practice",
      detail: "Industry specialization in production Next.js, Node.js microservices, TypeScript, database optimization, and high-performance frontend engineering."
    }
  ];

  return (
    <section className="cv_education_wrapper">
      <div className="cv_container container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-4">
            <div className="cv_edu_heading">
              <h2>Education</h2>
              <p>
                A strong academic engineering background from National Institute of Technology (NIT) Rourkela, paired with consistent high-distinction milestones.
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
