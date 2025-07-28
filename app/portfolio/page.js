"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
    FiGlobe,
    FiDownload,
    FiShare2,
    FiStar,
    FiClock,
    FiTrendingUp,
    FiAward,
    FiUsers,
    FiEye,
    FiBookOpen,
    FiUser,
    FiGithub,
    FiExternalLink,
    FiCalendar,
    FiMapPin as FiLocation,
    FiMail as FiEmailIcon,
    FiPhone as FiPhoneIcon,
    FiHome,
    FiBriefcase,
    FiBook,
    FiFolder,
} from "react-icons/fi";
import {
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaFacebookF,
    FaReact,
    FaNodeJs,
    FaPython,
    FaDocker,
} from "react-icons/fa6";

const quotes = [
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs",
    },
    {
        quote: "The only source of knowledge is experience.",
        author: "Albert Einstein",
    },
    {
        quote: "Code is poetry written in logic.",
        author: "Anonymous",
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker",
    },
    {
        quote: "Technology is best when it brings people together.",
        author: "Matt Mullenweg",
    },
];

const portfolioData = {
    personal: {
        name: "SHAKIL KHAN",
        title: "Full Stack Software Engineer",
        organization: "Daffodil International University, Dhaka",
        email: "mdshakilkhan0152@email.com",
        phone: "+880 1521-438781",
        website: "https://mdshakilkhan.netlify.app",
        location: "Dhaka-1207, Bangladesh",
        bio: "Passionate full-stack developer with 3+ years of experience creating innovative web applications. Specialized in React ecosystem, Node.js, and modern JavaScript frameworks. Always eager to learn new technologies and solve complex problems.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/md-shakil-khan",
            github: "https://github.com/mdshakilkhan841",
            facebook: "https://www.facebook.com/shakil.khan.0152",
            instagram: "https://instagram.com/shakil2421",
        },
    },

    projects: [
        {
            id: 1,
            title: "E-Commerce Platform Revolution",
            category: "FULL STACK",
            description:
                "A comprehensive e-commerce solution built with React, Node.js, and MongoDB. Features include real-time inventory management, payment integration, and advanced analytics dashboard.",
            technologies: [
                "React",
                "Node.js",
                "MongoDB",
                "Stripe",
                "Socket.io",
            ],
            github: "https://github.com/mdshakilkhan841/ecommerce-platform",
            live: "https://ecommerce-demo.netlify.app",
            image: "/placeholder.svg?height=200&width=300&text=E-Commerce+Platform",
            featured: true,
            status: "Completed",
            duration: "3 months",
            team: "Solo Project",
            impact: "Increased client sales by 40%",
        },
        {
            id: 2,
            title: "Real-Time Chat Application",
            category: "FRONTEND",
            description:
                "Modern chat application with real-time messaging, file sharing, and video calls. Built using React, Socket.io, and WebRTC technologies.",
            technologies: [
                "React",
                "Socket.io",
                "WebRTC",
                "Node.js",
                "Express",
            ],
            github: "https://github.com/mdshakilkhan841/chat-app",
            live: "https://chat-app-demo.netlify.app",
            image: "/placeholder.svg?height=200&width=300&text=Chat+Application",
            featured: true,
            status: "Completed",
            duration: "2 months",
            team: "2 Developers",
            impact: "1000+ active users",
        },
        {
            id: 3,
            title: "Task Management Dashboard",
            category: "REACT",
            description:
                "Comprehensive project management tool with drag-and-drop functionality, team collaboration features, and advanced reporting.",
            technologies: ["React", "Redux", "Material-UI", "Chart.js"],
            github: "https://github.com/mdshakilkhan841/task-manager",
            live: "https://task-manager-demo.netlify.app",
            image: "/placeholder.svg?height=200&width=300&text=Task+Manager",
            featured: false,
            status: "In Progress",
            duration: "1 month",
            team: "Solo Project",
            impact: "Improved team productivity by 25%",
        },
        {
            id: 4,
            title: "Weather Forecast App",
            category: "MOBILE",
            description:
                "Cross-platform mobile application built with React Native. Features location-based weather, 7-day forecasts, and weather alerts.",
            technologies: ["React Native", "Redux", "OpenWeather API", "Expo"],
            github: "https://github.com/mdshakilkhan841/weather-app",
            live: "https://expo.dev/@shakil/weather-app",
            image: "/placeholder.svg?height=200&width=300&text=Weather+App",
            featured: false,
            status: "Completed",
            duration: "1.5 months",
            team: "Solo Project",
            impact: "5000+ downloads",
        },
        {
            id: 5,
            title: "Portfolio Website Generator",
            category: "TOOL",
            description:
                "Automated portfolio generator that creates responsive websites from JSON data. Features multiple themes and deployment options.",
            technologies: ["Next.js", "Tailwind CSS", "Vercel", "GitHub API"],
            github: "https://github.com/mdshakilkhan841/portfolio-generator",
            live: "https://portfolio-gen.vercel.app",
            image: "/placeholder.svg?height=200&width=300&text=Portfolio+Generator",
            featured: false,
            status: "Completed",
            duration: "2 months",
            team: "Solo Project",
            impact: "Used by 200+ developers",
        },
        {
            id: 6,
            title: "Blockchain Voting System",
            category: "BLOCKCHAIN",
            description:
                "Secure voting platform using blockchain technology. Ensures transparency, immutability, and voter privacy.",
            technologies: [
                "Solidity",
                "Web3.js",
                "React",
                "Ethereum",
                "MetaMask",
            ],
            github: "https://github.com/mdshakilkhan841/blockchain-voting",
            live: "https://blockchain-vote.netlify.app",
            image: "/placeholder.svg?height=200&width=300&text=Blockchain+Voting",
            featured: true,
            status: "Completed",
            duration: "4 months",
            team: "3 Developers",
            impact: "Academic research published",
        },
    ],

    education: [
        {
            degree: "Bachelor of Science in Computer Science & Engineering",
            institution: "Daffodil International University",
            location: "Dhaka, Bangladesh",
            duration: "2020 - 2024",
            gpa: "3.75/4.00",
            status: "Graduated",
            achievements: [
                "Dean's List for 6 consecutive semesters",
                "Best Final Year Project Award",
                "Programming Contest Winner (3 times)",
                "Computer Club President (2022-2023)",
            ],
            coursework: [
                "Data Structures & Algorithms",
                "Database Management Systems",
                "Software Engineering",
                "Computer Networks",
                "Artificial Intelligence",
                "Web Technologies",
            ],
        },
        {
            degree: "Higher Secondary Certificate (Science)",
            institution: "Dhaka College",
            location: "Dhaka, Bangladesh",
            duration: "2018 - 2020",
            gpa: "5.00/5.00",
            status: "Completed",
            achievements: [
                "Golden GPA (5.00)",
                "Science Olympiad Regional Winner",
                "Mathematics Club Secretary",
            ],
            coursework: [
                "Higher Mathematics",
                "Physics",
                "Chemistry",
                "Information & Communication Technology",
            ],
        },
    ],

    experience: [
        {
            position: "Junior Software Engineer",
            company: "TechCorp Solutions",
            location: "Dhaka, Bangladesh",
            duration: "Jan 2024 - Present",
            type: "Full-time",
            description:
                "Developing and maintaining web applications using React, Node.js, and MongoDB. Collaborating with cross-functional teams to deliver high-quality software solutions.",
            responsibilities: [
                "Built responsive web applications serving 10,000+ users",
                "Optimized database queries reducing load time by 40%",
                "Implemented CI/CD pipelines using GitHub Actions",
                "Mentored 2 junior developers and conducted code reviews",
            ],
            technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
        },
        {
            position: "Frontend Developer Intern",
            company: "Digital Agency Pro",
            location: "Dhaka, Bangladesh",
            duration: "Jun 2023 - Dec 2023",
            type: "Internship",
            description:
                "Worked on client projects focusing on frontend development and user experience optimization.",
            responsibilities: [
                "Developed 5+ client websites using React and Next.js",
                "Improved website performance by 50% through optimization",
                "Collaborated with designers to implement pixel-perfect UIs",
                "Participated in client meetings and requirement gathering",
            ],
            technologies: ["React", "Next.js", "Tailwind CSS", "Figma"],
        },
        {
            position: "Freelance Web Developer",
            company: "Self-Employed",
            location: "Remote",
            duration: "Jan 2022 - Present",
            type: "Freelance",
            description:
                "Providing web development services to small businesses and startups. Specialized in creating modern, responsive websites and web applications.",
            responsibilities: [
                "Completed 20+ projects for various clients",
                "Maintained 98% client satisfaction rate",
                "Developed e-commerce solutions generating $100K+ revenue",
                "Provided ongoing maintenance and support services",
            ],
            technologies: ["React", "WordPress", "Shopify", "PHP", "MySQL"],
        },
    ],

    skills: {
        frontend: [
            "React",
            "Next.js",
            "Vue.js",
            "JavaScript",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Bootstrap",
            "Sass",
        ],
        backend: [
            "Node.js",
            "Express.js",
            "Python",
            "Django",
            "PHP",
            "Laravel",
        ],
        database: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase"],
        mobile: ["React Native", "Flutter", "Expo"],
        tools: [
            "Git",
            "Docker",
            "AWS",
            "Vercel",
            "Netlify",
            "Figma",
            "Postman",
        ],
        other: ["GraphQL", "Socket.io", "Jest", "Cypress", "Webpack", "Babel"],
    },

    achievements: [
        {
            title: "Best Final Year Project",
            organization: "Daffodil International University",
            year: "2024",
            description:
                "Awarded for developing an innovative blockchain-based voting system",
        },
        {
            title: "Programming Contest Winner",
            organization: "Inter-University Programming Contest",
            year: "2023",
            description: "1st place in regional programming competition",
        },
        {
            title: "Open Source Contributor",
            organization: "GitHub",
            year: "2022-Present",
            description:
                "Active contributor to various open source projects with 500+ contributions",
        },
        {
            title: "Certified React Developer",
            organization: "Meta",
            year: "2023",
            description: "Professional certification in React development",
        },
    ],
};

