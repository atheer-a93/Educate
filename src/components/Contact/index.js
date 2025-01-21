import React,{useRef} from 'react';
import "./Contact.css"
import { contacts } from '../../data';
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


const Contact = () => {

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
        stagger: 0.1,
      })
      .fromTo(
        ".option",
        { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.2,
      }
      )
      .fromTo(
        ".contact__form",
        { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.2,
      }
      );
  }, { scope: container });

  return (
    <section id='contact' ref={container}>
      <div className="container">
        <div className="contact__form">
          <div className="contact__form__top">
            <h1 className="title">
              <span className="g-text">Contact US</span>
            </h1>
            <p className="text__muted">
            We build with precision and passion, creating structures that stand 
            the test of time. It's as straightforward as that!
            </p>
          </div>
          <div className="contact__form__middle">
            <div className="row">
              <input type='text' placeholder='First name' name='firstname' className='control' />
              <input type='text' placeholder='Last name' name='lastname' className='control' />
            </div>
            <div className="row">
              <input type='email' placeholder='Email address' name='email' className='control' />
              <input type='tel' placeholder='Phone number' name='phone' className='control' />
            </div>
            <textarea name='message' cols={30} rows={10} placeholder='Message' className='control'></textarea>
          </div>
          <div className="contact__form__bottom">
            <button className="btn btn__primary">Send Now</button>
          </div>
        </div>
        <div className="contact__options">
          {
            contacts.map((contact,index) =>(
              <div className="option" key={index}>
                <div className="icon__container">
                  {contact.icon}
                </div>
                <h3 className="name">{contact.name}</h3>
                <h4 className="text__muted">{contact.value}</h4>
                <div>
                
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Contact;