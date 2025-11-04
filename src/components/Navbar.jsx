import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/hall-of-honour', label: 'Hall of Honour' },
  { to: '/publications', label: 'Publications' },
  { to: '/join', label: 'Join' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white tracking-tight"
        >
          PhDians
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm font-medium transition-all duration-300 after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all after:duration-300
                ${
                  location.pathname === link.to
                    ? 'text-cyan-400 after:w-full'
                    : 'text-gray-300 hover:text-cyan-300 hover:after:w-full'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-300 hover:text-cyan-400 transition"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-800/90 backdrop-blur-sm border-t border-gray-700">
          <div className="px-6 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 px-2 text-base font-medium rounded-lg transition-all duration-200
                  ${
                    location.pathname === link.to
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-300 hover:bg-gray-700/50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}