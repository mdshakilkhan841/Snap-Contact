"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function ExperienceSection() {
  const experiences = portfolioData.experience;

  const coreTech = [
    { name: "React", desc: "React 19 & Next.js" },
    { name: "React Native", desc: "Expo & Native iOS/Android" },
    { name: "Fastify / Node", desc: "Scalable Microservices" },
    { name: "PostgreSQL", desc: "Multi-Tenant & Drizzle ORM" },
    { name: "Three.js", desc: "3D Graphics & WebGL" },
    { name: "Docker", desc: "Containerized Cloud" }
  ];

  return (
    <section className="cv_experience_wrapper">
      <div className="cv_container container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-8">
            {experiences.map((item, idx) => (
              <div key={item.id || idx} className="cv_exp_box">
                <h2>{String(idx + 1).padStart(2, "0")}</h2>
                <div className="cv_exp_com">
                  <span>
                    <h3>{item.role}</h3>
                    <h4>- {item.company}</h4>
                  </span>
                  <h5>({item.period})</h5>
                  <p style={{ color: "#94A3B8", fontSize: "14px", marginTop: "8px", lineHeight: "1.5" }}>
                    {item.points && item.points[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-xl-4">
            <div className="cv_exp_info">
              <div className="cv_exp_heading">
                <h2>My Experience</h2>
                <p>
                  Over 3+ years architecting scalable full-stack web platforms and high-performance mobile apps. Proven track record serving 100,000+ active users with 60 FPS mobile performance and distributed cloud backends.
                </p>

                {/* Modern Developer Core Competencies */}
                <div className="cv_dev_tech_badges_wrap mt-3">
                  <div className="cv_dev_tech_grid">
                    {coreTech.map((tech, idx) => (
                      <div key={idx} className="cv_dev_tech_item">
                        <span className="cv_dev_tech_dot" />
                        <div>
                          <strong>{tech.name}</strong>
                          <small>{tech.desc}</small>
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
