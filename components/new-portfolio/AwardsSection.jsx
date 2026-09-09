"use client";

import React, { useState, useEffect } from "react";

export default function AwardsSection() {
  const [counts, setCounts] = useState({ clients: 0, projects: 0, awards: 0 });

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
        projects: Math.min(Math.round(25 * progress), 25),
        awards: Math.min(Math.round(5 * progress), 5)
      });
      if (start >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="cv_award_wrapper">
      <div className="container">
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
                <h4>Projects Done</h4>
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
                <h4>Honors & Awards</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
