"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function ProjectsGallery() {
  const [activeTab, setActiveTab] = useState("tab-1");
  const [isFading, setIsFading] = useState(false);

  const tabs = [
    { id: "tab-1", label: "All" },
    { id: "tab-2", label: "Website" },
    { id: "tab-3", label: "Mobile App" },
    { id: "tab-4", label: "Dashboard" },
    { id: "tab-5", label: "Full Stack" }
  ];

  // Map 6 gallery positions to projects
  const allProjects = [
    {
      img: "/new-portfolio/images/port-1.webp",
      type: "Full Stack Store",
      title: "Exclusive-Shop E-Commerce",
      category: "tab-5",
      link: "https://github.com/mdshakilkhan841/Exclusive-Shop"
    },
    {
      img: "/new-portfolio/images/port-2.webp",
      type: "Analytics & Reports",
      title: "Monthly Reporting System",
      category: "tab-4",
      link: "https://monthly-report-rho.vercel.app"
    },
    {
      img: "/new-portfolio/images/port-5.webp",
      type: "Web Application",
      title: "Snap-Contact Management",
      category: "tab-2",
      link: "https://github.com/mdshakilkhan841/Snap-Contact"
    },
    {
      img: "/new-portfolio/images/port-3.webp",
      type: "ERP System",
      title: "School Management Platform",
      category: "tab-4",
      link: "https://github.com/mdshakilkhan841/school-management"
    },
    {
      img: "/new-portfolio/images/port-4.webp",
      type: "Mobile App",
      title: "DCL Oddo Mobile App",
      category: "tab-3",
      link: "https://github.com/mdshakilkhan841/DCL-Oddo-Mobile-Application"
    },
    {
      img: "/new-portfolio/images/port-6.webp",
      type: "Marketplace",
      title: "Shondhibazar Commerce",
      category: "tab-2",
      link: "https://github.com/mdshakilkhan841/shondhibazar"
    }
  ];

  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsFading(false);
    }, 150);
  };

  return (
    <div className="cv_portfolio_wrapper">
      <div className="cv_container container-fluid">
        <div className="row">
          <div className="col-12">
            <ul className="cv_port_tab">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <a
                    className={activeTab === tab.id ? "active" : ""}
                    href="javascript:void(0)"
                    onClick={() => handleTabChange(tab.id)}
                    style={{ transition: "all 0.25s ease" }}
                  >
                    {tab.label}
                  </a>
                </li>
              ))}
            </ul>

            <div
              className="cv_tab_pane"
              style={{
                display: "block",
                opacity: isFading ? 0.3 : 1,
                transform: isFading ? "translateY(8px) scale(0.99)" : "translateY(0) scale(1)",
                transition: "opacity 0.25s ease, transform 0.25s ease"
              }}
            >
              <div className="cv_gallery_wrapper">
                {/* Column 1 */}
                <div className="cv_gallery_item item-1">
                  <div className="cv_gallery_small">
                    <div className="cv_gallery_img img-1">
                      <img
                        src={allProjects[0].img}
                        alt={allProjects[0].title}
                        className="img-fluid"
                      />
                      <a
                        href={allProjects[0].link}
                        target="_blank"
                        rel="noreferrer"
                        className="cv_gallery_hover"
                      >
                        <p>{allProjects[0].type}</p>
                        <h4>{allProjects[0].title}</h4>
                      </a>
                    </div>
                    <div className="cv_gallery_img img-2">
                      <img
                        src={allProjects[1].img}
                        alt={allProjects[1].title}
                        className="img-fluid"
                      />
                      <a
                        href={allProjects[1].link}
                        target="_blank"
                        rel="noreferrer"
                        className="cv_gallery_hover"
                      >
                        <p>{allProjects[1].type}</p>
                        <h4>{allProjects[1].title}</h4>
                      </a>
                    </div>
                  </div>
                  <div className="cv_gallery_img img-3">
                    <img
                      src={allProjects[2].img}
                      alt={allProjects[2].title}
                      className="img-fluid"
                    />
                    <a
                      href={allProjects[2].link}
                      target="_blank"
                      rel="noreferrer"
                      className="cv_gallery_hover"
                    >
                      <p>{allProjects[2].type}</p>
                      <h4>{allProjects[2].title}</h4>
                    </a>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="cv_gallery_item item-2">
                  <div className="cv_gallery_img img-4">
                    <img
                      src={allProjects[3].img}
                      alt={allProjects[3].title}
                      className="img-fluid"
                    />
                    <a
                      href={allProjects[3].link}
                      target="_blank"
                      rel="noreferrer"
                      className="cv_gallery_hover"
                    >
                      <p>{allProjects[3].type}</p>
                      <h4>{allProjects[3].title}</h4>
                    </a>
                  </div>
                  <div className="cv_gallery_small">
                    <div className="cv_gallery_img img-5">
                      <img
                        src={allProjects[4].img}
                        alt={allProjects[4].title}
                        className="img-fluid"
                      />
                      <a
                        href={allProjects[4].link}
                        target="_blank"
                        rel="noreferrer"
                        className="cv_gallery_hover"
                      >
                        <p>{allProjects[4].type}</p>
                        <h4>{allProjects[4].title}</h4>
                      </a>
                    </div>
                    <div className="cv_gallery_img img-6">
                      <img
                        src={allProjects[5].img}
                        alt={allProjects[5].title}
                        className="img-fluid"
                      />
                      <a
                        href={allProjects[5].link}
                        target="_blank"
                        rel="noreferrer"
                        className="cv_gallery_hover"
                      >
                        <p>{allProjects[5].type}</p>
                        <h4>{allProjects[5].title}</h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="cv_bottom_btn">
              <a
                href={portfolioData.personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="cv_btn"
              >
                View More on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
