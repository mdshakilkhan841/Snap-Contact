import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "SHAKIL Digital Card",
    description:
        "I’m Md Shakil Khan, a passionate Full-Stack Developer with a strong foundation in JavaScript, Python, and modern frameworks like React, Next.js, and Node.js. Currently building and optimizing mobile and web applications—leveraging tools such as Redux, Zustand, Tailwind CSS, and MongoDB—to deliver seamless user experiences across platforms. With hands-on experience in secure authentication (OAuth, JWT), performance tuning, and API integration, I thrive on turning complex problems into elegant, scalable solutions. ",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
