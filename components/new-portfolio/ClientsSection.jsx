"use client";

import React from "react";

export default function ClientsSection() {
  return (
    <section className="cv_client_wrapper">
      <div className="cv_container container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-4">
            <div className="cv_exp_info">
              <div className="cv_client_heading">
                <h2>Collaborations</h2>
                <p>
                  Organizations and clients I have worked with to build scalable platforms, mobile applications, and enterprise software.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="cv_client_info">
              <div className="cv_client_box">
                <div className="cv_client_img">
                  <img src="/new-portfolio/images/client-1.png" alt="Client 1" />
                </div>
                <div className="cv_client_img">
                  <img src="/new-portfolio/images/client-2.png" alt="Client 2" />
                </div>
                <div className="cv_client_img">
                  <img src="/new-portfolio/images/client-3.png" alt="Client 3" />
                </div>
              </div>
              <div className="cv_client_box">
                <div className="cv_client_img">
                  <img src="/new-portfolio/images/client-4.png" alt="Client 4" />
                </div>
                <div className="cv_client_img">
                  <img src="/new-portfolio/images/client-5.png" alt="Client 5" />
                </div>
                <div className="cv_client_img">
                  <img src="/new-portfolio/images/client-6.png" alt="Client 6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
