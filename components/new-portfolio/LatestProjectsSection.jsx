"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";

export default function LatestProjectsSection() {
  // Grab top featured production projects dynamically
  const featuredProjects = portfolioData.projects
    .filter((p) => p.featured)
    .slice(0, 3);

  return (
    <section className="cv_project_wrapper">
      <div className="cv_container container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="cv_sec_heading">
              <h2>Latest Production Projects</h2>
              <p>
                A curated selection of scalable clinical SaaS backends, high-concurrency mobile apps, and interactive 3D simulations.
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="cv_project_content">
              {featuredProjects.map((proj) => (
                <div key={proj.id} className="cv_project_box">
                  <div className="cv_project_img">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="cv_project_text">
                    <div className="cv_project_heading">
                      <p>{proj.badge || proj.category}</p>
                      <span>
                        <img
                          src="/new-portfolio/images/time.svg"
                          alt="Production"
                        />
                        Production
                      </span>
                    </div>
                    <div className="cv_project_title">
                      <a
                        href={proj.live && proj.live !== "#" ? proj.live : proj.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>{proj.title}</p>
                      </a>
                    </div>
                    <div className="cv_project_techs" style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {proj.technologies.slice(0, 3).map((t, i) => (
                        <span key={i} style={{ fontSize: "11px", color: "#94A3B8", background: "rgba(255,255,255,0.06)", padding: "2px 8px", borderRadius: "4px" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12">
            <div className="cv_bottom_btn">
              <Link href="/new-portfolio/portfolio" className="cv_btn">
                View All 21 Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
