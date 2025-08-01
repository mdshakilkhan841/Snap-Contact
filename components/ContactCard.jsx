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
    FiCode,
    FiZap,
    FiStar,
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
        quote: "Don’t judge each day by the harvest you reap but by the seeds that you plant.",
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
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
    },
    {
        quote: "Motivation is what gets you started. Habit is what keeps you going.",
        author: "Jim Ryun",
    },
    {
        quote: "The mind is not a vessel to be filled but a fire to be kindled.",
        author: "Plutarch",
    },
    {
        quote: "A good leader takes a little more than his share of the blame, a little less than his share of the credit.",
        author: "Arnold H. Glasgow",
    },
    {
        quote: "You don’t learn to walk by following rules. You learn by doing, and by falling over.",
        author: "Richard Branson",
    },
];

export default function ContactCard() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState(0);
    const [footerQuoteIndex, setFooterQuoteIndex] = useState(0);
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

    useEffect(() => {
        setFooterQuoteIndex(Math.floor(Math.random() * quotes.length));
    }, []);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveSection((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const quoteInterval = setInterval(() => {
            setFooterQuoteIndex((prev) => {
                let next = Math.floor(Math.random() * quotes.length);
                // Ensure a different quote is shown
                while (next === prev && quotes.length > 1) {
                    next = Math.floor(Math.random() * quotes.length);
                }
                return next;
            });
        }, 5000);
        return () => clearInterval(quoteInterval);
    }, [quotes.length]);

    const handleDownload = () => {
        // Use contactDetails dynamically for vCard
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

    return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
                        backgroundSize: "50px 50px",
                    }}
                ></div>
            </div>

            <div className="relative z-10 sm:p-8 p-2 flex items-center justify-center min-h-screen">
                <div
                    className={`w-full max-w-4xl transition-all duration-1000 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    {/* Main Card */}
                    <div className="bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 shadow-2xl rounded-lg overflow-hidden">
                        {/* Header Section */}
                        <div className="relative sm:p-8 p-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
                            <div className="flex flex-col lg:flex-row items-center gap-8">
                                {/* Profile Image with Neon Ring */}
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 animate-spin">
                                        <div className="w-32 h-32 rounded-full bg-gray-900"></div>
                                    </div>
                                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                                        <Image
                                            src={require("@/assets/images/shakil.jpeg")}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                            layout="fill"
                                        />
                                    </div>
                                    <div className="absolute bottom-1 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-800 animate-pulse"></div>
                                </div>

                                {/* Name and Title */}
                                <div className="text-center lg:text-left flex-1">
                                    <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                                        {contactDetails.name}
                                    </h1>
                                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors">
                                            <FiCode className="w-3 h-3 mr-1" />
                                            Creative Developer
                                        </span>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                                            <FiZap className="w-3 h-3 mr-1" />
                                            MERN Stack Enthusiast
                                        </span>
                                    </div>
                                    <p className="text-gray-300 text-lg font-bold">
                                        {contactDetails.title}
                                    </p>
                                    <p className="text-gray-400 text-sm mt-0 italic">
                                        {contactDetails.organization}
                                    </p>
                                </div>

                                {/* Status Indicator */}
                                <div className="">
                                    <div className="text-right sm:block flex gap-2">
                                        <div className="flex items-center gap-2 text-green-400 sm:mb-2 mb-1">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="text-sm">
                                                Available for projects
                                            </span>
                                        </div>
                                        <div className="text-white block sm:hidden">
                                            |
                                        </div>
                                        <div className="flex items-center gap-1 text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <FiStar
                                                    key={i}
                                                    className="w-3 h-3 fill-current"
                                                />
                                            ))}
                                            <span className="text-xs ml-1">
                                                5.0 Rating
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="sm:p-8 p-4">
                            {/* Content Grid */}
                            <div className="grid lg:grid-cols-2 gap-8 mb-8">
                                {/* Contact Information */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
                                        Get In Touch
                                    </h3>

                                    <div className="space-y-4">
                                        {[
                                            {
                                                icon: FiMail,
                                                label: "Email",
                                                value: contactDetails.email,
                                                href: `mailto:${contactDetails.email}`,
                                                color: "text-cyan-400",
                                            },
                                            {
                                                icon: FiPhone,
                                                label: "Phone",
                                                value: contactDetails.phone,
                                                href: `tel:${contactDetails.phone.replace(
                                                    /[^+\d]/g,
                                                    ""
                                                )}`,
                                                color: "text-purple-400",
                                            },
                                            {
                                                icon: FiGlobe,
                                                label: "Website",
                                                value: contactDetails.website.replace(
                                                    /^https?:\/\//,
                                                    ""
                                                ),
                                                href: contactDetails.website,
                                                color: "text-pink-400",
                                            },
                                            {
                                                icon: FiMapPin,
                                                label: "Location",
                                                value: contactDetails.location,
                                                href: null,
                                                color: "text-green-400",
                                            },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="group flex items-center gap-4 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50"
                                            >
                                                <div
                                                    className={`p-2 rounded-lg bg-gray-800/50 ${item.color} group-hover:scale-110 transition-transform`}
                                                >
                                                    <item.icon className="w-4 h-4" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                                                        {item.label}
                                                    </p>
                                                    {item.href ? (
                                                        <a
                                                            href={item.href}
                                                            target="_blank"
                                                            className="text-white hover:text-cyan-300 transition-colors"
                                                        >
                                                            {item.value}
                                                        </a>
                                                    ) : (
                                                        <p className="text-white">
                                                            {item.value}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Social & Skills */}
                                <div className="space-y-6">
                                    {/* Social Media */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
                                            Connect
                                        </h3>

                                        <div className="grid grid-cols-2 gap-3">
                                            {[
                                                {
                                                    icon: FaLinkedinIn,
                                                    name: "LinkedIn",
                                                    href: contactDetails
                                                        .socialLinks.linkedin,
                                                    color: "from-blue-900 to-blue-800",
                                                },
                                                {
                                                    icon: FaGithub,
                                                    name: "GitHub",
                                                    href: contactDetails
                                                        .socialLinks.github,
                                                    color: "from-gray-700 to-gray-800",
                                                },
                                                {
                                                    icon: FaXTwitter,
                                                    name: "Twitter",
                                                    href: contactDetails
                                                        .socialLinks.twitter,
                                                    color: "from-gray-950 to-gray-900",
                                                },
                                                {
                                                    icon: FaInstagram,
                                                    name: "Instagram",
                                                    href: contactDetails
                                                        .socialLinks.instagram,
                                                    color: "from-pink-500 to-purple-600",
                                                },
                                                {
                                                    icon: FaFacebookF,
                                                    name: "Facebook",
                                                    href: contactDetails
                                                        .socialLinks.facebook,
                                                    color: "from-blue-600 to-blue-800",
                                                },
                                                {
                                                    icon: FaWhatsapp,
                                                    name: "Whatsapp",
                                                    href: contactDetails
                                                        .socialLinks.whatsapp,
                                                    color: "from-green-600 to-green-700",
                                                },
                                            ].map((social, index) => (
                                                <a
                                                    key={index}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`group flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r ${social.color} hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white font-medium text-sm`}
                                                >
                                                    <social.icon className="w-5 h-5" />
                                                    <span>{social.name}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                            <div className="w-1 h-6 bg-gradient-to-b from-pink-400 to-cyan-500 rounded-full"></div>
                                            Expertise
                                        </h3>

                                        <div className="flex flex-wrap gap-2">
                                            {contactDetails.skills.map(
                                                (skill, index) => (
                                                    <span
                                                        key={index}
                                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-all duration-300 ${
                                                            activeSection ===
                                                            index % 3
                                                                ? "border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-400/20 bg-cyan-400/10"
                                                                : "border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-300 bg-transparent"
                                                        }`}
                                                    >
                                                        {skill}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleDownload}
                                    className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-md text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 h-12"
                                >
                                    <FiDownload className="w-5 h-5 mr-2" />
                                    Save Contact
                                </button>

                                <button
                                    onClick={handleShare}
                                    className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-md text-sm font-medium text-white border-2 border-gray-600 hover:border-cyan-400 bg-gray-800/50 hover:bg-gray-700/50 hover:text-cyan-300 transition-all duration-300 h-12"
                                >
                                    <FiShare2 className="w-5 h-5 mr-2" />
                                    Share Card
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer Quote */}
                    <div className="text-center mt-8">
                        <p className="text-gray-400 italic text-lg">
                            "{quotes[footerQuoteIndex].quote}"
                        </p>
                        <p className="text-gray-500 text-sm">
                            - {quotes[footerQuoteIndex].author}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
