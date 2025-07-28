"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
    FiMail,
    FiPhone,
    FiGlobe,
    FiMapPin,
    FiDownload,
    FiShare2,
    FiStar,
    FiChevronLeft,
    FiChevronRight,
    FiUser,
    FiBookmark,
    FiActivity,
} from "react-icons/fi";
import {
    FaLinkedinIn,
    FaGithub,
    FaXTwitter,
    FaWhatsapp,
    FaInstagram,
    FaFacebookF,
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
        quote: "Leadership and learning are indispensable to each other.",
        author: "John F. Kennedy",
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson",
    },
    {
        quote: "Skill is only developed by hours and hours of work.",
        author: "Usain Bolt",
    },
    {
        quote: "An investment in knowledge pays the best interest.",
        author: "Benjamin Franklin",
    },
    {
        quote: "The function of leadership is to produce more leaders, not more followers.",
        author: "Ralph Nader",
    },
    {
        quote: "The future belongs to those who learn more skills and combine them in creative ways.",
        author: "Robert Greene",
    },
    {
        quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar",
    },
];

export default function ContactCardUnique() {
    const [currentPage, setCurrentPage] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);
    const [footerQuoteIndex, setFooterQuoteIndex] = useState(0);
    const [timeOfDay, setTimeOfDay] = useState("");

    const contactDetails = {
        name: "SHAKIL KHAN",
        title: "Software Engineer",
        organization: "Daffodil International University, Dhaka",
        email: "mdshakilkhan0152@email.com",
        phone: "+880 1521-438781",
        website: "https://mdshakilkhan.netlify.app",
        location: "Dhaka-1207, Bangladesh",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/md-shakil-khan",
            github: "https://github.com/mdshakilkhan841",
            facebook: "https://www.facebook.com/shakil.khan.0152",
            instagram: "https://instagram.com/shakil2421",
            whatsapp: "https://wa.me/8801521438781",
        },
        skills: [
            "React",
            "React Native",
            "Next.js",
            "Three.js",
            "Node.js",
            "Express.js",
            "JavaScript",
            "Python",
            "Docker",
            "MongoDB",
            "MySQL",
            "Redux",
            "Zustand",
            "Git",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Figma",
        ],
    };

    const pages = [
        { id: "profile", title: "Profile", icon: FiUser },
        { id: "contact", title: "Contact", icon: FiMail },
        { id: "social", title: "Social", icon: FiBookmark },
        { id: "skills", title: "Skills", icon: FiActivity },
    ];

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setTimeOfDay("Good Morning");
        else if (hour < 17) setTimeOfDay("Good Afternoon");
        else setTimeOfDay("Good Evening");

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
        }, 8000);
        return () => clearInterval(quoteInterval);
    }, [quotes.length]);

    const handlePageChange = (newPage) => {
        if (newPage !== currentPage) {
            setIsFlipping(true);
            setTimeout(() => {
                setCurrentPage(newPage);
                setIsFlipping(false);
            }, 300);
        }
    };

    const handleDownload = () => {
        const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${contactDetails.name}
ORG:${contactDetails.organization}
TITLE:${contactDetails.title}
EMAIL:${contactDetails.email}
TEL:${contactDetails.phone}
URL:${contactDetails.website}
ADR:;;${contactDetails.location}
END:VCARD`;

        const blob = new Blob([vCardData], { type: "text/vcard" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${contactDetails.name
            .toLowerCase()
            .replace(/\s+/g, "-")}-contact.vcf`;
        link.click();
        window.URL.revokeObjectURL(url);
    };

    const handleShare = async () => {
        const shareText = `Facebook: ${contactDetails.socialLinks.facebook}\nInstagram: ${contactDetails.socialLinks.instagram}\nGitHub: ${contactDetails.socialLinks.github}\nLinkedIn: ${contactDetails.socialLinks.linkedin}\n\nWebsite:${window.location.href}\n\nConnect with me - ${contactDetails.title} at ${contactDetails.organization}`;
        const shareData = {
            title: `${contactDetails.name} - Digital Contact Card`,
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
            alert("Contact card info copied to clipboard!");
        }
    };

    const renderProfilePage = () => (
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div className="flex flex-col items-center justify-start text-center p-6 min-h-full">
                <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto">
                        <Image
                            src={require("@/assets/images/shakil.jpeg")}
                            alt="Profile"
                            className="w-full h-full object-cover"
                            width={128}
                            height={128}
                        />
                    </div>
                    <div className="absolute bottom-0 right-5 w-6 h-6 bg-green-500 rounded-full border-3 border-white flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-white mb-2">
                    {contactDetails.name}
                </h1>
                <p className="text-lg text-blue-200 mb-1">
                    {contactDetails.title}
                </p>
                <p className="text-blue-300 text-sm mb-6 px-2">
                    {contactDetails.organization}
                </p>

                <div className="flex gap-3 mb-6 flex-wrap justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                        <span className="text-white text-sm font-medium">
                            Available
                        </span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2">
                        {[...Array(5)].map((_, i) => (
                            <FiStar
                                key={i}
                                className="w-3 h-3 text-yellow-400 fill-current"
                            />
                        ))}
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
                    <h3 className="text-white font-semibold mb-2">About Me</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                        Passionate software engineer with expertise in modern
                        web technologies. I specialize in creating innovative
                        digital solutions using React, Node.js, and cutting-edge
                        frameworks. Always eager to learn new technologies and
                        solve complex problems.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-white">15+</div>
                        <div className="text-xs text-blue-200">Projects</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-white">3+</div>
                        <div className="text-xs text-blue-200">Years</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-white">∞</div>
                        <div className="text-xs text-blue-200">Passion</div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderContactPage = () => (
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Contact Information
                </h2>
                <div className="space-y-4">
                    {[
                        {
                            icon: FiMail,
                            label: "Email",
                            value: contactDetails.email,
                            href: `mailto:${contactDetails.email}`,
                            description:
                                "Send me an email for business inquiries",
                        },
                        {
                            icon: FiPhone,
                            label: "Phone",
                            value: contactDetails.phone,
                            href: `tel:${contactDetails.phone.replace(
                                /[^+\d]/g,
                                ""
                            )}`,
                            description:
                                "Call me during business hours (9 AM - 6 PM)",
                        },
                        {
                            icon: FiGlobe,
                            label: "Website",
                            value: contactDetails.website.replace(
                                /^https?:\/\//,
                                ""
                            ),
                            href: contactDetails.website,
                            description:
                                "Check out my portfolio and latest projects",
                        },
                        {
                            icon: FiMapPin,
                            label: "Location",
                            value: contactDetails.location,
                            href: null,
                            description:
                                "Based in Dhaka, available for remote work",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-blue-200 text-sm uppercase tracking-wide font-medium">
                                        {item.label}
                                    </p>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            className="text-white hover:text-blue-200 transition-colors font-medium block break-all"
                                            rel="noreferrer"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-white font-medium">
                                            {item.value}
                                        </p>
                                    )}
                                    <p className="text-blue-300 text-xs mt-1 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-2">
                        Best Time to Contact
                    </h3>
                    <p className="text-blue-200 text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM (GMT+6)
                    </p>
                    <p className="text-blue-200 text-sm">
                        Response time: Usually within 24 hours
                    </p>
                </div>
            </div>
        </div>
    );

    const renderSocialPage = () => (
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div className="h-full p-6 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Social Media
                </h2>
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    {[
                        {
                            icon: FaLinkedinIn,
                            name: "LinkedIn",
                            href: contactDetails.socialLinks.linkedin,
                            color: "bg-blue-600",
                        },
                        {
                            icon: FaGithub,
                            name: "GitHub",
                            href: contactDetails.socialLinks.github,
                            color: "bg-gray-800",
                        },
                        {
                            icon: FaFacebookF,
                            name: "Facebook",
                            href: contactDetails.socialLinks.facebook,
                            color: "bg-blue-700",
                        },
                        {
                            icon: FaInstagram,
                            name: "Instagram",
                            href: contactDetails.socialLinks.instagram,
                            color: "bg-gradient-to-r from-purple-500 to-pink-500",
                        },
                        {
                            icon: FaWhatsapp,
                            name: "WhatsApp",
                            href: contactDetails.socialLinks.whatsapp,
                            color: "bg-green-600",
                        },
                        {
                            icon: FaXTwitter,
                            name: "Twitter",
                            href: contactDetails.socialLinks.twitter || "#",
                            color: "bg-black",
                        },
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${social.color} p-6 rounded-xl text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col items-center gap-3`}
                        >
                            <social.icon className="w-8 h-8" />
                            <span className="text-sm font-medium">
                                {social.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderSkillsPage = () => (
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Technical Skills
                </h2>

                <div className="space-y-6">
                    {/* Frontend Skills */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            Frontend Development
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {[
                                "React",
                                "Next.js",
                                "JavaScript",
                                "HTML",
                                "CSS",
                                "Tailwind CSS",
                            ].map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-blue-500/20 text-blue-200 px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-blue-500/30 transition-colors"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            Backend Development
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {[
                                "Node.js",
                                "Express.js",
                                "Python",
                                "MongoDB",
                                "MySQL",
                            ].map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-purple-500/20 text-purple-200 px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-purple-500/30 transition-colors"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile & Tools */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                            Mobile & Tools
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {[
                                "React Native",
                                "Three.js",
                                "Docker",
                                "Redux",
                                "Zustand",
                                "Git",
                                "Figma",
                            ].map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-pink-500/20 text-pink-200 px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-pink-500/30 transition-colors"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Level */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <h3 className="text-white font-semibold mb-3">
                            Experience Level
                        </h3>
                        <div className="space-y-3">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-blue-200">
                                        Frontend Development
                                    </span>
                                    <span className="text-white">Advanced</span>
                                </div>
                                <div className="w-full bg-white/20 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-purple-200">
                                        Backend Development
                                    </span>
                                    <span className="text-white">
                                        Intermediate
                                    </span>
                                </div>
                                <div className="w-full bg-white/20 rounded-full h-2">
                                    <div className="bg-purple-500 h-2 rounded-full w-3/5"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-pink-200">
                                        Mobile Development
                                    </span>
                                    <span className="text-white">Advanced</span>
                                </div>
                                <div className="w-full bg-white/20 rounded-full h-2">
                                    <div className="bg-pink-500 h-2 rounded-full w-[90%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderCurrentPage = () => {
        switch (currentPage) {
            case 0:
                return renderProfilePage();
            case 1:
                return renderContactPage();
            case 2:
                return renderSocialPage();
            case 3:
                return renderSkillsPage();
            default:
                return renderProfilePage();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
            {/* Main Card Container */}
            <div className="w-full max-w-md mx-auto">
                {/* Header */}
                <div className="bg-white/10 backdrop-blur-md rounded-t-3xl p-4 border-b border-white/20">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <p className="text-white/70 text-sm">{timeOfDay}</p>
                        <div className="text-white/70 text-sm">
                            {new Date().toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </div>
                    </div>
                </div>

                {/* Content Area - Now with proper scrolling */}
                <div className="bg-white/5 backdrop-blur-md h-[500px] relative overflow-hidden">
                    <div
                        className={`transition-all duration-300 h-full ${
                            isFlipping
                                ? "opacity-0 scale-95"
                                : "opacity-100 scale-100"
                        }`}
                    >
                        {renderCurrentPage()}
                    </div>
                </div>

                {/* Navigation */}
                <div className="bg-white/10 backdrop-blur-md rounded-b-3xl p-4 border-t border-white/20">
                    <div className="flex justify-between items-center mb-4">
                        <button
                            onClick={() =>
                                handlePageChange(Math.max(0, currentPage - 1))
                            }
                            disabled={currentPage === 0}
                            className="p-2 rounded-full bg-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 transition-colors"
                        >
                            <FiChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex gap-2">
                            {pages.map((page, index) => (
                                <button
                                    key={page.id}
                                    onClick={() => handlePageChange(index)}
                                    className={`p-2 rounded-full transition-all duration-300 ${
                                        currentPage === index
                                            ? "bg-white text-purple-900 shadow-lg"
                                            : "bg-white/20 text-white hover:bg-white/30"
                                    }`}
                                >
                                    <page.icon className="w-4 h-4" />
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() =>
                                handlePageChange(
                                    Math.min(pages.length - 1, currentPage + 1)
                                )
                            }
                            disabled={currentPage === pages.length - 1}
                            className="p-2 rounded-full bg-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 transition-colors"
                        >
                            <FiChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={handleDownload}
                            className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <FiDownload className="w-4 h-4" />
                            <span className="text-sm font-medium">Save</span>
                        </button>
                        <button
                            onClick={handleShare}
                            className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <FiShare2 className="w-4 h-4" />
                            <span className="text-sm font-medium">Share</span>
                        </button>
                    </div>
                </div>

                {/* Quote Footer */}
                <div className="mt-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <p className="text-white/80 text-sm italic">
                        "{quotes[footerQuoteIndex].quote}"
                    </p>
                    <p className="text-white/60 text-xs mt-1">
                        - {quotes[footerQuoteIndex].author}
                    </p>
                </div>
            </div>
        </div>
    );
}
