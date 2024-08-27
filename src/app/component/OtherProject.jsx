import React from "react";
import "../styles/otherProjects.css";
import Image from "next/image";
const OtherProjects = () => {
  return (
    <>
      <section
        className="section other-projects"
        data-sr-id="5"
        id="projects"
        // style="visibility: visible; opacity: 1; transition: opacity 0.6s cubic-bezier(0.694, 0, 0.335, 1) 0s;"
      >
        <div className="section__title">Projects</div>
        <div className="section__content">
          <div className="project">
            <div className="project__name">
              {" "}
              <a
                href="https://techfest-frontend.vercel.app/"
                target="_blank"
                className="arrow__link"
              >
                Tech Fest Website
              </a>{" "}
            </div>
            <Image
              src="/techfest.png"
              width={400}
              height={400}
              style={{ margin: "20px 0 20px 0px" }}
            ></Image>
            {/* <div
              className="social_icons"
              style={{
                color: "#007bff",
                width: "2.5rem",
                display: "flex",
                flexDirection: "row",
                float: "right",
                marginRight:'1rem'
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg> 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div> */}
            <br />
            <p>
              Techfizz Website is a comprehensive platform for our college’s
              annual tech fest, our team has built using React.js, node.js,
              MongoDB and vercel for reliable and scalable hosting.
            </p>
            <p>Over {" "}
              <a href="">
             100+ students
              </a>{" "}registered and made payment.</p>

            <div className="project__used">
              {" "}
              <span className="project__used__item">JavaScript</span>{" "}
              <span className="project__used__item">React</span>{" "}
              <span className="project__used__item">React Router</span>{" "}
              <span className="project__used__item">Axios</span>{" "}
              <span className="project__used__item">Mongo DB</span>{" "}
            </div>
          </div>
          <div className="project">
            <div className="project__name">
              {" "}
              <a
                href="https://chatwithfriend.netlify.app/"
                target="_blank"
                className="arrow__link"
              >
                Chat Application
              </a>{" "}
            </div>
            <Image
              src="/chatapp.png"
              width={400}
              height={400}
              style={{ margin: "20px 0 20px 0px" }}
            ></Image>
            <p>
              {" "}
              It is a chat application that facilitates seamless communication
              among friends, This application, built using React.js,
              Chatengine.io API, HTML, CSS, and JavaScript, enables users to
              chat with friends, create groups, and manage their friend list
              through secure user authentication. Integrated Chatengine.io API
              for real-time chat functionality, enabling users to exchange
              messages with friends.
            </p>
            <p>
              Designed and implemented a responsive user interface that ensured
              optimal user experience across various devices and screen sizes
            </p>
            <div className="project__used">
              {" "}
              <span className="project__used__item">React</span>{" "}
              <span className="project__used__item">HTML</span>{" "}
              <span className="project__used__item">CSS</span>{" "}
              <span className="project__used__item">JavaScript</span>{" "}
              <span className="project__used__item">Chatengine.io</span>{" "}
            </div>
          </div>
          <div className="project">
            <div className="project__name">
              {" "}
              <a href="" target="_blank" className="arrow__link">
                Portfolio Website
              </a>{" "}
            </div>
            <Image
              src="/portfolio.png"
              width={400}
              height={400}
              style={{ margin: "20px 0 20px 0px" }}
            ></Image>
            <p>
              Design personal website from scratch.Used designing tools such as
              Figma.
             <br /> Implemented best practices such as mininized the bundle
              size.
            </p>
            <div className="project__used">
              {" "}
              <span className="project__used__item">HTML</span>{" "}
              <span className="project__used__item">CSS</span>{" "}
              <span className="project__used__item">JavaScript</span>{" "}
              <span className="project__used__item">Next.js</span>{" "}
              <span className="project__used__item">GSAP</span>{" "}
              <span className="project__used__item">Three.js</span>{" "}
            </div>
          </div>
          <div className="project">
            <div className="project__name">
              {" "}
              <a
                href="http://brittanychiang.com/react-profile/"
                target="_blank"
                className="arrow__link"
              >
                Resume Builder
              </a>{" "}
              <Image
              src="/resume.png"
              width={400}
              height={400}
              style={{ margin: "20px 0 20px 0px" }}
            ></Image>
            </div>
            <p>
            Developed a responsive resume builder using React, HTML, CSS, and Bootstrap. The application provides an intuitive interface for users to easily create and customize resumes with real-time previews, simplifying the resume creation process.</p>
            <div className="project__used">
              {" "}
              <span className="project__used__item">JavaScript</span>{" "}
              <span className="project__used__item">React</span>{" "}
              <span className="project__used__item">Bootstrap</span>{" "}
              <span className="project__used__item">CSS</span>{" "}
            </div>
          </div>
          <div className="project">
            <div className="project__name">
              {" "}
              <a
                href=""
                target="_blank"
                className="arrow__link"
              >
                Handyy Craft Website
              </a>{" "}
            </div>
            <Image
              src="/handyy.png"
              width={400}
              height={400}
              style={{ margin: "20px 0 20px 0px" }}
            ></Image>
            <p>
            Created "Handyy," a React.js-based website for handcrafters and art workers to collectively showcase their art. Built with HTML, CSS, and React.js, the platform offers a dedicated space for artists to increase visibility of their creations.
            </p>
            <div className="project__used">
              {" "}
              <span className="project__used__item">JavaScript</span>{" "}
              <span className="project__used__item">React</span>{" "}
              <span className="project__used__item">HTML</span>{" "}
              <span className="project__used__item">CSS</span>{" "}
            </div>
          </div>
        </div>
      </section>
    </> 
  );
};

export default OtherProjects;
