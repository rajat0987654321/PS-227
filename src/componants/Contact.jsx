import React from "react";
import GradientText from "./GradientText";
const Contact = () => {
  return (
    <section id="contact" className=" bg-[#0b1220] py-16 px-4">
      <h2 className="text-4xl font-bold text-white mb-2 text-center">
        <GradientText
                                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                  animationSpeed={1.5}
                                  showBorder={false}
                                  className="custom-class"
                                >
                                  Contact Us
                         </GradientText>
                         </h2>
      <p className=" text-gray-400 mb-12 text-center max-w-2xl mx-auto">
        Get in touch with our team for demonstrations, partnerships, or support
      </p>

      <div className="flex flex-row md:flex-row gap-16 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="flex-1 bg-[#1e1e1e]/80 rounded-xl p-8 shadow-xl">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-200 mb-1">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                className="px-4 py-2 rounded-md bg-[#252525] border border-white/10 text-white focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="organization" className="text-gray-200 mb-1">Organization</label>
              <input
                type="text"
                id="organization"
                placeholder="Your company or institution"
                className="px-4 py-2 rounded-md bg-[#252525] border border-white/10 text-white focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-200 mb-1">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md bg-[#252525] border border-white/10 text-white focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-200 mb-1">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="How can we help you?"
                className="px-4 py-3 rounded-md bg-[#252525] border border-white/10 text-white focus:outline-none focus:border-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-[#FF2F03] text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-yellow-700 flex items-center justify-center text-white">✉</div>
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <p className="text-gray-300">info@miningguardian.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-yellow-700 flex items-center justify-center text-white">📞</div>
              <div>
                <h4 className="text-white font-semibold">Phone</h4>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-yellow-700 flex items-center justify-center text-white">📍</div>
              <div>
                <h4 className="text-white font-semibold">Location</h4>
                <p className="text-gray-300">Global Monitoring Center</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 bg-[#252525] rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition transform hover:-translate-y-1">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-[#252525] rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition transform hover:-translate-y-1">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-[#252525] rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition transform hover:-translate-y-1">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-[#252525] rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition transform hover:-translate-y-1">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Contact Map */}
        <div className="flex-1 bg-[#1e1e1e] rounded-xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
            alt="World Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
