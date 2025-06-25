"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaCode, FaMoon, FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ✅ Extracted outside Home()
const ProjectCard = ({ title, description }: { title: string; description: string }) => (
  <motion.div whileHover={{ scale: 1.05, y: -10 }} transition={{ duration: 0.3 }}>
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

// ✅ Single Home declaration
export default function Home() {
  const skills = [
    "React.js",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git",
    "Responsive Design",
    "UI/UX Design",
  ];

  const codeString = `export default function Greeting() {
  return (
    <div className="intro">
      Hi there!
    </div>
  );
}`;

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Home Section */}
      <section
        id="home"
        className="snap-start min-h-screen flex items-center justify-center bg-gray-100"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Welcome to My Portfolio
          </h1>
          <Button variant="default">Explore My Work</Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="snap-start min-h-screen flex items-center justify-center bg-gray-200"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold text-blue-600 mb-4">About Me</h1>
          <p className="text-lg max-w-md">
            I’m a passionate developer skilled in React, TypeScript, and
            Next.js, building engaging user experiences.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="snap-start min-h-screen flex items-center justify-center bg-gray-200"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 bg-white rounded shadow text-center">
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="snap-start min-h-screen flex items-center justify-center bg-gray-300"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold text-blue-600 mb-4">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard
              title="Project 1"
              description="A web app built with Next.js and Tailwind CSS."
            />
            <ProjectCard
              title="Project 2"
              description="An interactive portfolio with Framer Motion animations."
            />
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="snap-start min-h-screen flex items-center justify-center bg-gray-400"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Me</h1>
          <p className="text-lg max-w-md">
            Reach out via email at example@email.com or through my socials.
          </p>
          <Button variant="default" className="mt-4">
            Get in Touch
          </Button>
        </motion.div>
      </section>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-6 p-4 bg-white shadow-md rounded-t-lg z-10">
        <Link href="#home" className="group relative">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <FaHome className="w-8 h-8 text-blue-600" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Home
            </span>
          </motion.div>
        </Link>
        <Link href="#about" className="group relative">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <FaUser className="w-8 h-8 text-blue-600" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              About
            </span>
          </motion.div>
        </Link>
        <Link href="#projects" className="group relative">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <FaBriefcase className="w-8 h-8 text-blue-600" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Projects
            </span>
          </motion.div>
        </Link>
        <Link href="#contact" className="group relative">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <FaEnvelope className="w-8 h-8 text-blue-600" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Contact
            </span>
          </motion.div>
        </Link>
      </nav>
    </div>
  );
}
