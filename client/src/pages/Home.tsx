import React from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { 
  Brain, 
  Calculator, 
  GraduationCap, 
  Users, 
  Star, 
  Award, 
  Heart, 
  Sparkles, 
  Music, 
  Palette, 
  BookOpen} from 'lucide-react';
import 'leaflet/dist/leaflet.css';

const slideImages = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1444401771004-07f89b5d3c3f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
];

// Here is the features array you defined:
const features = [
  {
    icon: <Calculator className="h-8 w-8" />,
    title: "Abacus Training",
    description: "Master mental arithmetic through traditional abacus techniques"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Mid Brain Activation",
    description: "Enhance cognitive abilities and unlock mental potential"
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Playschool",
    description: "Early childhood education in a nurturing environment"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Multiple Activities",
    description: "Diverse range of activities for holistic development"
  }
];

const achievements = [
  { number: "5000+", text: "Happy Students" },
  { number: "98%", text: "Parent Satisfaction" },
  { number: "15+", text: "Years of Excellence" },
  { number: "50+", text: "Expert Teachers" }
];

const activities = [
  {
    icon: <Music className="h-12 w-12 text-purple-500" />,
    title: "Music & Dance",
    description: "Weekly music and dance sessions to develop rhythm and coordination"
  },
  {
    icon: <Palette className="h-12 w-12 text-pink-500" />,
    title: "Art & Craft",
    description: "Creative workshops to nurture artistic expression"
  },
  {
    icon: <BookOpen className="h-12 w-12 text-blue-500" />,
    title: "Storytelling",
    description: "Interactive storytelling sessions for language development"
  },
  {
    icon: <Heart className="h-12 w-12 text-red-500" />,
    title: "Yoga & Exercise",
    description: "Age-appropriate physical activities for healthy development"
  },
  {
    icon: <Sparkles className="h-12 w-12 text-yellow-500" />,
    title: "STEM Activities",
    description: "Hands-on learning experiences in science and mathematics"
  },
  {
    icon: <Star className="h-12 w-12 text-green-500" />,
    title: "Personality Development",
    description: "Activities focused on building confidence and social skills"
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">

      {/* Hero Section with Slideshow */}
      <div className="relative h-[600px] overflow-hidden">
        {slideImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                  >
                    Welcome to AscentoAbacus
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-xl md:text-2xl"
                  >
                    Delhi's Premier Center for Child Development
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Achievement Counter Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg">{achievement.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose AscentoAbacus?</h2>
            <p className="text-xl text-gray-600">The Best Choice for Your Child's Development in Delhi NCR</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500"
            >
              <Award className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Award-Winning Methodology</h3>
              <p className="text-gray-600">Recognized for our innovative teaching approaches and exceptional results.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500"
            >
              <Users className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Highly qualified teachers with specialized training in early childhood education.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-pink-500"
            >
              <Heart className="h-12 w-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nurturing Environment</h3>
              <p className="text-gray-600">Safe, engaging, and stimulating atmosphere for optimal learning.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- NEW FEATURES SECTION --- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Features</h2>
            <p className="text-xl text-gray-600">Explore key offerings that make us stand out</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Engaging Activities</h2>
            <p className="text-xl text-gray-600">Discover our wide range of activities designed for holistic development</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{activity.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">What Parents Say</h2>
            <p className="text-xl text-white opacity-90">Testimonials from our happy parents</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Amazing improvement in my child's mathematical abilities. The teachers are very supportive and the environment is perfect for learning."
                </p>
                <div className="font-semibold text-gray-900">- Parent of Class II Student</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Query Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Have questions? We'd love to hear from you!</p>
          </motion.div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <MapContainer
          center={[28.6139, 77.2090]} // Delhi coordinates
          zoom={13}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[28.6139, 77.2090]}>
            <Popup>
              AscentoAbacus <br /> Delhi NCR
            </Popup>
          </Marker>
        </MapContainer>
      </section>
    </div>
  );
};

export default Home;
