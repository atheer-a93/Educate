import React, {useState, useEffect, useRef} from 'react';
import "./Achievement.css"
import { FaAward, FaDiagramProject, FaUsersLine } from 'react-icons/fa6';
import { GiTeamIdea } from 'react-icons/gi';
import Odometer from 'react-odometerjs';
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"

const Achievement = () => {
    const container = useRef(null);
    const [clients,setClients] = useState(0);
    const [Projects,setCProjects] = useState(0);
    const [Teams,setCTeams] = useState(0);
    const [awards,serAwards] = useState(0);
    useEffect (()=>{
        const timeOutId = setTimeout(() => {
           setClients(500);
           setCProjects(30);
           setCTeams(140);
           serAwards(12); 
        },3000);

        return()=> clearTimeout(timeOutId);
    })

    useGSAP(()=>{
      const timeline = gsap.timeline();
      timeline
      .from(
          ".achievement",
          {
            delay:1.5,
            x:100,
            stagger:.5,
            opacity:0,
          }
      )
    },{scope:container})


  return (
    <div className='achievement__container' ref={container}>
        {/* Start Achievement */}
      <div className="achievement">
        <div className="icon__container">
            <FaUsersLine />
        </div>
        <div className="details">
            <div className="count__row">
                <Odometer value={clients} className="title"/>
                <h1 className="g-text title">K</h1>
            </div>
            <small className="text__muted">parents</small>
        </div>
      </div>
      {/* End Achievement */}

      {/* Start Achievement */}
      <div className="achievement">
        <div className="icon__container">
            <FaDiagramProject />
        </div>
        <div className="details">
            <div className="count__row">
                <Odometer value={Projects} className="title"/>
                <h1 className="g-text title">+</h1>
            </div>
            <small className="text__muted">Educational institutions</small>
        </div>
      </div>
      {/* End Achievement */}

      {/* Start Achievement */}
      <div className="achievement">
        <div className="icon__container">
            <GiTeamIdea />
        </div>
        <div className="details">
            <div className="count__row">
                <Odometer value={Teams} className="title"/>
                <h1 className="g-text title">+</h1>
            </div>
            <small className="text__muted">Faculty</small>
        </div>
      </div>
      {/* End Achievement */}

      {/* Start Achievement */}
      <div className="achievement">
        <div className="icon__container">
            <FaAward />
        </div>
        <div className="details">
            <div className="count__row">
                <Odometer value={awards} className="title"/>
                <h1 className="g-text title">+</h1>
            </div>
            <small className="text__muted">Award</small>
        </div>
      </div>
      {/* End Achievement */}
    </div>
  );
};

export default Achievement;