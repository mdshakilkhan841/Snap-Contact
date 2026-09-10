"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function ExperienceSection() {
  const experiences = portfolioData.experience;

  const coreTech = [
    { name: "React / Next.js", desc: "Enterprise Full-Stack Architecture" },
    { name: "React Native / Expo", desc: "High-Performance 60 FPS Mobile" },
    { name: "Fastify / Node.js", desc: "Scalable Distributed Backends" },
    { name: "PostgreSQL & Drizzle", desc: "Multi-Tenant Cloud Databases" },
    { name: "Three.js & WebGL", desc: "Interactive 3D Environments" },
    { name: "Docker & Cloud", desc: "Containerized Deployments" }
  ];

  return (
    <section className="cv_experience_wrapper">
      <div className="cv_container container-fluid">
        <div className="row align-items-center">
          {/* Left Column: Comprehensive Experience Timeline */}
          <div className="col-xl-8 col-lg-12 mb-4 mb-xl-0">
            <div className="cv_experience_list">
              {experiences.map((item, idx) => (
                <div key={item.id || idx} className="cv_exp_large_card">
                  {/* Number Badge */}
                  <div className="cv_exp_num_wrap">
                    <span className="cv_exp_num_digit">{String(idx + 1).padStart(2, "0")}</span>
                  </div>

                  {/* Main Role Content */}
                  <div className="cv_exp_main_body">
                    <div className="cv_exp_card_header">
                      <div>
                        <h3 className="cv_exp_role_title">{item.role}</h3>
                        <h4 className="cv_exp_company_title">{item.company}</h4>
                      </div>

                      <div className="cv_exp_date_badge_wrap">
                        <span className="cv_exp_period_badge">{item.period}</span>
                        {item.location && (
                          <span className="cv_exp_location_txt">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Highly Legible Impact Bullets */}
                    <ul className="cv_exp_bullet_list">
                      {item.points && item.points.map((point, pIdx) => (
                        <li key={pIdx} className="cv_exp_bullet_item">
                          <span className="cv_exp_bullet_icon" />
                          <span className="cv_exp_bullet_text">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Experience Summary & Tech Badges */}
          <div className="col-xl-4 col-lg-12">
            <div className="cv_exp_info_panel">
              <div className="cv_exp_heading">
                <h2>My Experience</h2>
                <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.7", marginTop: "20px" }}>
                  Over 3+ years engineering production web applications, cross-platform mobile apps, and distributed cloud backends. Proven track record serving <strong>100,000+ active learners</strong> and contributing to the winning <strong>$1M Bloomberg Global Mayors Challenge</strong>.
                </p>

                {/* Core Stack Highlights */}
                <div className="cv_core_tech_container mt-4">
                  <h5 style={{ color: "#ffffff", fontSize: "14px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "14px" }}>
                    Core Technical Competencies
                  </h5>
                  <div className="cv_core_tech_list">
                    {coreTech.map((tech, idx) => (
                      <div key={idx} className="cv_core_tech_row">
                        <span className="cv_tech_indicator" />
                        <div>
                          <strong className="cv_core_tech_name">{tech.name}</strong>
                          <span className="cv_core_tech_desc">{tech.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
