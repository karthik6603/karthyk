'use client'
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <motion.h1
        className="text-4xl font-bold text-blue-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      <p className="mt-4 text-lg">I’m a developer passionate about building awesome UIs.</p>
    </main>
  );
}