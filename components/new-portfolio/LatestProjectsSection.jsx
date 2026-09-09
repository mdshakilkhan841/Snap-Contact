"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";

export default function LatestProjectsSection() {
  const projects = [
    {
      img: "/new-portfolio/images/proj-1.webp",
      cat: "Full-Stack Development",
      time: "Recent",
      title: "Exclusive-Shop: Scalable MERN & Next.js Store",
      link: "https://github.com/mdshakilkhan841/Exclusive-Shop"
    },
    {
      img: "/new-portfolio/images/proj-2.webp",
      cat: "Analytics System",
      time: "Recent",
      title: "Monthly Reporting & Operational Dashboard",
      link: "https://monthly-report-rho.vercel.app"
    },
    {
      img: "/new-portfolio/images/proj-3.webp",
      cat: "Mobile Engineering",
      time: "Recent",
      title: "DCL Oddo App: Cross-Platform React Native",
      link: "https://github.com/mdshakilkhan841/DCL-Oddo-Mobile-Application"
    }
  ];

  return (
    <section className="cv_project_wrapper">
      <div className="cv_container container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="cv_sec_heading">
              <h2>Latest Projects</h2>
              <p>
                A preview of recent production-ready applications, open-source repositories, and web services.
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="cv_project_content">
              {projects.map((proj, idx) => (
                <div key={idx} className="cv_project_box">
                  <div className="cv_project_img">
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="cv_project_text">
                    <div className="cv_project_heading">
                      <p>{proj.cat}</p>
                      <span>
                        <img
                          src="/new-portfolio/images/time.svg"
                          alt="Time"
                        />
                        {proj.time}
                      </span>
                    </div>
                    <div className="cv_project_title">
                      <a href={proj.link} target="_blank" rel="noreferrer">
                        <p>{proj.title}</p>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12">
            <div className="cv_bottom_btn">
              <Link href="/new-portfolio/portfolio" className="cv_btn">
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
