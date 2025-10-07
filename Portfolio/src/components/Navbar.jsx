import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) => `
    px-3 py-2 text-sm lg:text-base font-medium rounded-full border border-primary-light
    ${isActive 
      ? "bg-primary-light text-primary-dark"
      : "text-primary-light hover:bg-primary-light hover:text-primary-dark transition-colors duration-300"
    }
  `;

  return (
    <nav className={`
      bg-background-secondary 
      fixed w-full z-50 mt-6 
      border-none ]
      ${isOpen ? 'rounded-4xl navbox-open transition-all duration-100 ease-in-out' : 'rounded-full'} navbox 
    `}>
      <div className="maxw-full mx-auto px-2 lg:px-5 ">
        <div className="flex flex-wrap items-center justify-between p-2.5">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-primary-light text-xl font-bold text-center p-1">
              JONATHAN
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "navbox-open" : "hidden"
            } w-full lg:flex lg:w-auto lg:items-center`}
          >
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-0 items-center pt-2 pb-5 lg:py-1">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={getNavLinkClass}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}