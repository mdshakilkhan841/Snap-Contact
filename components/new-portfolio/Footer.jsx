"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="cv_footer_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cv_footer_text">
              <p>
                Copyright © <span id="copyYear">{currentYear}</span> Shakil Khan.
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
