import { motion } from 'framer-motion';
import { Calculator, Brain, GraduationCap, Music, Palette, Book } from 'lucide-react';

const courses = [
  {
    icon: <Calculator className="h-8 w-8" />,
    title: "Abacus Training",
    description: "Master mental arithmetic through traditional abacus techniques. Suitable for ages 5-15.",
    levels: ["Basic", "Intermediate", "Advanced"],
    duration: "3 months per level"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Mid Brain Activation",
    description: "Enhance cognitive abilities and unlock mental potential through specialized exercises.",
    levels: ["Foundation", "Development", "Mastery"],
    duration: "6 months program"
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Playschool Program",
    description: "Early childhood education focusing on holistic development. Ages 2-4 years.",
    levels: ["Toddler", "Nursery", "Kindergarten"],
    duration: "Year-round program"
  },
  {
    icon: <Music className="h-8 w-8" />,
    title: "Music & Movement",
    description: "Develop rhythm, coordination, and musical appreciation through fun activities.",
    levels: ["Beginners", "Intermediate"],
    duration: "3 months per level"
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Art & Craft",
    description: "Express creativity through various art forms and hands-on craft projects.",
    levels: ["Creative Explorer", "Young Artist"],
    duration: "4 months per level"
  },
  {
    icon: <Book className="h-8 w-8" />,
    title: "Language Development",
    description: "Build strong communication skills through storytelling and interactive sessions.",
    levels: ["Basic Communication", "Advanced Expression"],
    duration: "6 months program"
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to nurture young minds and develop essential skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {course.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {course.description}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="mb-2">
                    <h4 className="font-semibold text-gray-900">Levels:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {course.levels.map((level, idx) => (
                        <li key={idx}>{level}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Duration:</h4>
                    <p className="text-gray-600">{course.duration}</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;