import React from "react";
import { FiAward, FiCalendar, FiMapPin } from "react-icons/fi";

const Education = () => {
    const portfolioData = {
        education: [
            {
                degree: "Bachelor of Technology in Computer Science & Engineering",
                institution: "National Institute of Technology Rourkela",
                location: "Odisha, India",
                duration: "2018 - 2022",
                gpa: "7.30/10.00",
                classification: "First Class",
                status: "Graduated",
                achievements: [
                    "Bloomberg Global Mayors Challenge Winner (2021)",
                    "Participated in NITR IMUN 2019 as Bangladesh’s Delegate, addressing the strategic role of science and technology in international peace and disarmament",
                    "Volunteered with the Central Vigilance Commission (Govt. of India), upholding the integrity pledge and supporting anti-corruption and transparency initiatives in public administration",
                ],
                coursework: [
                    "Software Project, Process and Quality Management",
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
                institution: "Birshreshtha Noor Mohammad Public College",
                location: "Dhaka, Bangladesh",
                duration: "2014 - 2015",
                gpa: "5.00/5.00",
                status: "Completed",
                achievements: ["Golden GPA (5.00)"],
                coursework: [
                    "Higher Mathematics",
                    "Physics",
                    "Chemistry",
                    "Information & Communication Technology",
                    "Biology",
                ],
            },
            {
                degree: "Secondary School Certificate (Science)",
                institution: "Ibne Taimiya School & College",
                location: "Cumilla, Bangladesh",
                duration: "2012 - 2013",
                gpa: "5.00/5.00",
                status: "Completed",
                achievements: [
                    "Golden GPA (5.00)",
                    "Class Representative (CR)",
                ],
                coursework: [
                    "Higher Mathematics",
                    "Physics",
                    "Chemistry",
                    "Biology",
                ],
            },
        ],
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

    return (
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
                                                <FiMapPin className="w-3 h-3" />
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
                                            <p className="text-sm font-semibold text-black">
                                                {edu.classification &&
                                                    `(${edu.classification})`}
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
};

export default Education;
