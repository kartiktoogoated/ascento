import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
    caption: "Students learning abacus"
  },
  {
    url: "https://images.unsplash.com/photo-1444401771004-07f89b5d3c3f?auto=format&fit=crop&q=80",
    caption: "Mid brain activation session"
  },
  {
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
    caption: "Playschool activities"
  },
  {
    url: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?auto=format&fit=crop&q=80",
    caption: "Art and craft session"
  },
  {
    url: "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?auto=format&fit=crop&q=80",
    caption: "Music class"
  },
  {
    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80",
    caption: "Library time"
  },
  {
    url: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80",
    caption: "Outdoor activities"
  },
  {
    url: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80",
    caption: "Annual day celebration"
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Glimpses of joyful learning and memorable moments at AscentoAbacus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-md aspect-w-4 aspect-h-3"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 text-sm font-medium">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;