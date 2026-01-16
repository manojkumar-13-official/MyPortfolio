import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      id: 1,
      icon: FaGithub,
      url: "https://github.com/manojkumar-13-official",
      label: "GitHub",
    },
    {
      id: 2,
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/manojkumar-a-0b05382b0/",
      label: "LinkedIn",
    },
    {
      id: 3,
      icon: FaTwitter,
      url: "https://twitter.com",
      label: "Twitter",
    },
    {
      id: 4,
      icon: FaEnvelope,
      url: "/contact",
      label: "Email",
    },
  ];

  const quickLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Projects", path: "/project" },
    { id: 4, name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-950 border-t-2 relative border-purple-600 text-gray-300 mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              MANOJKUMAR
            </h2>
            <p className="text-purple-400 font-semibold mb-4">
              Full Stack Developer
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Building beautiful and functional web applications with modern
              technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  Full Stack Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Get In Touch</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-3">
              Let's work together on your next project
            </p>
            <a
              href="/contact"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8 sm:my-12"></div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Social Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              const isInternal = social.url.startsWith("/");
              return isInternal ? (
                <a
                  key={social.id}
                  href={social.url}
                  title={social.label}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-full transition-all duration-300"
                >
                  <Icon className="text-lg sm:text-xl" />
                </a>
              ) : (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-full transition-all duration-300"
                >
                  <Icon className="text-lg sm:text-xl" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center sm:text-left text-xs sm:text-sm text-gray-500">
            <p>&copy; {currentYear} MANOJKUMAR. All rights reserved.</p>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-full transition-all duration-300"
            title="Scroll to top"
          >
            <FiArrowUp className="text-lg sm:text-xl" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
