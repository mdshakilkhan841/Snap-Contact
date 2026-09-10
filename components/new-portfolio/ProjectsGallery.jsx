"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function ProjectsGallery() {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);

  const allProjects = portfolioData.projects;
  const websiteProjects = allProjects.filter((p) => p.tag === "saas" || p.tag === "fullstack" || p.tag === "web");
  const mobileProjects = allProjects.filter((p) => p.tag === "mobile");
  const dashboardProjects = allProjects.filter((p) => p.tag === "dashboard");
  const creativeProjects = allProjects.filter((p) => p.tag === "ai3d");

  const tabs = [
    { id: "all", label: "All", count: allProjects.length },
    { id: "website", label: "Website", count: websiteProjects.length },
    { id: "mobile", label: "Mobile App", count: mobileProjects.length },
    { id: "dashboard", label: "Dashboard", count: dashboardProjects.length },
    { id: "creative", label: "Creative", count: creativeProjects.length }
  ];

  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;
    setActiveTab(tabId);
    setVisibleCount(6);
  };

  const displayedProjects =
    activeTab === "all"
      ? allProjects
      : activeTab === "website"
      ? websiteProjects
      : activeTab === "mobile"
      ? mobileProjects
      : activeTab === "dashboard"
      ? dashboardProjects
      : creativeProjects;

  const visibleProjects = displayedProjects.slice(0, visibleCount);

  // Group visible projects into 6-item authentic mosaic chunks
  const chunks = [];
  for (let i = 0; i < visibleProjects.length; i += 6) {
    chunks.push(visibleProjects.slice(i, i + 6));
  }

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const renderCard = (project, sizeClass = "cv_card_sm") => {
    if (!project) return null;
    return (
      <div
        key={project.id}
        className={`cv_mosaic_card ${sizeClass}`}
        onClick={() => setSelectedProject(project)}
        title={`Click to view ${project.title} architecture & details`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="cv_mosaic_img"
          loading="lazy"
        />

        {/* Signature Template Cyan Slide-up Hover Overlay */}
        <span className="cv_gallery_hover">
          <p className="cv_gallery_cat">
            {project.category} {project.badge ? `• ${project.badge}` : ""}
          </p>
          <h4 className="cv_gallery_title">{project.title}</h4>

          <div className="cv_hover_tech_row">
            {project.technologies?.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="cv_hover_tech_tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="cv_hover_action_row">
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="cv_hover_link_btn"
                onClick={(e) => e.stopPropagation()}
                title="Open Live App / System"
              >
                <span>Live App</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            )}

            {project.github && project.github !== "#" && project.live !== project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="cv_hover_link_btn cv_hover_github_btn"
                onClick={(e) => e.stopPropagation()}
                title="View GitHub Repository"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Code</span>
              </a>
            )}

            <button
              type="button"
              className="cv_hover_link_btn cv_hover_info_btn"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProject(project);
              }}
              title="View Architecture Details"
            >
              <span>Overview</span>
            </button>
          </div>
        </span>
      </div>
    );
  };

  return (
    <div className="cv_portfolio_wrapper">
      <div className="cv_container container-fluid">
        <div className="row">
          <div className="col-12">
            {/* Filter Tabs matching authentic original template */}
            <ul className="cv_port_tab">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <a
                    href="javascript:void(0);"
                    className={activeTab === tab.id ? "active" : ""}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    <span>{tab.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Asymmetric Mosaic Gallery: Different Card Sizes, Same 16:10 Ratio */}
            <div className="cv_mosaic_gallery_container">
              {chunks.map((chunk, chunkIdx) => (
                <div key={chunkIdx} className="cv_gallery_wrapper">
                  {/* Left Column: 2 Small Top + 1 Large Bottom */}
                  <div className="cv_gallery_item item-1">
                    <div className="cv_gallery_small">
                      {chunk[0] && renderCard(chunk[0], "cv_card_sm")}
                      {chunk[1] && renderCard(chunk[1], "cv_card_sm")}
                    </div>
                    {chunk[2] && renderCard(chunk[2], "cv_card_lg")}
                  </div>

                  {/* Right Column: 1 Large Top + 2 Small Bottom */}
                  <div className="cv_gallery_item item-2">
                    {chunk[3] && renderCard(chunk[3], "cv_card_lg")}
                    <div className="cv_gallery_small">
                      {chunk[4] && renderCard(chunk[4], "cv_card_sm")}
                      {chunk[5] && renderCard(chunk[5], "cv_card_sm")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Centered View More / GitHub CTA */}
          <div className="col-12">
            <div className="cv_bottom_btn">
              {visibleCount < displayedProjects.length ? (
                <button
                  type="button"
                  className="cv_btn"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                >
                  <span>View More</span>
                </button>
              ) : (
                <a
                  href={portfolioData.personal.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="cv_btn"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>Explore All 25+ Repositories on GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sleek Project Details Modal */}
      {selectedProject && (
        <div className="cv_project_modal_backdrop" onClick={() => setSelectedProject(null)}>
          <div className="cv_project_modal_box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="cv_project_modal_close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="cv_modal_media">
              <img src={selectedProject.image} alt={selectedProject.title} />
              <div className="cv_modal_media_overlay" />
              <div className="cv_modal_badges_row">
                <span className="cv_modal_tag_badge">{selectedProject.category}</span>
                {selectedProject.badge && (
                  <span className="cv_modal_highlight_badge">{selectedProject.badge}</span>
                )}
              </div>
            </div>

            <div className="cv_modal_content">
              <h3 className="cv_modal_title">{selectedProject.title}</h3>
              <p className="cv_modal_desc">{selectedProject.description}</p>

              <div className="cv_modal_tech_section">
                <h5>Core Technologies & Architecture</h5>
                <div className="cv_modal_tech_pills">
                  {selectedProject.technologies?.map((tech, idx) => (
                    <span key={idx} className="cv_modal_tech_pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cv_modal_footer_actions">
                {selectedProject.live && selectedProject.live !== "#" && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="cv_modal_btn_primary"
                  >
                    <span>Launch Live Platform</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                )}
                {selectedProject.github && selectedProject.github !== "#" && selectedProject.live !== selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="cv_modal_btn_secondary"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>View GitHub Source</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
