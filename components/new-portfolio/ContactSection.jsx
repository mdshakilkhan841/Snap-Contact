"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setStatus("Opening email client...");
  };

  return (
    <>
      {/* Map Section Start */}
      <div className="cv_map_wrapper">
        <div className="cv_container container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-8">
              <div className="cv_map_content">
                <iframe
                  title="Location Map"
                  src="https://maps.google.com/maps?q=Dhaka,%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ width: "100%", height: "450px", border: 0 }}
                />
              </div>
            </div>
            <div className="col-xl-4">
              <div className="cv_map_info">
                <div className="cv_map_heading">
                  <h2>Get In Touch</h2>
                  <p>
                    Available for software engineering roles, full-stack consulting, and high-impact web & mobile projects. Reach out directly anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map Section End */}

      {/* Address Section Start */}
      <section className="cv_address_wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="cv_address_box">
                <div className="cv_address_icon">
                  <img src="/new-portfolio/images/add-1.svg" alt="Phone" />
                </div>
                <div className="cv_address_text">
                  <h5>Phone</h5>
                  <a href={`tel:${portfolioData.personal.phone.replace(/\s+/g, "")}`}>
                    {portfolioData.personal.phone}
                  </a>
                  <a href={portfolioData.personal.whatsapp} target="_blank" rel="noreferrer">
                    WhatsApp Available
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="cv_address_box">
                <div className="cv_address_icon">
                  <img src="/new-portfolio/images/add-2.svg" alt="Email" />
                </div>
                <div className="cv_address_text">
                  <h5>Email</h5>
                  <a href={`mailto:${portfolioData.personal.email}`}>
                    {portfolioData.personal.email}
                  </a>
                  <a href="mailto:mdshakilkhan841@gmail.com">
                    mdshakilkhan841@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="cv_address_box">
                <div className="cv_address_icon">
                  <img src="/new-portfolio/images/add-3.svg" alt="Address" />
                </div>
                <div className="cv_address_text">
                  <h5>Address</h5>
                  <a href="javascript:void(0);">
                    {portfolioData.personal.location}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Address Section End */}

      {/* Form Section Start */}
      <section className="cv_form_wrapper">
        <form className="cv_contact_form" onSubmit={handleSubmit}>
          <div className="cv_container container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-4">
                <div className="cv_client_heading">
                  <h2>Contact Us</h2>
                  <p>
                    Whether you have an upcoming project, a job opportunity, or simply want to connect, feel free to send a message.
                  </p>
                  {status && (
                    <p style={{ color: "#ff6b00", fontWeight: 600, marginTop: "10px" }}>
                      {status}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-xl-8">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      autoComplete="off"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      autoComplete="off"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      autoComplete="off"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="cv_contact_btn">
                  <button
                    type="submit"
                    className="cv_btn"
                    style={{ border: "none", cursor: "pointer" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      {/* Form Section End */}
    </>
  );
}
