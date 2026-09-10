"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function ProjectsGallery() {
  const [activeTab, setActiveTab] = useState("all");
  const [isFading, setIsFading] = useState(false);

  // Tab configurations with dynamic counts
  const allProjects = portfolioData.projects;
  const mobileProjects = allProjects.filter((p) => p.tag === "mobile");
  const saasProjects = allProjects.filter((p) => p.tag === "saas" || p.tag === "fullstack");
  const ai3dProjects = allProjects.filter((p) => p.tag === "ai3d");
  const dashboardProjects = allProjects.filter((p) => p.tag === "dashboard" || p.tag === "web");

  const tabs = [
    { id: "all", label: "All Projects", count: allProjects.length },
    { id: "mobile", label: "Mobile Apps", count: mobileProjects.length },
    { id: "saas", label: "Full Stack & SaaS", count: saasProjects.length },
    { id: "ai3d", label: "3D & AI", count: ai3dProjects.length },
    { id: "dashboard", label: "Dashboards & Systems", count: dashboardProjects.length }
  ];

  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsFading(false);
    }, 150);
  };

  // Filtered project list based on selected category
  const displayedProjects =
    activeTab === "all"
      ? allProjects
      : activeTab === "mobile"
      ? mobileProjects
      : activeTab === "saas"
      ? saasProjects
      : activeTab === "ai3d"
      ? ai3dProjects
      : dashboardProjects;

  // Helper function for appropriate action button text
  const getLiveButtonLabel = (project) => {
    if (project.live.includes("play.google.com")) return "Play Store";
    if (project.live.includes("drive.google.com")) return "Download APK";
    if (project.title.includes("Bloomberg")) return "Bloomberg Award";
    if (project.category === "Mobile App") return "View Platform";
    return "Live Demo";
  };

  return (
    <div className="cv_portfolio_wrapper">
      <div className="cv_container container-fluid">
        <div className="row">
          {/* Header & Category Tabs */}
          <div className="col-12">
            <div className="cv_portfolio_header_intro text-center mb-4">
              <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", marginBottom: "12px" }}>
                Featured Engineering Work
              </h2>
              <p style={{ color: "#94A3B8", maxWidth: "680px", margin: "0 auto", fontSize: "15px", lineHeight: "1.6" }}>
                Explore 21 production applications, cross-platform mobile apps (React Native & Expo),
                clinical & agency SaaS architectures, and interactive 3D simulations.
              </p>
            </div>

            <ul className="cv_port_tab cv_port_tab_expanded">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    type="button"
                    className={`cv_port_tab_btn ${activeTab === tab.id ? "active" : ""}`}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    <span>{tab.label}</span>
                    <span className="cv_tab_counter">{tab.count}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Dynamic Animated Project Grid */}
            <div
              className="cv_portfolio_content_area"
              style={{
                opacity: isFading ? 0.3 : 1,
                transform: isFading ? "translateY(10px)" : "translateY(0)",
                transition: "opacity 0.25s ease, transform 0.25s ease"
              }}
            >
              <div className="cv_portfolio_grid">
                {displayedProjects.map((project) => (
                  <div key={project.id} className="cv_project_card">
                    {/* Visual Media Header */}
                    <div className="cv_card_media">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="cv_card_img"
                        loading="lazy"
                      />
                      <div className="cv_card_overlay" />
                      
                      {/* Category and Highlight Badges */}
                      <div className="cv_card_badges">
                        <span className="cv_badge_category">{project.category}</span>
                        {project.badge && (
                          <span className="cv_badge_highlight">{project.badge}</span>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="cv_card_body">
                      <h3 className="cv_card_title">{project.title}</h3>
                      <p className="cv_card_desc">{project.description}</p>

                      {/* Tech Stack Pills */}
                      <div className="cv_card_tech_pills">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="cv_tech_pill">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="cv_card_actions">
                        {project.live && project.live !== "#" && project.live !== "https://github.com/mdshakilkhan841" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="cv_btn_live"
                          >
                            <span>{getLiveButtonLabel(project)}</span>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="7" y1="17" x2="17" y2="7" />
                              <polyline points="7 7 17 7 17 17" />
                            </svg>
                          </a>
                        )}

                        {project.github && project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="cv_btn_code"
                            title="View source on GitHub"
                          >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                            <span>Code</span>
                          </a>
                        )}

                        {project.live === "https://github.com/mdshakilkhan841" && project.github === "https://github.com/mdshakilkhan841" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="cv_btn_live"
                          >
                            <span>GitHub Profile</span>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="7" y1="17" x2="17" y2="7" />
                              <polyline points="7 7 17 7 17 17" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom GitHub CTA */}
          <div className="col-12 mt-5">
            <div className="cv_bottom_btn text-center">
              <a
                href={portfolioData.personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="cv_btn"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>View All 25+ Repositories on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
