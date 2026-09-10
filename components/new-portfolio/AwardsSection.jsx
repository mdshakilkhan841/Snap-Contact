"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function AwardsSection() {
  const [counts, setCounts] = useState({ clients: 0, projects: 0, awards: 0 });
  const honors = portfolioData.honors || [];

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const steps = 30;
    const intervalTime = duration / steps;
    const timer = setInterval(() => {
      start++;
      const progress = start / steps;
      setCounts({
        clients: Math.min(Math.round(15 * progress), 15),
        projects: Math.min(Math.round(21 * progress), 21),
        awards: Math.min(Math.round(4 * progress), 4)
      });
      if (start >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="cv_award_wrapper">
      <div className="container">
        {/* Metric Counters */}
        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-6">
            <div className="cv_award_box">
              <div className="cv_award_icon">
                <img src="/new-portfolio/images/award-1.svg" alt="Happy Clients" />
              </div>
              <div className="cv_award_text">
                <h1>{counts.clients}+</h1>
                <h4>Happy Clients</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="cv_award_box">
              <div className="cv_award_icon">
                <img src="/new-portfolio/images/award-2.svg" alt="Projects Completed" />
              </div>
              <div className="cv_award_text">
                <h1>{counts.projects}+</h1>
                <h4>Shipped Projects</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="cv_award_box">
              <div className="cv_award_icon">
                <img src="/new-portfolio/images/award-3.svg" alt="Awards Won" />
              </div>
              <div className="cv_award_text">
                <h1>{counts.awards}+</h1>
                <h4>Prestigious Honors</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Prestigious Honors & Recognitions Cards */}
        {honors.length > 0 && (
          <div className="row mt-5">
            <div className="col-12 text-center mb-4">
              <h3 style={{ fontSize: "28px", fontWeight: "700", color: "#ffffff" }}>
                Key Honors &amp; Prestigious Awards
              </h3>
              <p style={{ color: "#94A3B8", fontSize: "14px", maxWidth: "600px", margin: "0 auto" }}>
                Recognized internationally for impactful engineering, academic excellence, and technical innovation.
              </p>
            </div>

            {honors.map((item) => (
              <div key={item.id} className="col-lg-6 col-md-12 mb-4">
                <div
                  className="cv_honor_card"
                  style={{
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "14px",
                    padding: "24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span
                        style={{
                          background: "rgba(46, 227, 184, 0.15)",
                          border: "1px solid rgba(46, 227, 184, 0.3)",
                          color: "#2EE3B8",
                          fontSize: "12px",
                          fontWeight: "600",
                          padding: "3px 10px",
                          borderRadius: "20px"
                        }}
                      >
                        {item.highlight}
                      </span>
                      <small style={{ color: "#64748B", fontSize: "12px" }}>{item.date}</small>
                    </div>
                    <h4 style={{ color: "#ffffff", fontSize: "17px", fontWeight: "700", marginTop: "10px", marginBottom: "8px" }}>
                      {item.title}
                    </h4>
                    <p style={{ color: "#94A3B8", fontSize: "13.5px", lineHeight: "1.55", marginBottom: "14px" }}>
                      {item.description}
                    </p>
                  </div>

                  {item.link && item.link !== "#" && (
                    <div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "#2EE3B8",
                          fontSize: "13px",
                          fontWeight: "600",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px"
                        }}
                      >
                        <span>Official Verification</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
