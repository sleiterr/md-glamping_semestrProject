import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { logo } from "../../assets/iconExports/index";

// import { Link } from "react-scroll";
import clsx from "clsx";
import BurgerMenu from "./Burger";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleLinkClick = () => setMenuOpen(false);

  const isProjectDetail = location.pathname
    .toLowerCase()
    .startsWith("/project-detail");
  console.log(
    "isProjectDetail",
    isProjectDetail,
    "pathname:",
    location.pathname
  );

  useEffect(() => {
    if (location.pathname !== "/") {
      const handleScroll = () => setScrolled(window.scrollY > 0);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(true);
    }
  }, [location.pathname]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = ""; // Clean up on unmount
    };
  }, [menuOpen]);

  // Log current location and isHome state
  useEffect(() => {
    console.log("location:", location.pathname, "isHome:", isHome);
  }, [location.pathname, isHome]);

  useEffect(() => {
    console.log("scrolled changed ->", scrolled);
  }, [scrolled]);

  // const defaultClasses =
  //   "flex items-center justify-between inset-0 px-[1rem] md:px-[1.5rem]";

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 w-full z-999",
          "flex justify-between items-center",
          "px-6",
          "bg-transparent"
        )}
      >
        {/* Overlay */}
        <div
          className={clsx(
            "fixed inset-0 backdrop-blur-sm bg-white/10  transition-opacity duration-300 h-full w-full z-666",
            menuOpen ? "opacity-300" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setMenuOpen(false)}
        ></div>
        {!isHome && (
          <div className="relative py-2 md:py-4 shrink-0 cursor-pointer">
            <Link to="/">
              <img src={logo} alt="logo" className="w-14 h-14" />
            </Link>
          </div>
        )}
        <div
          className={clsx(
            "fixed top-0 bottom-0 right-0 z-999",
            "w-full h-auto md:w-200 md:h-full",
            "bg-menu-bg backdrop-blur-sm",
            "flex flex-col justify-start items-start",
            "pt-4 px-4 md:pt-8 md:px-8 gap-10",
            "transition-all duration-300",
            {
              "opacity-0 -translate-y-5 pointer-events-none": !menuOpen,
              "opacity-100 translate-y-0 pointer-events-auto": menuOpen,
            }
          )}
          onClick={() => setMenuOpen(false)}
        >
          <nav className="self-center m-auto">
            <ul className="flex flex-col items-start gap-6">
              <li>
                <Link
                  to="/"
                  smooth={true.toString()}
                  duration={800}
                  className={clsx(
                    "relativeking-wide cursor-pointer",
                    "font-zen font-light text-secondary text-4xl tracking-wide",
                    "hover:font-bold transition-all duration-300"
                  )}
                  onClick={handleLinkClick}
                >
                  Forside
                </Link>
              </li>
              <li>
                <Link
                  to="/stay"
                  smooth={true.toString()}
                  duration={800}
                  offset={-100}
                  className={clsx(
                    "relative cursor-pointer",
                    "font-zen font-light text-secondary text-4xl tracking-wide",
                    "hover:font-bold transition-all duration-300"
                  )}
                  onClick={handleLinkClick}
                >
                  Ophold
                </Link>
              </li>
              <li className="hidden md:block">
                <Link
                  to="/contact-form"
                  smooth={true.toString()}
                  duration={800}
                  offset={-100}
                  className={clsx(
                    "relative cursor-pointer",
                    "font-zen font-light text-secondary text-4xl tracking-wide",
                    "hover:font-bold transition-all duration-300"
                  )}
                  onClick={handleLinkClick}
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  smooth={true.toString()}
                  duration={800}
                  offset={-100}
                  className={clsx(
                    "relative cursor-pointer",
                    "font-zen font-light text-secondary text-4xl tracking-wide",
                    "hover:font-bold transition-all duration-300"
                  )}
                  onClick={handleLinkClick}
                >
                  Aktiviteter
                </Link>
              </li>
              <li>
                <Link
                  to="/my-list"
                  smooth={true.toString()}
                  duration={800}
                  offset={-100}
                  className={clsx(
                    "relative cursor-pointer ",
                    "font-zen font-light text-secondary text-4xl tracking-wide",
                    "hover:font-bold transition-all duration-300"
                  )}
                  onClick={handleLinkClick}
                >
                  Min liste
                </Link>
              </li>
              <li>
                <Link
                  to="/login-page"
                  smooth={true.toString()}
                  duration={800}
                  offset={-100}
                  className={clsx(
                    "relative cursor-pointer ",
                    "font-zen font-light text-secondary text-4xl tracking-wide",
                    "hover:font-bold transition-all duration-300"
                  )}
                  onClick={handleLinkClick}
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="fixed z-1000 right-6 top-2 md:top-4 bg-menu-bg px-4 py-4 rounded-br-3xl rounded-tl-3xl">
          <BurgerMenu
            scrolled={scrolled}
            isOpen={menuOpen}
            toggleMenu={() => setMenuOpen((prev) => !prev)}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
