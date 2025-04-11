import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";

export default function Contact() {
  return (
    <div className="min-h-screen poppins text-white font-sans">
      <div className="max-w-6xl mx-auto space-y-12 text-center">

        {/* Heading Section */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl logo font-bold tracking-wider"
        >
          Let's Connect
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-700"
        >
          Whether you want to talk tech, design, or collaborate, feel free to reach out. I'm always open to new opportunities!
        </motion.p>

        {/* Contact Details Section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-xl rounded-3xl p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-semibold mb-4">Email</h3>
            <div className="flex items-center justify-start gap-4">
              <FaEnvelope className="text-3xl text-blue-600" />
              <a
                href="mailto:pelumiatoyebi06@gmail.com"
                className="text-lg text-gray-800 hover:underline"
              >
                pelumiatoyebi06@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-xl rounded-3xl p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-semibold mb-4">GitHub</h3>
            <div className="flex items-center justify-start gap-4">
              <FaGithub className="text-3xl text-gray-900" />
              <a
                href="https://github.com/heispelumi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-800 hover:underline"
              >
                github.com/heispelumi
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-xl rounded-3xl p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-semibold mb-4">Instagram</h3>
            <div className="flex items-center justify-start gap-4">
              <RiInstagramFill className="text-3xl text-black" />
              <a
                href="https://www.instagram.com/heisatoyebi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-800 hover:underline"
              >
                @heisatoyebi
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
