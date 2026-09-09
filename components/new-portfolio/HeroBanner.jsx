"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";

const techStack = [
  {
    name: "Next.js 15",
    color: "#FFFFFF",
    glow: "rgba(255, 255, 255, 0.3)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M15.5 17.5L8.5 7h-1v10h1.5v-7.5l7 10.5h1.5z" />
        <rect x="15" y="7" width="1.5" height="5" />
      </svg>
    )
  },
  {
    name: "React 19",
    color: "#00D8FF",
    glow: "rgba(0, 216, 255, 0.4)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 115.3 100" fill="#00D8FF">
        <circle cx="57.65" cy="50" r="8.5" />
        <g stroke="#00D8FF" strokeWidth="5.5" fill="none">
          <ellipse cx="57.65" cy="50" rx="16" ry="46" transform="rotate(30 57.65 50)" />
          <ellipse cx="57.65" cy="50" rx="16" ry="46" transform="rotate(90 57.65 50)" />
          <ellipse cx="57.65" cy="50" rx="16" ry="46" transform="rotate(150 57.65 50)" />
        </g>
      </svg>
    )
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    glow: "rgba(49, 120, 198, 0.45)",
    icon: <span className="cv_tech_badge_ts">TS</span>
  },
  {
    name: "Node.js",
    color: "#22C55E",
    glow: "rgba(34, 197, 94, 0.4)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="#22C55E">
        <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.4L5 8.4v7.2l7 4 7-4V8.4l-7-4z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    name: "React Native",
    color: "#38BDF8",
    glow: "rgba(56, 189, 248, 0.4)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
        <circle cx="12" cy="18" r="1" fill="#38BDF8" />
        <line x1="9" y1="6" x2="15" y2="6" />
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    color: "#60A5FA",
    glow: "rgba(96, 165, 250, 0.4)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    )
  },
  {
    name: "Docker",
    color: "#38BDF8",
    glow: "rgba(56, 189, 248, 0.4)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M13 10.5V8.25H10.75V10.5H13zm2.5 0V8.25H13.25V10.5H15.5zm-5 0V8.25H8.25V10.5H10.5zm7.5 0V8.25H15.75V10.5H18zm-10 0V8.25H5.75V10.5H8zm2.5-2.75V5.5H8.25V7.75H10.5zm2.5 0V5.5H10.75V7.75H13zm2.5 0V5.5H13.25V7.75H15.5zm8.43 5.48c-.28-.2-.84-.28-1.37-.18-.18-.54-.6-1-1.18-1.27l-.46-.22-.3.41c-.49.68-.82 1.54-.93 2.45-.63-.26-1.55-.38-2.69-.38H1.38c-.3 0-.58.15-.75.4-.17.25-.2.57-.08.85 1.55 3.55 5.05 6.94 11.45 6.94 7.6 0 11.23-4.8 11.43-8.48.01-.15-.02-.3-.09-.43l-.31-.57z" />
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    color: "#38BDF8",
    glow: "rgba(56, 189, 248, 0.4)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    )
  }
];

