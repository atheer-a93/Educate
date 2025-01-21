import React,{useRef} from 'react';
import "./Services.css"
import { services } from '../../data';
import ServicesCard from './ServicesCard';
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


const Services = () => {
  const container = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
      },
    });
  
    timeline
      .from([".title", ".sub__title"], {
        y: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      })
      .fromTo(
        ".service__card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.2,
        }
      );
  }, { scope: container });

  return (
    <section id='services' ref={container}>
      <div className="container">
        <div className="services__top">
          <h1 className="title">Our <span className="g-text">Services</span></h1>
          <h3 className="sub__title">We specialize in strategic construction innovation.</h3>
        </div>
        <div className="services__container">
          {
            services.map((services,index)=>(
              <ServicesCard
              icon={services.icon}
              name={services.name}
              description={services.description}
              key={index}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Services;