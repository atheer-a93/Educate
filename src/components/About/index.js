import React, { useEffect, useRef } from 'react';
import "./About.css";
import { about_image, building_1, building_2, building_3 } from '../../assets';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        delay: 0.01, 
        scrollTrigger: {
          trigger: containerRef.current,
          start: "20% bottom",
          end: "bottom top",
        },
      });

      timeline
        .from(".company__photo", { x: -50, opacity: 0, duration: 0.4 })
        .from(".title", { y: -50, opacity: 0, duration: 0.4 })
        .from(".sub__title", { y: -50, opacity: 0, duration: 0.4 })
        .from(".box", { x: 50, opacity: 0, stagger: 0.2, duration: 0.4 })
        .from(".description", { y: 50, opacity: 0, duration: 0.4 })
        .from(".group", { y: 50, opacity: 0, duration: 0.4 })
        .from(".buttons__container", { y: 50, opacity: 0, duration: 0.4 });
    }, containerRef);

    return () => {
      ctx.revert(); // Cleanup on component unmount
    };
  }, []);

  return (
    <section id="about" ref={containerRef}>
      <div className="container">
        <div className="column company__photo">
          <img src={about_image} alt="Fitter" />
        </div>
        <div className="column">
          <h1 className="title">
            <span className="g-text">About US</span>
          </h1>
          <h3 className="sub__title">
          An Iraqi application that allows you to know all the grades of daily exams and tests, continuous performance, and attendance of lessons for your children.
          </h3>
          <div className="company__media__container">
            <div className="box">
              <img src={building_1} alt="" />
            </div>
            <div className="box">
              <img src={building_2} alt="" />
            </div>
            <div className="box">
              <img src={building_3} alt="" />
            </div>
          </div>
          <p className="text__muted description">
            Fast registration.<br />
            Easy to use.<br />
            24/7 support.<br />
            Low fees.
          </p>
          <div className="group">
            <div className="row">
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text__muted">Consultation</p>
                <h3>Free</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text__muted">Excellence</p>
                <h3>Excellence</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text__muted">Customer</p>
                <h3>Support</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text__muted">Quality</p>
                <h3>Service</h3>
              </div>
            </div>
          </div>
          <div className="buttons__container">
            <Link to="project" smooth={true} className="btn">
              Explore
            </Link>
            <Link to="contact" smooth={true} className="btn btn__primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;