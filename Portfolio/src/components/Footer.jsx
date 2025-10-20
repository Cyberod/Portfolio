
import { NavLink } from "react-router-dom";

export default function Footer() {




  const getNavLinkClass = ({ isActive }) => `
    px-3 py-2 text-sm lg:text-base font-medium rounded-full border border-primary-light
    ${isActive 
      ? "bg-primary-light text-primary-dark"
      : "text-primary-light hover:bg-primary-light hover:text-primary-dark transition-colors ease-in duration-400"
    }
  `;
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const socialIcons = [
    { name: "Instagram", src: "/Insta.svg" },
    { name: "Facebook", src: "/Facebook.svg" },
    { name: "Github", src: "/Github.svg" },
    { name: "LinkedIn", src: "/Linkedin.svg" },
  ];

  return (
    <footer className="w-full text-primary-light px-4 lg:px-8 xl:px-10 border-opacity-10">
      {/* Main Footer Content */}
      <div className="w-full px-4 lg:px-10 py-8 lg:py-12">
        {/* Mobile & Tablet Layout (sm to lg) */}
        <div className="flex flex-col items-center gap-6 lg:hidden">
          {/* Name */}
          <span className="text-[25px] font-bold font-inter">JONATHAN</span>

          {/* Navigation Links - Vertical Stack */}
          <div className="flex flex-col items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={getNavLinkClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Social Media Icons - Horizontal */}
          <div className="flex gap-4 items-center">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href="#"
                className="hover:opacity-70 transition-opacity duration-300"
                aria-label={icon.name}
              >
                <img
                  src={icon.src}
                  alt={icon.name}
                  className="w-6 h-6"
                />
              </a>
            ))}

          </div>
          {/* Divider Line */}
          <div className="footer-divider"></div>

          {/* Copyright & Created By - Justified */}
          <div className="flex flex-col items-center">
            <span className="text-sm">Created by Jonathan</span>
            <span className="text-sm">© 2025 IFEANYI JONATHAN. All rights reserved.</span>
          </div>
        </div>

        {/* Large Screen Layout (lg) */}
        <div className="hidden lg:flex lg:flex-col lg:gap-6 xl:hidden">
          {/* Name, Links, and Icons - Horizontal */}
          <div className="flex items-center flex-col justify-center gap-6 ">
            {/* Name */}
            <span className="text-[25px] font-bold font-inter whitespace-nowrap">JONATHAN</span>

            {/* Navigation Links - Horizontal */}
            <div className="flex gap-0  items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={getNavLinkClass}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Social Media Icons - Horizontal */}
            <div className="flex gap-4 items-center">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href="#"
                  className="hover:opacity-70 transition-opacity duration-300"
                  aria-label={icon.name}
                >
                  <img
                    src={icon.src}
                    alt={icon.name}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Divider Line */}
          <div className="footer-divider"></div>

          {/* Copyright & Created By - Justified */}
          <div className="flex justify-between items-center">
            <span className="text-sm">Created by Jonathan</span>
            <span className="text-sm">© 2025 IFEANYI JONATHAN. All rights reserved.</span>
          </div>
        </div>

        {/* Extra Large Screen Layout (xl and above) */}
        <div className="hidden xl:flex xl:flex-col xl:gap-6">
          {/* Name, Links, and Icons - All Horizontal */}
          <div className="flex items-center justify-between gap-8">
            {/* Name */}
            <span className="text-[25px] font-bold font-inter whitespace-nowrap">JONATHAN</span>

            {/* Navigation Links - Horizontal */}
            <div className="flex gap-0 items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={getNavLinkClass}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Social Media Icons - Horizontal */}
            <div className="flex gap-4 items-center">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href="#"
                  className="hover:opacity-70 transition-opacity duration-300"
                  aria-label={icon.name}
                >
                  <img
                    src={icon.src}
                    alt={icon.name}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Divider Line */}
          <div className="footer-divider"></div>

          {/* Copyright & Created By - Justified */}
          <div className="flex justify-between items-center">
            <span className="text-[16px]">Created by Jonathan</span>
            <span className="text-[16px]">© 2025 IFEANYI JONATHAN. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
