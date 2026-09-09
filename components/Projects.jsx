import React from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
    SiReact,
    SiPython,
    SiJavascript,
    SiNodedotjs,
    SiMysql,
    SiMongodb,
    SiExpress,
    SiExpo,
    SiNextdotjs,
    SiThreedotjs,
    SiDocker,
    SiSocketdotio,
    SiTailwindcss,
    SiGit,
    SiCss as SiCss3,
    SiHtml5,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const Projects = () => {
    const portfolioData = {
        projects: [
            {
                id: 1,
                title: "E-Commerce Site with Admin Dashboard",
                category: "FULL STACK",
                description:
                    "A comprehensive e-commerce solution built with React, Node.js, and MongoDB. Features include real-time inventory management, and analytics dashboard.",
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
                technologies: [
                    "React Native",
                    "Redux",
                    "OpenWeather API",
                    "Expo",
                ],
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
                technologies: [
                    "Next.js",
                    "Tailwind CSS",
                    "Vercel",
                    "GitHub API",
                ],
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
    };
    return (
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
                                    icon: SiReact,
                                    color: "text-sky-400",
                                },
                                {
                                    name: "Next.js",
                                    icon: SiNextdotjs,
                                    color: "text-black",
                                },
                                {
                                    name: "React Native",
                                    icon: SiReact,
                                    color: "text-sky-600",
                                },
                                {
                                    name: "Expo",
                                    icon: SiExpo,
                                    color: "text-black",
                                },
                                {
                                    name: "Three.js",
                                    icon: SiThreedotjs,
                                    color: "text-black",
                                },
                                {
                                    name: "JavaScript",
                                    icon: SiJavascript,
                                    color: "text-yellow-300",
                                },
                                {
                                    name: "Node.js",
                                    icon: SiNodedotjs,
                                    color: "text-green-500",
                                },
                                {
                                    name: "Express.js",
                                    icon: SiExpress,
                                    color: "text-black",
                                },
                                {
                                    name: "Python",
                                    icon: SiPython,
                                    color: "text-yellow-500",
                                },
                                {
                                    name: "MongoDB",
                                    icon: SiMongodb,
                                    color: "text-green-700",
                                },
                                {
                                    name: "MySQL",
                                    icon: SiMysql,
                                    color: "text-sky-700",
                                },
                                {
                                    name: "Socket.IO",
                                    icon: SiSocketdotio,
                                    color: "text-black",
                                },
                                {
                                    name: "Docker",
                                    icon: SiDocker,
                                    color: "text-blue-600",
                                },
                                {
                                    name: "HTML5",
                                    icon: SiHtml5,
                                    color: "text-orange-500",
                                },
                                {
                                    name: "CSS3",
                                    icon: SiCss3,
                                    color: "text-blue-500",
                                },
                                {
                                    name: "Tailwind CSS",
                                    icon: SiTailwindcss,
                                    color: "text-sky-400",
                                },
                                {
                                    name: "Git",
                                    icon: SiGit,
                                    color: "text-orange-600",
                                },
                                {
                                    name: "Visual Studio Code",
                                    icon: BiLogoVisualStudio,
                                    color: "text-sky-500",
                                },
                            ].map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2"
                                >
                                    <tech.icon
                                        className={`w-6 h-6 ${tech.color}`}
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
};

export default Projects;
