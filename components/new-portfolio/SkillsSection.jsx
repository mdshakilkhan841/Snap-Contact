"use client";

import React from "react";

export default function SkillsSection() {
  const skills = [
    { name: "React & Next.js", percent: 95, icon: "/new-portfolio/images/skill-1.svg" },
    { name: "Node.js & Express", percent: 90, icon: "/new-portfolio/images/skill-2.svg" },
    { name: "JavaScript & TypeScript", percent: 92, icon: "/new-portfolio/images/skill-3.svg" },
    { name: "React Native Mobile", percent: 88, icon: "/new-portfolio/images/skill-4.svg" },
    { name: "MongoDB & SQL", percent: 85, icon: "/new-portfolio/images/skill-5.svg" },
    { name: "Tailwind CSS & UI/UX", percent: 92, icon: "/new-portfolio/images/skill-6.svg" }
  ];

  return (
    <section className="cv_skill_wrapper">
      <div className="cv_container container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-8">
            <div className="row">
              {skills.map((skill, index) => (
                <div key={index} className="col-md-6">
                  <div className="cv_skill_box">
                    <div className="cv_skill_icon">
                      <img src={skill.icon} alt={skill.name} />
                    </div>
                    <div className="cv_skill_progress">
                      <div className="cv_skill_text">
                        <h4>{skill.name}</h4>
                        <p>{skill.percent}%</p>
                      </div>
                      <div className="cv_skill_bar">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${skill.percent}%` }}
                            aria-valuenow={skill.percent}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-4">
            <div className="cv_exp_info">
              <div className="cv_exp_heading">
                <h2>My Skills</h2>
                <p>
                  Demonstrated command over modern frontend and backend technology stacks, delivering production-grade reliability, performance, and code maintainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
