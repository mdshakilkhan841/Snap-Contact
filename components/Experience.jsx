import React from "react";

const Experience = () => {
    const portfolioData = {
        experience: [
            {
                position: "Software Developer",
                company: "Daffodil International University",
                location: "Dhaka, Bangladesh",
                duration: "Dec 2024 - Present",
                type: "Full-time",
                description:
                    "Developing and maintaining mobile applications using React Native, Node.js, and MongoDB. Collaborating with cross-functional teams to deliver high-quality software solutions.",
                responsibilities: [
                    "Develop and maintain cross-platform mobile applications using React Native for both iOS and Android.",
                    "Implement state management solutions using Zustand and Redux, and handle authentication via OAuth, JWT",
                    "Integrate RESTful and third-party APIs, optimize app performance, and ensure smooth deployment workflows",
                    "Collaborate with cross-functional teams to deliver high-quality software solutions",
                ],
                technologies: [
                    "React Native",
                    "Node.js",
                    "MongoDB",
                    "AWS",
                    "Docker",
                ],
            },
            {
                position: "Software Engineer",
                company: "Techdojo Limited",
                location: "Dhaka, Bangladesh",
                duration: "Jun 2023 - Nov 2024",
                type: "Full-time",
                description:
                    "Worked as a Full-Stack Developer focusing on VR apps using Three.js and web/mobile solutions with MERN Stack and React Native. Collaborated with teams, migrated legacy systems, and contributed to code reviews and knowledge sharing.",
                responsibilities: [
                    "Developed immersive VR applications using Three.js, enhancing interactive 3D environments",
                    "Contributed to building applications with exceptional user experiences using MERN Stack, React Native",
                    "Participated in code reviews and contributed to team knowledge sharing",
                    "Assisted in the migration of legacy systems to modern frameworks",
                    "Collaborated with cross-functional teams to deliver innovative solutions",
                ],
                technologies: [
                    "React",
                    "Next.js",
                    "React Native",
                    "Three.js",
                    "MongoDB",
                    "Tailwind CSS",
                    "Figma",
                ],
            },
            {
                position: "Associate Developer",
                company: "Koel Fresh Pvt. Ltd.",
                location: "Odisha, India",
                duration: "May 2021 - Aug 2021",
                type: "Internship",
                description:
                    "Internship focused on developing a renewable energy powered cold storage solution. Involved in both frontend and backend development.",
                responsibilities: [
                    "Worked specifically to design the renewable energy powered cold storage solution and research work.",
                    "Design and develop the admin website as a Front-End Developer.",
                ],
                technologies: [
                    "Javascript",
                    "HTML5",
                    "CSS",
                    "Bootstrap",
                    "Database Management",
                    "Figma",
                ],
            },
        ],
    };
    return (
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
                                { skill: "Backend Development", level: 60 },
                                { skill: "Database Design", level: 70 },
                                { skill: "Mobile Development", level: 95 },
                                // { skill: "DevOps", level: 70 },
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
};

export default Experience;
