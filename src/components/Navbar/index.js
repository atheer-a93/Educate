import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { navTabs } from "../../data";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "../Logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const container = useRef(null);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Handle Navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setVisible(currentScrollPosition > 145);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation for Navbar visibility
  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        ".navbar",
        { y: -250 },
        { y: 0, top: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [visible]);

  // GSAP initial animation
  useGSAP(() => {
    const timeline = gsap.timeline({ stagger: 0.1 });
    timeline
      .from(".logo", { opacity: 0, x: -100, delay: 0.1 })
      .from(".tab", { opacity: 0, stagger: 0.1 })
      .from(".buttons", { opacity: 0, x: 100 });
  }, { scope: container });

  return (
    <nav className={`navbar ${visible ? "visible" : ""}`} ref={container}>
      {/* Sidebar overlay */}
      {open && <div className="sidebar__overlay" onClick={() => setOpen(false)}></div>}

      {/* Logo */}
      <Logo />

      {/* Navigation Tabs */}
      <div className={`box nav__tabs ${open ? "open" : ""}`}>
        <div
          className="icon__container cancel__btn"
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </div>
        {navTabs.map((tab, index) => (
          <Link
            to={tab.id}
            className="tab"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            onClick={() => setOpen(false)}
            key={index}
          >
            <p>{tab.name}</p>
          </Link>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="box buttons">
        <Link to="contact" className="btn contact__btn">
          Contact us
        </Link>
        <div
          className="icon__container menu__btn"
          onClick={() => setOpen(!open)}
        >
          <RiMenu3Fill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;