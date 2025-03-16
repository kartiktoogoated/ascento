import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-6 w-6" />,
    value: "1000+",
    label: "Students Trained"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    value: "10+",
    label: "Years Experience"
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: "50+",
    label: "Expert Teachers"
  },
  {
    icon: <Target className="h-6 w-6" />,
    value: "100%",
    label: "Success Rate"
  }
];

const About = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About AscentoAbacus</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering young minds through innovative learning methods and comprehensive development programs.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-blue-600 mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide exceptional educational experiences that nurture cognitive development, 
              creativity, and analytical thinking in children through our specialized programs in 
              abacus training, mid-brain activation, and early childhood education.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the leading institution in holistic child development, recognized for our 
              innovative teaching methods and commitment to nurturing the next generation of bright, 
              confident, and capable individuals.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
              <p className="text-gray-600">Head of Abacus Training</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">David Chen</h3>
              <p className="text-gray-600">Mid Brain Activation Expert</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">Emily Parker</h3>
              <p className="text-gray-600">Playschool Coordinator</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;