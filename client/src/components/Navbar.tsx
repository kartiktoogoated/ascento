import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/courses', label: 'Our Courses' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact Us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50">

      {/* --- MAIN NAVBAR --- */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo / Brand */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <Link to="/" className="flex items-center space-x-2">
                <GraduationCap
                  className={`h-10 w-10 ${
                    isScrolled ? 'text-blue-600' : 'text-gray-800'
                  }`}
                />
                <span
                  className={`text-2xl font-bold ${
                    isScrolled ? 'text-gray-800' : 'text-gray-800'
                  }`}
                >
                  AscentoAbacus
                </span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`${
                      location.pathname === item.path
                        ? isScrolled
                          ? 'text-blue-600'
                          : 'text-gray-800 font-bold'
                        : isScrolled
                          ? 'text-gray-600 hover:text-blue-600'
                          : 'text-gray-700 hover:text-gray-900'
                    } transition-colors duration-200 text-lg`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="tel:+911234567890"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`flex items-center space-x-2 ${
                  isScrolled
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-blue-600'
                } px-4 py-2 rounded-full hover:scale-105 transition-transform`}
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${
                  isScrolled ? 'text-gray-600' : 'text-gray-800'
                } hover:text-blue-600`}
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden bg-white rounded-b-2xl shadow-xl"
              >
                <div className="px-4 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`${
                        location.pathname === item.path
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      } block px-3 py-2 rounded-md text-base font-medium`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a
                    href="tel:+911234567890"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 rounded-md"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
            {/* --- TOP BANNER --- */}
            <div className="bg-yellow-100 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2">
          <Bell className="h-5 w-5 text-yellow-600 animate-bounce" />
          <p className="text-yellow-800 font-medium">
            New Batch Starting Soon! Limited Seats Available. Enroll Now for Early Bird Discount!
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
