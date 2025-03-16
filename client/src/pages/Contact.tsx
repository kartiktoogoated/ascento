import  { useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Phone, Mail, MapPin, Clock, Send, ChevronDown } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    details: ["+91 123 456 7890", "+91 098 765 4321"]
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    details: ["info@ascentoabacus.com", "admissions@ascentoabacus.com"]
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Address",
    details: ["123 Education Street", "City Name, State 123456"]
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Working Hours",
    details: ["Monday - Saturday", "9:00 AM - 6:00 PM"]
  }
];

// Map zoom control component
const MapControl = () => {
  const map = useMap();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      map.setZoom(16);
      map.setView([28.6139, 77.2090], 16);
    } else {
      map.setZoom(13);
      map.setView([28.6139, 77.2090], 13);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-4 right-4 z-[1000] bg-white rounded-lg shadow-lg px-4 py-2 flex items-center space-x-2 hover:bg-gray-50 transition-colors"
    >
      <span>{isExpanded ? "Zoom Out" : "Zoom In"}</span>
      <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
    </button>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any queries about our programs or admissions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="block w-full px-4 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-focus:-top-7 peer-focus:left-0 peer-focus:text-blue-600 -top-7 text-sm font-medium"
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="block w-full px-4 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-focus:-top-7 peer-focus:left-0 peer-focus:text-blue-600 -top-7 text-sm font-medium"
                  >
                    Email Address
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="tel"
                    id="phone"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="block w-full px-4 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-focus:-top-7 peer-focus:left-0 peer-focus:text-blue-600 -top-7 text-sm font-medium"
                  >
                    Phone Number
                  </label>
                </div>
                <div className="relative group">
                  <input
                    type="text"
                    id="subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="block w-full px-4 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-focus:-top-7 peer-focus:left-0 peer-focus:text-blue-600 -top-7 text-sm font-medium"
                  >
                    Subject
                  </label>
                </div>
              </div>
              <div className="relative group">
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="block w-full px-4 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors peer"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-focus:-top-7 peer-focus:left-0 peer-focus:text-blue-600 -top-7 text-sm font-medium"
                >
                  Message
                </label>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="text-blue-600 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden h-[400px] relative"
            >
              <MapContainer
                center={[28.6139, 77.2090]}
                zoom={13}
                className="h-full w-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[28.6139, 77.2090]}>
                  <Popup>
                    <div className="p-2">
                      <h3 className="font-bold text-lg mb-2">AscentoAbacus</h3>
                      <p className="text-gray-600">123 Education Street<br />Delhi NCR</p>
                    </div>
                  </Popup>
                </Marker>
                <MapControl />
              </MapContainer>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;