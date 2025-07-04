"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../assets/images/netzet-logo.png";

import Banner from "../banner/Banner";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const windowTop = window.scrollY;
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;

      if (windowTop >= headerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
        setShowHeader(false);
      }

      if (isSticky) {
        if (windowTop < lastScrollTop) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      }

      setLastScrollTop(windowTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop, isSticky]);

  const handleToggleMenu = () => {
    setIsNavOpen(!isNavOpen);
    setOpenMenuIndex(null);
  };

  const handleSubMenuClick = (index, e) => {
    e.preventDefault();
    e.stopPropagation();

    if (openMenuIndex === index) {
      setOpenMenuIndex(null);
    } else {
      setOpenMenuIndex(index);
    }
  };

  return (
    <section className="header--wrapper floating--header">
      {/* "floating--header" (this class is for floting header) */}
      <header
        className={`header 
          ${isSticky ? "header-sticky" : ""} 
          ${showHeader ? "header-show" : ""} 
          ${isNavOpen ? "nav-open" : ""}`}
      >
        <div className="holder">
          <div className="header__logo">
            <Link href="/">
              <h1 className="site--logo" title="Fame Tonic">
                <Image src={Logo} alt="netzet-logo" />
              </h1>
            </Link>
          </div>

          <div className="header__menu">
            <button className="toggle-menu" onClick={handleToggleMenu}>
              <i></i>
              <i></i>
              <i></i>
            </button>
            <ul
              className={`main--menu ${
                openMenuIndex !== null ? "sub-menu-open" : ""
              }`}
            >
              <li>
                <Link
                  href="/about"
                  className={pathname === "/about" ? "active" : ""}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={pathname === "/contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-wrapper">
          <div className="holder">
            <div className="header__content">
              <div className="header__logo">
                <Link href="/">
                  <h1 className="site--logo" title="Fame Tonic">
                    <Image src={Logo} alt="netzet-logo" />
                  </h1>
                </Link>
              </div>

              <button className="toggle-menu" onClick={handleToggleMenu}>
                <i></i>
                <i></i>
                <i></i>
              </button>
            </div>

            <nav className="main--nav-wrapper">
              <ul className="main--nav">
                <li>
                  <Link
                    href="/about"
                    className={pathname === "/about" ? "active" : ""}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={pathname === "/contact" ? "active" : ""}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <Banner />
    </section>
  );
};

export default Header;
