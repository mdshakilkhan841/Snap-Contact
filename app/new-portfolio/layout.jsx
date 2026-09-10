import "./new-portfolio.css";
import TopIcon from "@/components/new-portfolio/TopIcon";
import Header from "@/components/new-portfolio/Header";
import PageTransition from "@/components/new-portfolio/PageTransition";

export const metadata = {
  title: "Md Shakil Khan | Full Stack Software Engineer",
  description:
    "Portfolio of Md Shakil Khan, CSE Graduate from NIT Rourkela and Software Developer at Daffodil International University (DIU), $1M Bloomberg Mayors Challenge Winner specializing in React, Next.js, React Native, Fastify, and PostgreSQL.",
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
