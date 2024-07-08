import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r">
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10 mt-28">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="sm:w-1/2 p-5 ml-5"
        >
          <div className="text mt-28 ml-0">
           
            <h2 className="my-5 font-bold text-3xl sm:text-4xl text-white">
               About <span className="text-orange-500">Us</span>
               
            </h2>
            <p className="text-gray-300">
              Welcome to Engineering-Adda, a platform dedicated to empowering
              B.Tech students on their academic and professional journey. Our
              mission is to provide a comprehensive space where students can
              share knowledge, connect with peers, and access valuable resources
              to excel in their studies and career.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          
          >
            <div>
              <h2 className="my-5 font-bold text-3xl sm:text-4xl text-white">
                Our <span className="text-orange-500">Vision</span>
              </h2>
              <p className="text-gray-300">
                At Engineering-Adda, we envision a future where every B.Tech
                student has the support and resources they need to succeed.
                Whether it's finding study materials, staying updated on job and
                internship opportunities, or connecting with like-minded
                individuals, our platform strives to be the go-to destination
                for all your academic and professional needs.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
