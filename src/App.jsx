import React from 'react';
import './App.css'; // Assuming you have a CSS file for global styles
import { motion } from "framer-motion";


const projects = [
  {
    title: "AI Timetable Generator",
    description:
      "Built with React, Python backend, and Firebase. Automatically generates optimal class schedules.",
  },
  {
    title: "Smart Career Path Recommender",
    description:
      "ML-powered system that recommends career paths based on skills and preferences.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <header className="bg-white shadow-md p-6 text-center">
        <h1 className="text-4xl font-bold">Adish Sawant</h1>
        <p className="text-lg text-gray-600">Frontend Developer | ReactJS | Web Developer</p>
      </header>

      <main className="p-8 max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">About Me</h2>
          <p>
            I’m a passionate frontend developer skilled in ReactJS, building fast and modern web applications.
            Experienced in integrating APIs, responsive design, and optimizing performance.
          </p>
        </section>

        {/* <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Projects</h2>
          <ul className="space-y-4">
            <li>
              <strong>AI Timetable Generator</strong> <br />
              Built with React, Python backend, and Firebase database. Automatically generates optimal class schedules.
            </li>
            <li>
              <strong>Smart Career Path Recommender</strong> <br />
              A machine learning-powered system that recommends career paths based on user inputs and skill matching.
            </li>
          </ul>
        </section> */}

        <section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Projects</h2>
  <div className="grid gap-6 md:grid-cols-2">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        className="bg-white shadow p-4 rounded-xl border"
      >
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p>{project.description}</p>
      </motion.div>
    ))}
  </div>
</section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Contact</h2>
          <p>Email: adish@email.com</p>
          <p>
            GitHub:{" "}
            <a
              className="text-blue-600 underline"
              href="https://github.com/aadiish"
              target="_blank"
              rel="noopener noreferrer"
            >
              @aadiish
            </a>
          </p>
        </section>
      </main>

      <footer className="text-center p-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Adish Sawant. All rights reserved.
      </footer>
    </div>
  );
}
