"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; 
import "../../app/component/HeroSection.css";

const HeroSection = () => {
  const container = useRef();

  

  return (
    <section ref={container} className="home" id="home">
      <div className="home-content ds-fl js-c">
        <div className="text">
          <div className="text__one">Hi, my name is</div>
          <div className="text__two">Niket Deshmukh.</div>
          <div className="text__down">I build things for the web</div>
          <div className="text__three">Web developer</div>
          <div className="text__four">From India</div>
        </div>
        <div className="button__resume">
          <button>Resume</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
