import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

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
      <header className={clsx("inset-x-0 top-0 w-full transition-all z-[999]")}>
        {/* Overlay */}
        <div
          className={clsx(
            "fixed inset-0 backdrop-blur-sm bg-white/10  transition-opacity duration-300 h-full w-full z-[666]",
            menuOpen ? "opacity-300" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setMenuOpen(false)}
        ></div>
        {/* <nav style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}>
          <div className="relative py-[0.5rem] md:py-[1rem] shrink-0 cursor-pointer">
            <Link to="/" smooth={true} duration={800}>
              {!scrolled ? (
                <img src={whiteLogo} alt="logo" className="w-[8rem] h-auto" />
              ) : (
                <img src={blackLogo} alt="logo" className="w-[8rem] h-auto" />
              )}
            </Link>

            <span
              className="absolute top-[15%] right-[-22px] h-[70%] w-[1px]"
              style={{
                backgroundColor: scrolled
                  ? "rgba(62, 62, 62,0.60)"
                  : "rgba(255, 255, 255,0.2)",
              }}
            ></span>
          </div>
        </nav> */}
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
                  to="#"
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
                  to="#"
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
                  to="#"
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
                  to="#"
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
                  to="/backoffice"
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
                  Backoffice
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="fixed z-[1000] right-6 top-5 md:top-8 bg-menu-bg px-4 py-4 rounded-br-3xl rounded-tl-3xl">
        <BurgerMenu
          scrolled={scrolled}
          isOpen={menuOpen}
          toggleMenu={() => setMenuOpen((prev) => !prev)}
        />
      </div>
    </>
  );
};

export default Header;
