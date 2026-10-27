import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-lg px-4 py-2 font-medium transition ${
      isActive
        ? "bg-orange-50 text-orange-700"
        : "text-stone-700 hover:bg-orange-50 hover:text-orange-700"
    }`;

  return (
    <header className="relative z-20 border-b border-amber-100 bg-white shadow-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-amber-950 sm:text-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=96&h=96&q=80"
            alt=""
            className="h-9 w-9 shrink-0 rounded-full object-cover"
          />
          Yem&apos;s <span className="text-orange-600">Pork Delicacy</span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-amber-950 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-orange-500 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div
          id="primary-navigation"
          className={`${menuOpen ? "block" : "hidden"} absolute left-0 right-0 top-full border-t border-amber-100 bg-white px-4 py-4 shadow-md md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/order"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `mt-2 rounded-full px-5 py-2.5 text-center font-semibold text-white transition hover:bg-orange-700 md:ml-2 md:mt-0 ${
                  isActive ? "bg-orange-800" : "bg-orange-600"
                }`
              }
            >
              Order
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
