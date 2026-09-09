import "./new-portfolio.css";
import TopIcon from "@/components/new-portfolio/TopIcon";
import Header from "@/components/new-portfolio/Header";
import PageTransition from "@/components/new-portfolio/PageTransition";

export const metadata = {
  title: "Md Shakil Khan | Full Stack Software Engineer",
  description:
    "Portfolio of Md Shakil Khan, B.Tech CSE NIT Rourkela graduate and Software Engineer at Techdojo Limited specializing in Next.js, React, Node.js, React Native, and full-stack software architecture.",
  keywords: [
    "Md Shakil Khan",
    "Shakil Khan",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack",
    "React Native",
    "NIT Rourkela",
    "Dhaka Bangladesh"
  ],
  authors: [{ name: "Md Shakil Khan" }],
  viewport: "width=device-width, initial-scale=1"
};

export default function NewPortfolioLayout({ children }) {
  return (
    <div className="cv_main_wrapper">
      <TopIcon />
      <Header />
      <PageTransition>{children}</PageTransition>
    </div>
  );
}
