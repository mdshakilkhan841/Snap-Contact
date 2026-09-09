"use client";

import React from "react";

export default function StrengthsSection() {
  const doItems = [
    {
      icon: "/new-portfolio/images/do-icon1.svg",
      title: "Full-Stack Web Engineering",
      desc: "Architecting high-concurrency, SEO-optimized web applications with Next.js, React, Node.js, and modern relational/NoSQL databases."
    },
    {
      icon: "/new-portfolio/images/do-icon2.svg",
      title: "Mobile App Development",
      desc: "Building performant, native-feel iOS and Android applications with React Native, Expo, and modular offline sync architectures."
    },
    {
      icon: "/new-portfolio/images/do-icon3.svg",
      title: "API & Backend Systems",
      desc: "Engineering scalable REST & GraphQL microservices, JWT authentication, caching layers, and high-security endpoints."
    },
    {
      icon: "/new-portfolio/images/do-icon4.svg",
      title: "UI/UX & Frontend Design",
      desc: "Translating complex design systems into pixel-perfect, accessible, and ultra-fast responsive web components."
    }
  ];

  return (
    <div className="cv_do_wrapper">
      <div className="cv_container container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-4">
            <div className="cv_do_heading">
              <h2>What I Do</h2>
              <p>
                From scalable full-stack applications to native mobile solutions, I engineer robust systems designed for performance, security, and exceptional user experience.
              </p>
            </div>
            <div className="cv_do_img">
              <img
                src="/new-portfolio/images/do_img.webp"
                alt="What I Do"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-xl-8">
            <div className="row">
              {doItems.map((item, index) => (
                <div key={index} className="col-sm-6">
                  <div className="cv_do_box">
                    <div className="cv_do_icon">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <div className="cv_do_text">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
