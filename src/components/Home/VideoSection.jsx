import React, { useState } from 'react';
import Container from '../Container/Container';
import Video from '/src/assets/video/Render Comp.mp4';
import { motion } from 'framer-motion';

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-[linear-gradient(90deg,#18191B_50%,#0E0F11_50%)] py-16">
      <Container>
        <motion.div
          className="relative mx-auto overflow-hidden rounded-lg shadow-lg"
          initial={{ width: '50%' }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <video
            className="w-full h-auto cursor-pointer"
            src={Video}
            muted
            loop
            autoPlay
            playsInline
            onClick={handleVideoClick}
          />
          <button
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
            onClick={handleVideoClick}
          >
            <svg
              className="w-16 h-16 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </motion.div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl">
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <video
                className="w-full h-auto"
                src={Video}
                controls
                autoPlay
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default VideoSection;