export default function PortfolioNewspaper() {
    const [currentPage, setCurrentPage] = useState("home");
    const [currentDate, setCurrentDate] = useState("");
    const [footerQuoteIndex, setFooterQuoteIndex] = useState(0);
    const [weatherInfo, setWeatherInfo] = useState("Sunny, 28°C");

    const pages = [
        { id: "home", title: "Home", icon: FiHome },
        { id: "projects", title: "Projects", icon: FiFolder },
        { id: "experience", title: "Experience", icon: FiBriefcase },
        { id: "education", title: "Education", icon: FiBook },
    ];

    useEffect(() => {
        const now = new Date();
        setCurrentDate(
            now.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            })
        );
        setFooterQuoteIndex(Math.floor(Math.random() * quotes.length));
    }, []);

    useEffect(() => {
        const quoteInterval = setInterval(() => {
            setFooterQuoteIndex((prev) => {
                let next = Math.floor(Math.random() * quotes.length);
                while (next === prev && quotes.length > 1) {
                    next = Math.floor(Math.random() * quotes.length);
                }
                return next;
            });
        }, 10000);
        return () => clearInterval(quoteInterval);
    }, [quotes.length]);

    const handleDownload = () => {
        const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${portfolioData.personal.name}
ORG:${portfolioData.personal.organization}
TITLE:${portfolioData.personal.title}
EMAIL:${portfolioData.personal.email}
TEL:${portfolioData.personal.phone}
URL:${portfolioData.personal.website}
ADR:;;${portfolioData.personal.location}
END:VCARD`;

        const blob = new Blob([vCardData], { type: "text/vcard" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${portfolioData.personal.name
            .toLowerCase()
            .replace(/\s+/g, "-")}-contact.vcf`;
        link.click();
        window.URL.revokeObjectURL(url);
    };

    const handleShare = async () => {
        const shareText = `Check out ${portfolioData.personal.name}'s portfolio!\n\nWebsite: ${window.location.href}\nEmail: ${portfolioData.personal.email}\nLinkedIn: ${portfolioData.personal.socialLinks.linkedin}`;
        const shareData = {
            title: `${portfolioData.personal.name} - Portfolio`,
            text: shareText,
        };
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (error) {
                console.log("Error sharing:", error);
            }
        } else {
            navigator.clipboard.writeText(shareText);
            alert("Portfolio link copied to clipboard!");
        }
    };

    const renderHeader = () => (
        <header className="bg-white border-b-4 border-black mb-6 p-6">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h1 className="text-4xl font-bold font-serif text-black">
                        THE DEVELOPER CHRONICLE
                    </h1>
                    <p className="text-sm text-gray-600 font-serif italic">
                        Professional Portfolio & Career Highlights
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-sm font-bold text-black">
                        {currentDate}
                    </p>
                    <p className="text-xs text-gray-600">
                        Dhaka Edition • {weatherInfo}
                    </p>
                    <p className="text-xs text-gray-600">
                        Portfolio Vol. 1, Issue 2024
                    </p>
                </div>
            </div>

            {/* Navigation Bar */}
            <div className="border-t border-b border-gray-300 py-2">
                <div className="flex justify-between items-center">
                    <div className="flex gap-6">
                        {pages.map((page) => (
                            <button
                                key={page.id}
                                onClick={() => setCurrentPage(page.id)}
                                className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 px-2 py-1 rounded transition-colors ${
                                    currentPage === page.id
                                        ? "bg-black text-white"
                                        : "text-gray-600 hover:text-black hover:bg-gray-100"
                                }`}
                            >
                                <page.icon className="w-3 h-3" />
                                {page.title}
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-4 text-gray-600 text-xs font-bold uppercase tracking-wider">
                        <span>CONTACT</span>
                        <span>DOWNLOAD</span>
                    </div>
                </div>
            </div>
        </header>
    );

    const renderHomePage = () => (
        <div className="grid lg:grid-cols-4 gap-6">
            {/* Left Column - Main Story */}
            <div className="lg:col-span-3">
                {/* Hero Article */}
                <article className="bg-white border border-gray-300 mb-6">
                    <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold uppercase">
                                FEATURED
                            </span>
                            <span className="text-xs text-gray-500">
                                <FiClock className="inline w-3 h-3 mr-1" />
                                Updated today
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold font-serif text-black mb-4 leading-tight">
                            Meet {portfolioData.personal.name}: The Rising Star
                            in Software Development
                        </h2>

                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                                <FiUser className="w-4 h-4" />
                                Portfolio Showcase
                            </span>
                            <span className="flex items-center gap-1">
                                <FiEye className="w-4 h-4" />
                                2,847 views
                            </span>
                            <span className="flex items-center gap-1">
                                <FiBookOpen className="w-4 h-4" />
                                10 min read
                            </span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Profile Image */}
                            <div className="relative">
                                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 border-gray-300">
                                    <Image
                                        src={require("@/assets/images/shakil.jpeg")}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className="absolute bottom-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                                    AVAILABLE
                                </div>
                            </div>

                            {/* Article Content */}
                            <div>
                                <p className="text-gray-800 leading-relaxed mb-4 font-serif">
                                    <span className="text-4xl font-bold float-left mr-2 leading-none">
                                        I
                                    </span>
                                    n an exclusive portfolio showcase, we
                                    present {portfolioData.personal.name}, a
                                    talented {portfolioData.personal.title} from{" "}
                                    {portfolioData.personal.organization}. With
                                    over 3 years of experience and a passion for
                                    innovation, Shakil has been making
                                    significant contributions to the tech
                                    industry.
                                </p>

                                <p className="text-gray-800 leading-relaxed mb-4 font-serif">
                                    {portfolioData.personal.bio}
                                </p>

                                {/* Quick Stats */}
                                <div className="bg-gray-100 p-4 rounded border-l-4 border-blue-600">
                                    <h4 className="font-bold text-black mb-2">
                                        CAREER HIGHLIGHTS
                                    </h4>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div className="flex items-center gap-2">
                                            <FiAward className="w-4 h-4 text-blue-600" />
                                            <span>6+ Major Projects</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiTrendingUp className="w-4 h-4 text-green-600" />
                                            <span>3+ Years Experience</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiUsers className="w-4 h-4 text-purple-600" />
                                            <span>20+ Clients Served</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiStar className="w-4 h-4 text-yellow-600" />
                                            <span>98% Success Rate</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Featured Projects */}
                <article className="bg-white border border-gray-300 mb-6">
                    <div className="bg-blue-600 text-white p-3">
                        <h3 className="font-bold uppercase tracking-wider">
                            FEATURED PROJECTS
                        </h3>
                    </div>
                    <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {portfolioData.projects
                                .filter((p) => p.featured)
                                .slice(0, 2)
                                .map((project) => (
                                    <div
                                        key={project.id}
                                        className="border border-gray-200 rounded-lg overflow-hidden"
                                    >
                                        <div className="aspect-video bg-gray-100">
                                            <Image
                                                src={
                                                    project.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                                width={300}
                                                height={200}
                                            />
                                        </div>
                                        <div className="p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="bg-green-600 text-white px-2 py-1 text-xs font-bold uppercase">
                                                    {project.category}
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    {project.status}
                                                </span>
                                            </div>
                                            <h4 className="font-bold text-black mb-2">
                                                {project.title}
                                            </h4>
                                            <p className="text-sm text-gray-600 mb-3">
                                                {project.description}
                                            </p>
                                            <div className="flex gap-2">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs bg-gray-800 text-white px-2 py-1 rounded hover:bg-gray-700 transition-colors"
                                                >
                                                    CODE
                                                </a>
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition-colors"
                                                >
                                                    LIVE DEMO
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </article>

                {/* Skills Section */}
                <article className="bg-white border border-gray-300">
                    <div className="bg-gray-800 text-white p-3">
                        <h3 className="font-bold uppercase tracking-wider">
                            TECHNICAL EXPERTISE
                        </h3>
                    </div>
                    <div className="p-6">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h4 className="font-bold text-black mb-3 border-b border-red-600 pb-1">
                                    FRONTEND
                                </h4>
                                <div className="space-y-1">
                                    {portfolioData.skills.frontend
                                        .slice(0, 6)
                                        .map((skill, index) => (
                                            <div
                                                key={index}
                                                className="text-sm text-gray-700 border-l-2 border-red-200 pl-2"
                                            >
                                                {skill}
                                            </div>
                                        ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-black mb-3 border-b border-blue-600 pb-1">
                                    BACKEND
                                </h4>
                                <div className="space-y-1">
                                    {portfolioData.skills.backend.map(
                                        (skill, index) => (
                                            <div
                                                key={index}
                                                className="text-sm text-gray-700 border-l-2 border-blue-200 pl-2"
                                            >
                                                {skill}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-black mb-3 border-b border-green-600 pb-1">
                                    TOOLS & OTHER
                                </h4>
                                <div className="space-y-1">
                                    {portfolioData.skills.tools
                                        .slice(0, 6)
                                        .map((skill, index) => (
                                            <div
                                                key={index}
                                                className="text-sm text-gray-700 border-l-2 border-green-200 pl-2"
                                            >
                                                {skill}
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
                {/* Contact Information */}
                <div className="bg-white border border-gray-300 mb-6">
                    <div className="bg-red-600 text-white p-3">
                        <h3 className="font-bold uppercase tracking-wider text-sm">
                            CONTACT INFO
                        </h3>
                    </div>
                    <div className="p-4">
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-2">
                                <FiEmailIcon className="w-4 h-4 text-red-600" />
                                <a
                                    href={`mailto:${portfolioData.personal.email}`}
                                    className="text-black hover:text-red-600"
                                >
                                    {portfolioData.personal.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiPhoneIcon className="w-4 h-4 text-blue-600" />
                                <a
                                    href={`tel:${portfolioData.personal.phone}`}
                                    className="text-black hover:text-blue-600"
                                >
                                    {portfolioData.personal.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiGlobe className="w-4 h-4 text-green-600" />
                                <a
                                    href={portfolioData.personal.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black hover:text-green-600"
                                >
                                    Portfolio Website
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiLocation className="w-4 h-4 text-purple-600" />
                                <span className="text-black">
                                    {portfolioData.personal.location}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="bg-white border border-gray-300 mb-6">
                    <div className="bg-blue-600 text-white p-3">
                        <h3 className="font-bold uppercase tracking-wider text-sm">
                            SOCIAL MEDIA
                        </h3>
                    </div>
                    <div className="p-4">
                        <div className="space-y-3">
                            {[
                                {
                                    icon: FaLinkedinIn,
                                    name: "LinkedIn",
                                    href: portfolioData.personal.socialLinks
                                        .linkedin,
                                    color: "bg-blue-700",
                                },
                                {
                                    icon: FaGithub,
                                    name: "GitHub",
                                    href: portfolioData.personal.socialLinks
                                        .github,
                                    color: "bg-gray-800",
                                },
                                {
                                    icon: FaInstagram,
                                    name: "Instagram",
                                    href: portfolioData.personal.socialLinks
                                        .instagram,
                                    color: "from-pink-500 to-purple-600",
                                },
                                {
                                    icon: FaFacebookF,
                                    name: "Facebook",
                                    href: portfolioData.personal.socialLinks
                                        .facebook,
                                    color: "bg-blue-800",
                                },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`bg-gradient-to-r ${social.color} text-white p-3 rounded flex items-center gap-2 hover:opacity-90 transition-opacity text-sm`}
                                >
                                    <social.icon className="w-4 h-4" />
                                    <span>{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Achievements */}
                <div className="bg-white border border-gray-300 mb-6">
                    <div className="bg-green-600 text-white p-3">
                        <h3 className="font-bold uppercase tracking-wider text-sm">
                            ACHIEVEMENTS
                        </h3>
                    </div>
                    <div className="p-4">
                        <div className="space-y-4">
                            {portfolioData.achievements
                                .slice(0, 3)
                                .map((achievement, index) => (
                                    <div
                                        key={index}
                                        className="border-b border-gray-200 pb-3 last:border-b-0"
                                    >
                                        <h4 className="font-bold text-sm text-black leading-tight mb-1">
                                            {achievement.title}
                                        </h4>
                                        <p className="text-xs text-gray-600 mb-1">
                                            {achievement.organization} •{" "}
                                            {achievement.year}
                                        </p>
                                        <p className="text-xs text-gray-700">
                                            {achievement.description}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-white border border-gray-300">
                    <div className="bg-purple-600 text-white p-3">
                        <h3 className="font-bold uppercase tracking-wider text-sm">
                            TAKE ACTION
                        </h3>
                    </div>
                    <div className="p-4 space-y-3">
                        <button
                            onClick={handleDownload}
                            className="w-full bg-black text-white py-3 px-4 font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                        >
                            <FiDownload className="w-4 h-4" />
                            DOWNLOAD CV
                        </button>
                        <button
                            onClick={handleShare}
                            className="w-full border-2 border-black text-black py-3 px-4 font-bold uppercase tracking-wider text-sm hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2"
                        >
                            <FiShare2 className="w-4 h-4" />
                            SHARE PORTFOLIO
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderProjectsPage = () => (
        <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                <article className="bg-white border border-gray-300 mb-6">
                    <div className="bg-blue-600 text-white p-3">
                        <h3 className="font-bold uppercase tracking-wider">
                            PROJECT PORTFOLIO
                        </h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-6">
                            {portfolioData.projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="border border-gray-200 rounded-lg overflow-hidden"
                                >
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="aspect-video md:aspect-square bg-gray-100">
                                            <Image
                                                src={
                                                    project.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                        <div className="md:col-span-2 p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span
                                                    className={`px-2 py-1 text-xs font-bold uppercase text-white ${
                                                        project.category ===
                                                        "FULL STACK"
                                                            ? "bg-red-600"
                                                            : project.category ===
                                                              "FRONTEND"
                                                            ? "bg-blue-600"
                                                            : project.category ===
                                                              "MOBILE"
                                                            ? "bg-green-600"
                                                            : project.category ===
                                                              "BLOCKCHAIN"
                                                            ? "bg-purple-600"
                                                            : "bg-gray-600"
                                                    }`}
                                                >
                                                    {project.category}
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    {project.status}
                                                </span>
                                                {project.featured && (
                                                    <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold uppercase">
                                                        FEATURED
                                                    </span>
                                                )}
                                            </div>
                                            <h4 className="font-bold text-black mb-2 text-lg">
                                                {project.title}
                                            </h4>
                                            <p className="text-sm text-gray-600 mb-3">
                                                {project.description}
                                            </p>

                                            <div className="mb-3">
                                                <p className="text-xs text-gray-500 mb-1">
                                                    TECHNOLOGIES:
                                                </p>
                                                <div className="flex flex-wrap gap-1">
                                                    {project.technologies.map(
                                                        (tech, index) => (
                                                            <span
                                                                key={index}
                                                                className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded"
                                                            >
                                                                {tech}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 mb-3">
                                                <div>
                                                    <span className="font-semibold">
                                                        Duration:
                                                    </span>{" "}
                                                    {project.duration}
                                                </div>
                                                <div>
                                                    <span className="font-semibold">
                                                        Team:
                                                    </span>{" "}
                                                    {project.team}
                                                </div>
                                                <div>
                                                    <span className="font-semibold">
                                                        Impact:
                                                    </span>{" "}
                                                    {project.impact}
                                                </div>
                                            </div>

                                            <div className="flex gap-2">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-700 transition-colors flex items-center gap-1"
                                                >
                                                    <FiGithub className="w-3 h-3" />
                                                    CODE
                                                </a>
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors flex items-center gap-1"
                                                >
                                                    <FiExternalLink className="w-3 h-3" />
                                                    LIVE DEMO
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
            </div>

            <div className="lg:col-span-1">
                {/* Project Statistics */}
                <div className="bg-white border border-gray-300 mb-6">
                    <div className="bg-green-600 text-white p-3">
                        <h3 className="font-bold uppercase tracking-wider text-sm">
                            PROJECT STATS
                        </h3>
                    </div>
                    <div className="p-4">
                        <div className="space-y-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-black">
                                    {portfolioData.projects.length}
                                </div>
                                <div className="text-xs text-gray-600">
                                    Total Projects
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-black">
                                    {
                                        portfolioData.projects.filter(
                                            (p) => p.featured
                                        ).length
                                    }
                                </div>
                                <div className="text-xs text-gray-600">
                                    Featured Projects
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-black">
                                    {
                                        portfolioData.projects.filter(
                                            (p) => p.status === "Completed"
                                        ).length
                                    }
                                </div>
                                <div className="text-xs text-gray-600">
                                    Completed
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technology Stack */}
                <div className="bg-white border border-gray-300">
                    <div className="bg-purple-600 text-white p-3">
                        <h3 className="font-bold uppercase tracking-wider text-sm">
                            TECH STACK
                        </h3>
                    </div>
                    <div className="p-4">
                        <div className="space-y-3">
                            {[
                                {
                                    name: "React",
                                    icon: FaReact,
                                    color: "text-blue-500",
                                },
                                {
                                    name: "Node.js",
                                    icon: FaNodeJs,
                                    color: "text-green-500",
                                },
                                {
                                    name: "Python",
                                    icon: FaPython,
                                    color: "text-yellow-500",
                                },
                                {
                                    name: "Docker",
                                    icon: FaDocker,
                                    color: "text-blue-600",
                                },
                            ].map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2"
                                >
                                    <tech.icon
                                        className={`w-5 h-5 ${tech.color}`}
                                    />
                                    <span className="text-sm font-medium">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderExperiencePage = () => (
        <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                <article className="bg-white border border-gray-300 mb-6">
                    <div className="bg-green-600 text-white p-3">
                        <h3 className="font-bold uppercase tracking-wider">
                            PROFESSIONAL EXPERIENCE
                        </h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-6">
                            {portfolioData.experience.map((exp, index) => (
                                <div
                                    key={index}
                                    className="border-l-4 border-blue-600 pl-6 pb-6"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h4 className="font-bold text-lg text-black">
                                                {exp.position}
                                            </h4>
                                            <p className="text-blue-600 font-semibold">
                                                {exp.company}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {exp.location}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs font-bold uppercase rounded">
                                                {exp.type}
                                            </span>
                                            <p className="text-sm text-gray-600 mt-1">
                                                {exp.duration}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-gray-800 mb-4">
                                        {exp.description}
                                    </p>

                                    <div className="mb-4">
                                        <h5 className="font-semibold text-black mb-2">
                                            Key Responsibilities:
                                        </h5>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                            {exp.responsibilities.map(
                                                (resp, idx) => (
                                                    <li key={idx}>{resp}</li>
                                                )
                                            )}
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">
                                            TECHNOLOGIES USED:
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {exp.technologies.map(
                                                (tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
            </div>

            <div className="lg:col-span-1">
                {/* Career Timeline */}
                <div className="bg-white border border-gray-300 mb-6">
                    <div className="bg-blue-600 text-white p-3">
                        <h3 className="font-bold uppercase tracking-wider text-sm">
                            CAREER TIMELINE
                        </h3>
                    </div>
                    <div className="p-4">
                        <div className="space-y-4">
                            {portfolioData.experience.map((exp, index) => (
                                <div
                                    key={index}
                                    className="border-l-2 border-blue-200 pl-3"
                                >
                                    <div className="text-xs font-bold text-blue-600 uppercase">
                                        {exp.duration}
                                    </div>
                                    <div className="text-sm font-semibold text-black">
                                        {exp.position}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                        {exp.company}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills Progress */}
                <div className="bg-white border border-gray-300">
                    <div className="bg-purple-600 text-white p-3">
                        <h3 className="font-bold uppercase tracking-wider text-sm">
                            SKILL LEVELS
                        </h3>
                    </div>
                    <div className="p-4">
                        <div className="space-y-4">
                            {[
                                { skill: "Frontend Development", level: 90 },
                                { skill: "Backend Development", level: 85 },
                                { skill: "Database Design", level: 80 },
                                { skill: "Mobile Development", level: 75 },
                                { skill: "DevOps", level: 70 },
                            ].map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-medium">
                                            {item.skill}
                                        </span>
                                        <span className="text-gray-600">
                                            {item.level}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${item.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderEducationPage = () => (
        <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                <article className="bg-white border border-gray-300 mb-6">
                    <div className="bg-purple-600 text-white p-3">
                        <h3 className="font-bold uppercase tracking-wider">
                            EDUCATIONAL BACKGROUND
                        </h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-8">
                            {portfolioData.education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="border-l-4 border-purple-600 pl-6"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h4 className="font-bold text-lg text-black mb-1">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-purple-600 font-semibold">
                                                {edu.institution}
                                            </p>
                                            <p className="text-sm text-gray-600 flex items-center gap-1">
                                                <FiLocation className="w-3 h-3" />
                                                {edu.location}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span
                                                className={`px-2 py-1 text-xs font-bold uppercase text-white rounded ${
                                                    edu.status === "Graduated"
                                                        ? "bg-green-600"
                                                        : "bg-blue-600"
                                                }`}
                                            >
                                                {edu.status}
                                            </span>
                                            <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                                                <FiCalendar className="w-3 h-3" />
                                                {edu.duration}
                                            </p>
                                            <p className="text-sm font-semibold text-black">
                                                GPA: {edu.gpa}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h5 className="font-semibold text-black mb-2">
                                                Achievements:
                                            </h5>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                {edu.achievements.map(
                                                    (achievement, idx) => (
                                                        <li key={idx}>
                                                            {achievement}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-semibold text-black mb-2">
                                                Relevant Coursework:
                                            </h5>
                                            <div className="flex flex-wrap gap-1">
                                                {edu.coursework.map(
                                                    (course, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="bg-purple-100 text-purple-700 px-2 py-1 text-xs rounded"
                                                        >
                                                            {course}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>

                {/* Certifications & Achievements */}
                <article className="bg-white border border-gray-300">
                    <div className="bg-yellow-600 text-white p-3">
                        <h3 className="font-bold uppercase tracking-wider">
                            CERTIFICATIONS & AWARDS
                        </h3>
                    </div>
                    <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {portfolioData.achievements.map(
                                (achievement, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-200 rounded-lg p-4"
                                    >
                                        <div className="flex items-start gap-3">
                                            <FiAward className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-black mb-1">
                                                    {achievement.title}
                                                </h4>
                                                <p className="text-sm text-gray-600 mb-1">
                                                    {achievement.organization}
                                                </p>
                                                <p className="text-xs text-gray-500 mb-2">
                                                    {achievement.year}
                                                </p>
                                                <p className="text-sm text-gray-700">
                                                    {achievement.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </article>
            </div>

            <div className="lg:col-span-1">
                {/* Academic Stats */}
                <div className="bg-white border border-gray-300 mb-6">
                    <div className="bg-green-600 text-white p-3">
                        <h3 className="font-bold uppercase tracking-wider text-sm">
                            ACADEMIC STATS
                        </h3>
                    </div>
                    <div className="p-4">
                        <div className="space-y-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-black">
                                    3.75
                                </div>
                                <div className="text-xs text-gray-600">
                                    Overall GPA
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-black">
                                    6
                                </div>
                                <div className="text-xs text-gray-600">
                                    Dean's List Semesters
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-black">
                                    4
                                </div>
                                <div className="text-xs text-gray-600">
                                    Major Awards
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Study Focus */}
                <div className="bg-white border border-gray-300">
                    <div className="bg-blue-600 text-white p-3">
                        <h3 className="font-bold uppercase tracking-wider text-sm">
                            STUDY FOCUS
                        </h3>
                    </div>
                    <div className="p-4">
                        <div className="space-y-3">
                            {[
                                "Software Engineering",
                                "Data Structures & Algorithms",
                                "Database Systems",
                                "Web Technologies",
                                "Computer Networks",
                                "Artificial Intelligence",
                            ].map((subject, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="text-sm">{subject}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderCurrentPage = () => {
        switch (currentPage) {
            case "home":
                return renderHomePage();
            case "projects":
                return renderProjectsPage();
            case "experience":
                return renderExperiencePage();
            case "education":
                return renderEducationPage();
            default:
                return renderHomePage();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-6xl mx-auto">
                {renderHeader()}
                {renderCurrentPage()}

                {/* Footer */}
                <footer className="bg-black text-white p-6 mt-6">
                    <div className="text-center">
                        <div className="border-t border-b border-gray-600 py-4 mb-4">
                            <p className="font-serif italic text-lg">
                                "{quotes[footerQuoteIndex].quote}"
                            </p>
                            <p className="text-sm text-gray-400 mt-2">
                                — {quotes[footerQuoteIndex].author}
                            </p>
                        </div>
                        <p className="text-xs text-gray-400">
                            © {new Date().getFullYear()} The Developer Chronicle
                            • Portfolio of {portfolioData.personal.name} • All
                            Rights Reserved
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