export default function HeroBanner() {
  const titles = [
    "Full Stack Software Engineer !",
    "MERN & Next.js Specialist !",
    "React Native Mobile Dev !",
    "Scalable Backend Architect !"
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
      snippet = `// Full Stack Systems & Mobile Engineering • NIT Rourkela CSE
import { Next15, React19, TypeScript, PostgreSQL, Docker } from "@techdojo/core";

export const engineer: FullStackEngineer = {
  name: "Md Shakil Khan",
  role: "Software Engineer @ Techdojo Limited",
  education: "B.Tech in Computer Science & Engineering, NIT Rourkela",
  experience: "3+ Years in Production",
  specialties: ["Next.js 15", "React 19", "TypeScript", "Node.js", "React Native", "PostgreSQL"],
  architecture: ["High-Scale Web Apps", "Cross-Platform Mobile", "Cloud Microservices"],
  status: "Open for high-impact roles 🚀"
};`;
    } else if (activeTab === "stack.json") {
      snippet = `{\n  "engineer": "Md Shakil Khan",\n  "company": "Techdojo Limited",\n  "degree": "B.Tech CSE, NIT Rourkela",\n  "openForHire": true\n}`;
    } else {
      snippet = `shakil@macbook-pro:~/portfolio (main) $ npx shakil --contact\nEmail: mdshakilkhan0152@gmail.com\nPhone: +880 1521-438781\nStatus: Available for impactful roles`;
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
      <div className="cv_container cv_hero_container">
        <div className="row align-items-center g-4 g-xl-5">
          {/* Left Column: Developer Introduction & Value Proposition */}
          <div className="col-xl-5 col-lg-5">
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
                Software Engineer at <strong>Techdojo Limited</strong> &bull; CSE graduate from <strong>NIT Rourkela</strong>. Engineering high-performance web platforms with <strong>React 19 &amp; Next.js 15</strong>, cross-platform mobile apps with <strong>React Native</strong>, and scalable cloud architectures.
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
                  className="cv_btn cv_btn_outline"
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
                  <span className="cv_metric_num">25+</span>
                  <span className="cv_metric_txt">Shipped Apps</span>
                </div>
                <div className="cv_metric_sep" />
                <div className="cv_metric_item">
                  <span className="cv_metric_num">NIT-Rourkela</span>
                  <span className="cv_metric_txt">B.Tech CSE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Widened Interactive VS Code / Terminal Window */}
          <div className="col-xl-7 col-lg-7">
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

                  <span className="cv_dev_status_text">
                    <span className="cv_git_branch">git:(main)</span> <span className="cv_git_clean">✓</span>
                  </span>
                </div>
              </div>

              {/* VS Code Breadcrumb Bar */}
              <div className="cv_dev_breadcrumb">
                <span className="cv_bread_folder">shakil-portfolio</span>
                <span className="cv_bread_sep">/</span>
                <span className="cv_bread_folder">src</span>
                <span className="cv_bread_sep">/</span>
                <span className="cv_bread_folder">config</span>
                <span className="cv_bread_sep">/</span>
                <span className="cv_bread_file">{activeTab}</span>
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
                      <span>07</span>
                      <span>08</span>
                      <span>09</span>
                      <span>10</span>
                    </div>
                    <div className="cv_ide_code_content">
                      <div className="cv_code_row">
                        <span className="cv_k_cmt">&#47;&#47; Full Stack Systems &amp; Mobile Engineering &bull; NIT Rourkela CSE</span>
                      </div>
                      <div className="cv_code_row">
                        <span className="cv_k_kw">import</span> &#123; <span className="cv_k_var">Next15</span>, <span className="cv_k_var">React19</span>, <span className="cv_k_var">ReactNative</span>, <span className="cv_k_var">PostgreSQL</span>, <span className="cv_k_var">Docker</span> &#125; <span className="cv_k_kw">from</span> <span className="cv_k_str">&quot;@techdojo/core&quot;</span>;
                      </div>
                      <div className="cv_code_row">
                        <span className="cv_k_kw">export const</span> <span className="cv_k_var">engineer</span>: <span className="cv_k_type">FullStackEngineer</span> = &#123;
                      </div>
                      <div className="cv_code_row cv_indent">
                        <span className="cv_k_prop">name</span>: <span className="cv_k_str">&quot;Md Shakil Khan&quot;</span>,
                        <span className="cv_code_inline_cmt"> &#47;&#47; Software Engineer @ Techdojo Limited</span>
                      </div>
                      <div className="cv_code_row cv_indent">
                        <span className="cv_k_prop">education</span>: <span className="cv_k_str">&quot;B.Tech in CSE, NIT Rourkela&quot;</span>,
                      </div>
                      <div className="cv_code_row cv_indent">
                        <span className="cv_k_prop">experience</span>: <span className="cv_k_str">&quot;3+ Years in Production&quot;</span>,
                      </div>
                      <div className="cv_code_row cv_indent">
                        <span className="cv_k_prop">specialties</span>: <span className="cv_k_arr">[</span><span className="cv_k_str">&quot;Next.js 15&quot;</span>, <span className="cv_k_str">&quot;React 19&quot;</span>, <span className="cv_k_str">&quot;TypeScript&quot;</span>, <span className="cv_k_str">&quot;Node.js&quot;</span>, <span className="cv_k_str">&quot;React Native&quot;</span>, <span className="cv_k_str">&quot;PostgreSQL&quot;</span><span className="cv_k_arr">]</span>,
                      </div>
                      <div className="cv_code_row cv_indent">
                        <span className="cv_k_prop">architecture</span>: <span className="cv_k_arr">[</span><span className="cv_k_str">&quot;High-Scale Web Apps&quot;</span>, <span className="cv_k_str">&quot;Cross-Platform Mobile&quot;</span>, <span className="cv_k_str">&quot;Cloud Microservices&quot;</span><span className="cv_k_arr">]</span>,
                      </div>
                      <div className="cv_code_row cv_indent">
                        <span className="cv_k_prop">status</span>: <span className="cv_k_str">&quot;Open for high-impact roles 🚀&quot;</span>
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
                      <span>07</span>
                      <span>08</span>
                      <span>09</span>
                      <span>10</span>
                      <span>11</span>
                    </div>
                    <div className="cv_ide_code_content">
                      <div className="cv_code_row"><span className="cv_j_brace">&#123;</span></div>
                      <div className="cv_code_row cv_indent"><span className="cv_j_key">&quot;engineer&quot;</span>: <span className="cv_j_str">&quot;Md Shakil Khan&quot;</span>,</div>
                      <div className="cv_code_row cv_indent"><span className="cv_j_key">&quot;title&quot;</span>: <span className="cv_j_str">&quot;Full Stack Software Engineer&quot;</span>,</div>
                      <div className="cv_code_row cv_indent"><span className="cv_j_key">&quot;company&quot;</span>: <span className="cv_j_str">&quot;Techdojo Limited&quot;</span>,</div>
                      <div className="cv_code_row cv_indent"><span className="cv_j_key">&quot;education&quot;</span>: <span className="cv_j_str">&quot;B.Tech in CSE, NIT Rourkela&quot;</span>,</div>
                      <div className="cv_code_row cv_indent"><span className="cv_j_key">&quot;frontend&quot;</span>: <span className="cv_j_arr">[</span><span className="cv_j_str">&quot;Next.js 15&quot;</span>, <span className="cv_j_str">&quot;React 19&quot;</span>, <span className="cv_j_str">&quot;TypeScript&quot;</span>, <span className="cv_j_str">&quot;Tailwind CSS&quot;</span><span className="cv_j_arr">]</span>,</div>
                      <div className="cv_code_row cv_indent"><span className="cv_j_key">&quot;backend&quot;</span>: <span className="cv_j_arr">[</span><span className="cv_j_str">&quot;Node.js&quot;</span>, <span className="cv_j_str">&quot;Express&quot;</span>, <span className="cv_j_str">&quot;PostgreSQL&quot;</span>, <span className="cv_j_str">&quot;MongoDB&quot;</span><span className="cv_j_arr">]</span>,</div>
                      <div className="cv_code_row cv_indent"><span className="cv_j_key">&quot;mobile&quot;</span>: <span className="cv_j_arr">[</span><span className="cv_j_str">&quot;React Native (iOS / Android)&quot;</span><span className="cv_j_arr">]</span>,</div>
                      <div className="cv_code_row cv_indent"><span className="cv_j_key">&quot;devops&quot;</span>: <span className="cv_j_arr">[</span><span className="cv_j_str">&quot;Docker&quot;</span>, <span className="cv_j_str">&quot;AWS&quot;</span>, <span className="cv_j_str">&quot;GitHub Actions&quot;</span>, <span className="cv_j_str">&quot;Vercel&quot;</span><span className="cv_j_arr">]</span>,</div>
                      <div className="cv_code_row cv_indent"><span className="cv_j_key">&quot;openForOpportunities&quot;</span>: <span className="cv_k_bool">true</span></div>
                      <div className="cv_code_row"><span className="cv_j_brace">&#125;</span></div>
                    </div>
                  </div>
                )}

                {activeTab === "terminal.zsh" && (
                  <div className="cv_code_terminal_view">
                    <div className="cv_term_cmd_line">
                      <span className="cv_term_prompt">shakil@macbook-pro:~/portfolio (main) $</span>
                      <span className="cv_term_cmd_txt"> npx shakil --bio</span>
                    </div>
                    <div className="cv_term_card_out">
                      <div className="cv_term_card_title">
                        <span className="cv_term_hl_name">Md Shakil Khan</span> &bull; <span className="cv_term_title_sub">Software Engineer @ Techdojo Limited</span>
                      </div>
                      <div className="cv_term_card_item">
                        <span className="cv_term_cyan">Education:</span> B.Tech in Computer Science &amp; Engineering, NIT Rourkela
                      </div>
                      <div className="cv_term_card_item">
                        <span className="cv_term_green">Production Stack:</span> Next.js 15, React 19, TypeScript, Node.js, React Native, PostgreSQL
                      </div>
                      <div className="cv_term_card_item">
                        <span className="cv_term_yellow">Track Record:</span> 3+ Years Experience &bull; 25+ Shipped Production Applications
                      </div>
                    </div>

                    <div className="cv_term_cmd_line">
                      <span className="cv_term_prompt">shakil@macbook-pro:~/portfolio (main) $</span>
                      <span className="cv_term_cmd_txt"> git status -s</span>
                    </div>
                    <div className="cv_term_out cyan">
                      ## main...origin/main [clean] &bull; Working tree ready. Available for high-impact roles.
                    </div>

                    <div className="cv_term_cmd_line">
                      <span className="cv_term_prompt">shakil@macbook-pro:~/portfolio (main) $</span>
                      <span className="cv_term_cmd_txt"> cat ~/.contact-endpoints</span>
                    </div>
                    <div className="cv_term_out yellow">
                      Email: mdshakilkhan0152@gmail.com &bull; Phone: +880 1521-438781 &bull; LinkedIn: in/md-shakil-khan
                    </div>

                    <div className="cv_term_cmd_line cv_term_active_line">
                      <span className="cv_term_prompt">shakil@macbook-pro:~/portfolio (main) $</span>
                      <span className="cv_term_cursor_block" />
                    </div>
                  </div>
                )}

                {/* Core Tech Arsenal (Shared Across All Tabs) */}
                <div className="cv_arsenal_heading">
                  <span className="cv_arsenal_line" />
                  <span className="cv_arsenal_title">CORE TECH ARSENAL</span>
                  <span className="cv_arsenal_line" />
                </div>

                <div className="cv_card_stack">
                  {techStack.map((tech) => (
                    <button
                      key={tech.name}
                      type="button"
                      className="cv_tech_btn"
                      style={{
                        "--tech-hover-border": tech.color,
                        "--tech-hover-glow": tech.glow
                      }}
                      title={`Specialized in ${tech.name}`}
                    >
                      <span className="cv_tech_icon_wrap">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </button>
                  ))}
                </div>
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
                  <span className="cv_ide_status_item">Ln 10, Col 2</span>
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
