"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";

export default function HeroBanner() {
  const titles = [
    "Full Stack Software Engineer !",
    "React Native Mobile Dev !",
    "SaaS & Backend Architect !",
    "NIT Rourkela CSE Graduate !"
  ];

  const navLinks = [
    { href: "/new-portfolio", label: "Home" },
    { href: "/new-portfolio/about", label: "About" },
    { href: "/new-portfolio/portfolio", label: "My Work" },
    { href: "/new-portfolio/strength", label: "Strength" },
    { href: "/new-portfolio/contact", label: "Contact" }
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState("engineer.ts");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("mdshakilkhan0152@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  const handleCopyCode = () => {
    let snippet = "";
    if (activeTab === "engineer.ts") {
      snippet = `const engineer: SoftwareEngineer = {
  name: "Md Shakil Khan",
  role: "Software Developer @ DIU",
  stack: ["Next.js", "React", "React Native", "PostgreSQL", "Fastify"],
  status: "Open for impactful roles 🚀"
};`;
    } else if (activeTab === "stack.json") {
      snippet = `{\n  "name": "Md Shakil Khan",\n  "role": "Software Developer @ DIU",\n  "coreStack": ["Next.js", "React", "React Native", "TypeScript", "PostgreSQL"],\n  "openForWork": true\n}`;
    } else {
      snippet = `shakil@macbook:~$ whoami\nMd Shakil Khan • Software Developer @ DIU & Techdojo (NIT Rourkela CSE)\nshakil@macbook:~$ npx shakil --stack\nNext.js • React • React Native • TypeScript • PostgreSQL • Fastify`;
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(snippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  useEffect(() => {
    const currentWord = titles[currentTextIndex];

    if (!isDeleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? 50 : 110
    );

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, currentTextIndex, titles]);

  const displayedText = titles[currentTextIndex].substring(0, subIndex);

  return (
    <div className="cv_banner_wrapper">
      <div className="cv_container container-fluid">
        <div className="row align-items-center justify-content-between g-4 g-xl-5">
          {/* Left Column: Persistent Navigation Menu (Visible on Large Screens 1200px+, Hidden on Medium/Mobile) */}
          <div className="col-xxl-2 col-xl-3 d-none d-xl-block">
            <div className="cv_home_side_nav_wrapper">
              <ul className="cv_home_side_menu">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`cv_home_side_link ${item.href === "/new-portfolio" ? "active" : ""}`}
                    >
                      <span className="cv_home_side_dash" />
                      <span className="cv_home_side_text">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Follow Me Social Section */}
              <div className="cv_home_side_social">
                <span className="cv_home_social_title">Follow Me</span>
                <ul className="cv_home_social_list">
                  <li>
                    <a
                      href={portfolioData.personal.socialLinks.facebook || "#"}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                    >
                      <img src="/new-portfolio/images/fb.svg" alt="Facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={portfolioData.personal.socialLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                    >
                      <img src="/new-portfolio/images/in.svg" alt="LinkedIn" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={portfolioData.personal.socialLinks.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <img src="/new-portfolio/images/github.svg" alt="GitHub" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={portfolioData.personal.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="WhatsApp"
                    >
                      <img src="/new-portfolio/images/whatsapp.svg" alt="WhatsApp" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Center Column: Developer Introduction & Value Proposition */}
          <div className="col-12 col-lg-6 col-xl-5 col-xxl-6">
            <div className="cv_banner_intro">
              <h2 className="cv_greeting_heading">
                Hello!{" "}
                <span className="cv_wave_hand">
                  <img
                    src="/new-portfolio/images/hand.svg"
                    alt="Waving hand"
                  />
                </span>{" "}
                I Am
              </h2>
              
              <h1 className="cv_hero_name">
                Shakil Khan
              </h1>

              <div className="cv_hero_animated_role">
                <span className="cv_role_typed">{displayedText}</span>
                <span className="cv_code_cursor">_</span>
              </div>

              <p className="cv_hero_bio">
                Software Developer at <strong>Daffodil International University (DIU)</strong> &bull; Formerly at <strong>Techdojo Limited</strong> &bull; CSE graduate from <strong>NIT Rourkela</strong>. Engineering high-performance web platforms with <strong>React &amp; Next.js</strong>, cross-platform mobile apps with <strong>React Native &amp; Expo</strong>, and scalable cloud architectures.
              </p>

              {/* Developer Action Deck */}
              <div className="cv_banner_actions">
                <Link href="/new-portfolio/contact" className="cv_btn cv_btn_glow">
                  Hire Me <span>↗</span>
                </Link>
                <a
                  href={portfolioData.personal.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cv_btn cv_btn_outline cv_btn_resume"
                >
                  Download CV <span>↓</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`cv_btn cv_btn_outline cv_btn_copy ${copiedEmail ? "copied" : ""}`}
                  title="Click to copy mdshakilkhan0152@gmail.com"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {copiedEmail ? (
                      <polyline points="20 6 9 17 4 12" />
                    ) : (
                      <>
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </>
                    )}
                  </svg>
                  <span>{copiedEmail ? "Copied! ✓" : "Copy Email"}</span>
                </button>
                <a
                  href={portfolioData.personal.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="cv_btn cv_btn_outline cv_btn_icon"
                  title="GitHub: mdshakilkhan841"
                  aria-label="GitHub Profile"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href={portfolioData.personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="cv_btn cv_btn_outline cv_btn_icon"
                  title="LinkedIn: in/md-shakil-khan"
                  aria-label="LinkedIn Profile"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>

              {/* Minimalist Verified Metrics Strip */}
              <div className="cv_hero_metrics">
                <div className="cv_metric_item">
                  <span className="cv_metric_num">3+</span>
                  <span className="cv_metric_txt">Years Exp.</span>
                </div>
                <div className="cv_metric_sep" />
                <div className="cv_metric_item">
                  <span className="cv_metric_num">21+</span>
                  <span className="cv_metric_txt">Shipped Apps</span>
                </div>
                <div className="cv_metric_sep" />
                <div className="cv_metric_item">
                  <span className="cv_metric_num">100k+</span>
                  <span className="cv_metric_txt">Active Users</span>
                </div>
                <div className="cv_metric_sep" />
                <div className="cv_metric_item">
                  <span className="cv_metric_num">NIT-Rourkela</span>
                  <span className="cv_metric_txt">B.Tech CSE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean & Balanced Interactive VS Code / Terminal Window */}
          <div className="col-12 col-lg-6 col-xl-4 col-xxl-4">
            <div className="cv_banner_box cv_dev_code_window">
              <div className="cv_dev_window_header">
                <div className="cv_dev_window_dots">
                  <span className="cv_dot red" title="Close" />
                  <span className="cv_dot yellow" title="Minimize" />
                  <span className="cv_dot green" title="Maximize" />
                </div>
                
                <div className="cv_dev_file_tabs">
                  <button
                    type="button"
                    className={`cv_dev_tab ${activeTab === "engineer.ts" ? "active" : ""}`}
                    onClick={() => setActiveTab("engineer.ts")}
                  >
                    <span className="cv_ts_icon">TS</span> engineer.ts
                  </button>
                  <button
                    type="button"
                    className={`cv_dev_tab ${activeTab === "stack.json" ? "active" : ""}`}
                    onClick={() => setActiveTab("stack.json")}
                  >
                    <span className="cv_json_icon">&#123;&#125;</span> stack.json
                  </button>
                  <button
                    type="button"
                    className={`cv_dev_tab ${activeTab === "terminal.zsh" ? "active" : ""}`}
                    onClick={() => setActiveTab("terminal.zsh")}
                  >
                    <span className="cv_sh_icon">$_</span> terminal.zsh
                  </button>
                </div>

                <div className="cv_dev_header_actions">
                  <button
                    type="button"
                    className={`cv_dev_copy_btn ${copiedCode ? "copied" : ""}`}
                    onClick={handleCopyCode}
                    title="Copy Code"
                  >
                    {copiedCode ? (
                      <>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2EE3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="cv_dev_window_body">
                {activeTab === "engineer.ts" && (
                  <div className="cv_ide_editor_container">
                    <div className="cv_ide_gutter">
                      <span>01</span>
                      <span>02</span>
                      <span>03</span>
                      <span>04</span>
                      <span>05</span>
                      <span>06</span>
                    </div>
                    <div className="cv_ide_code_content">
                      <div className="cv_code_row">
                        <span className="cv_k_kw">const</span> <span className="cv_k_var">engineer</span>: <span className="cv_k_type">SoftwareEngineer</span> = &#123;
                      </div>
                      <div className="cv_code_row cv_indent">
                        <span className="cv_k_prop">name</span>: <span className="cv_k_str">&quot;Md Shakil Khan&quot;</span>,
                      </div>
                      <div className="cv_code_row cv_indent">
                        <span className="cv_k_prop">role</span>: <span className="cv_k_str">&quot;Software Developer @ DIU&quot;</span>,
                      </div>
                      <div className="cv_code_row cv_indent">
                        <span className="cv_k_prop">stack</span>: <span className="cv_k_arr">[</span><span className="cv_k_str">&quot;Next.js&quot;</span>, <span className="cv_k_str">&quot;React&quot;</span>, <span className="cv_k_str">&quot;React Native&quot;</span>, <span className="cv_k_str">&quot;PostgreSQL&quot;</span><span className="cv_k_arr">]</span>,
                      </div>
                      <div className="cv_code_row cv_indent">
                        <span className="cv_k_prop">status</span>: <span className="cv_k_str">&quot;Open for impactful roles 🚀&quot;</span>
                      </div>
                      <div className="cv_code_row">
                        &#125;;
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "stack.json" && (
                  <div className="cv_ide_editor_container">
                    <div className="cv_ide_gutter">
                      <span>01</span>
                      <span>02</span>
                      <span>03</span>
                      <span>04</span>
                      <span>05</span>
                      <span>06</span>
                    </div>
                    <div className="cv_ide_code_content">
                      <div className="cv_code_row"><span className="cv_j_brace">&#123;</span></div>
                      <div className="cv_code_row cv_indent"><span className="cv_j_key">&quot;name&quot;</span>: <span className="cv_j_str">&quot;Md Shakil Khan&quot;</span>,</div>
                      <div className="cv_code_row cv_indent"><span className="cv_j_key">&quot;role&quot;</span>: <span className="cv_j_str">&quot;Software Developer @ DIU&quot;</span>,</div>
                      <div className="cv_code_row cv_indent"><span className="cv_j_key">&quot;coreStack&quot;</span>: <span className="cv_j_arr">[</span><span className="cv_j_str">&quot;Next.js&quot;</span>, <span className="cv_j_str">&quot;React&quot;</span>, <span className="cv_j_str">&quot;React Native&quot;</span>, <span className="cv_j_str">&quot;PostgreSQL&quot;</span><span className="cv_j_arr">]</span>,</div>
                      <div className="cv_code_row cv_indent"><span className="cv_j_key">&quot;openForOpportunities&quot;</span>: <span className="cv_k_bool">true</span></div>
                      <div className="cv_code_row"><span className="cv_j_brace">&#125;</span></div>
                    </div>
                  </div>
                )}

                {activeTab === "terminal.zsh" && (
                  <div className="cv_code_terminal_view">
                    <div className="cv_term_cmd_line">
                      <span className="cv_term_prompt">shakil@macbook:~$</span>
                      <span className="cv_term_cmd_txt"> whoami</span>
                    </div>
                    <div className="cv_term_out cyan">
                      Md Shakil Khan &bull; Software Developer @ DIU &bull; NIT Rourkela CSE
                    </div>
                    <div className="cv_term_cmd_line">
                      <span className="cv_term_prompt">shakil@macbook:~$</span>
                      <span className="cv_term_cmd_txt"> npx shakil --stack</span>
                    </div>
                    <div className="cv_term_out green">
                      Next.js &bull; React &bull; React Native &bull; TypeScript &bull; PostgreSQL &bull; Fastify
                    </div>
                    <div className="cv_term_cmd_line cv_term_active_line">
                      <span className="cv_term_prompt">shakil@macbook:~$</span>
                      <span className="cv_term_cursor_block" />
                    </div>
                  </div>
                )}
              </div>

              {/* Authentic VS Code Bottom Status Bar */}
              <div className="cv_ide_statusbar">
                <div className="cv_ide_status_left">
                  <span className="cv_ide_status_item"><span className="cv_branch_icon">⎇</span> main*</span>
                  <span className="cv_ide_status_item cv_ide_status_diag">
                    <span className="cv_diag_err">⊗ 0</span>
                    <span className="cv_diag_warn">⚠ 0</span>
                  </span>
                </div>
                <div className="cv_ide_status_right">
                  <span className="cv_ide_status_item">Ln 6, Col 2</span>
                  <span className="cv_ide_status_item">Spaces: 2</span>
                  <span className="cv_ide_status_item">UTF-8</span>
                  <span className="cv_ide_status_item">{activeTab === "terminal.zsh" ? "ZSH Shell" : activeTab === "stack.json" ? "JSON" : "TypeScript"}</span>
                  <span className="cv_ide_status_item cv_ide_status_prettier">Prettier ✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
