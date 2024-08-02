"use client";
import React, { useRef, useEffect } from 'react';
import '../styles/Experience.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const container = useRef();

  // useEffect(() => {
  //   if (container.current) {
  //     gsap.from(".numbered__heading_02", {
  //       scrollTrigger: {
  //         trigger: ".numbered__heading_02",
  //         start: "top 80%",
  //         end: "bottom 60%",
  //         scrub: 1,
  //       },
  //       y: 20,
  //       opacity: 0,
  //       duration: 0.5,
  //     });

  //     gsap.from(".timeline-block", {
  //       scrollTrigger: {
  //         trigger: ".timeline-block",
  //         start: "top 90%",
  //         end: "bottom 70%",
  //         scrub: 1,
  //       },
  //       y: 20,
  //       opacity: 0,
  //       duration: 0.5,
  //       stagger: 0.2,
  //     });

  //     // You can add additional animations here if needed
  //   }
  // }, []);

  return (
    <section ref={container} id="experience-section" className="gap">
      <h2 className="numbered__heading_02"><span>My Experience</span></h2>
      <div className="overlay-wrapper">
        <div className="fade-in">
          <div className="experience-wrapper">
            <div id="timeline">
              <div className="timeline-block">
                <div className="timeline-content">
                  <h2 className="position">HCI Research Assistant</h2>
                  <h3 className="company"><a href="http://www.ccis.northeastern.edu/" target="_blank">NU College of Computer
                      & Information Science</a></h3>
                  <p className="job-desc">Assisted a computer science PhD student in the development of a software prototype
                    built with HTML, CSS, JavaScript, and jQuery to facilitate better understanding of parent-child
                    communication preferences in low-SES (Socio-Economic Status) families. Developed remotely to meet
                    weekly deadlines and project checkpoints.</p>
                </div>
                <div className="timeline-img">
                  <div className="sprite research"></div>
                </div> <span className="date">Mar - May 2015</span>
              </div>
              <div className="timeline-block">
                <div className="timeline-content">
                  <h2 className="position">HCI Teaching Assistant</h2>
                  <h3 className="company"><a href="http://www.ccis.northeastern.edu/" target="_blank">NU College of Computer
                      & Information Science</a></h3>
                  <p className="job-desc">Assisted professor with grading homework and project assignments. Held office hours
                    to aid students in their understanding of core HCI concepts and reported to the professor the extent
                    of their understanding.</p>
                </div>
                <div className="timeline-img">
                  <div className="sprite academic"></div>
                </div> <span className="date">Jan - May 2016</span>
              </div>
              <div className="timeline-block">
                <div className="timeline-content">
                  <h2 className="position">President</h2>
                  <h3 className="company"><a href="http://nuwit.ccs.neu.edu" target="_blank">NU Women in Tech</a></h3>
                  <p className="job-desc">Lead weekly club meetings to foster a community of diverse women in CS. Manage a
                    variety of academic and social activities throughout the semester, including tech talks, student
                    panels, and workshops. Communicate regularly with e-board and administrative organizations.</p>
                </div>
                <div className="timeline-img">
                  <div className="sprite university"></div>
                </div> <span className="date">May 2016 - Present</span>
              </div>
              <div className="timeline-block">
                <div className="timeline-content">
                  <h2 className="position">Developer</h2>
                  <h3 className="company"><a href="http://www.northeastern.edu/scout/" target="_blank">Scout Studio</a></h3>
                  <p className="job-desc">Collaborated with a small team of student designers to spearhead a new design system
                    for Scout’s first annual student-led design conference at Northeastern. Worked closely with designers
                    and management team to develop, document, and manage the conference’s marketing website using Jekyll,
                    Sass, and JavaScript.</p>
                </div>
                <div className="timeline-img">
                  <div className="sprite university"></div>
                </div> <span className="date">Jan 2017 - Present</span>
              </div>
            </div> <i className="down-arrow"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
