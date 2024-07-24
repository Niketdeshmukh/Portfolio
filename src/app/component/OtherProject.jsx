import React from 'react'
import "../../app/component/OtherProjects.css"
const otherProjects = () => {
  return (
    <>
    <section className="section other-projects" data-sr-id="5"
    // style="visibility: visible; opacity: 1; transition: opacity 0.6s cubic-bezier(0.694, 0, 0.335, 1) 0s;"
    >
    <div className="section__title">Other Projects</div>
    <div className="section__content">
      <div className="project">
        <div className="project__name"> <a href="https://github.com/bchiang7/Surf-Videos" target="_blank"
            className="arrow__link">Surf Videos</a> </div>
        <p>Small React project created during an interview process to browse and search surf videos via the YouTube API.
        </p>
        <div className="project__used"> <span className="project__used__item">JavaScript</span> <span
            className="project__used__item">React</span> <span className="project__used__item">React Router</span> <span
            className="project__used__item">Axios</span> <span className="project__used__item">YouTube API</span> </div>
      </div>
      <div className="project">
        <div className="project__name"> <a href="http://brittanychiang.com/Redesign-myNEU/" target="_blank"
            className="arrow__link">myNEU Redesign</a> </div>
        <p>myNEU student portal web prototype for my information science senior project. I conducted a study that aimed
          to answer the question of how myNEU can be improved to provide students at Northeastern with a better user
          experience. Informed by usability metrics gathered from user tests, I redesigned and developed a web prototype
          of myNEU.</p>
        <div className="project__used"> <span className="project__used__item">Jekyll</span> <span
            className="project__used__item">HTML</span> <span className="project__used__item">SCSS</span> <span
            className="project__used__item">JavaScript</span> </div>
      </div>
      <div className="project">
        <div className="project__name"> <a href="http://brittanychiang.com/v2" target="_blank" className="arrow__link">Personal
            Website V2</a> </div>
        <p>Second iteration of my personal website. Designed and developed with a conscious effort to avoid using any
          superfluous frameworks like Bootstrap.</p>
        <div className="project__used"> <span className="project__used__item">Jekyll</span> <span
            className="project__used__item">Handlebars</span> <span className="project__used__item">SCSS</span> <span
            className="project__used__item">JavaScript</span> <span className="project__used__item">Github Pages</span> </div>
      </div>
      <div className="project">
        <div className="project__name"> <a href="http://brittanychiang.com/react-profile/" target="_blank"
            className="arrow__link">React Resume</a> </div>
        <p>An online version of my 2016 resume I made for fun. I was interested in learning React.js, so I found this <a
            href="https://medium.com/learning-new-stuff/building-your-first-react-js-app-d53b0c98dc#.1439cdewq">simple
            tutorial</a> and it kind of spun into this weekend project. I probably didn't need to use React at all, but
          hey, at least I learned a few things!</p>
        <div className="project__used"> <span className="project__used__item">JavaScript</span> <span
            className="project__used__item">React</span> <span className="project__used__item">CSS</span> </div>
      </div>
      <div className="project">
        <div className="project__name"> <a href="http://brittanychiang.com/v1" target="_blank" className="arrow__link">Personal
            Website V1</a> </div>
        <p>My first portfolio website I designed and built in 2014. I learned quite a bit about HTML, CSS, and SEO.
          Since then, I think my web development and design skills have improved immensely.</p>
        <div className="project__used"> <span className="project__used__item">HTML</span> <span
            className="project__used__item">CSS</span> <span className="project__used__item">Bootstrap</span> <span
            className="project__used__item">JavaScript</span> <span className="project__used__item">jQuery</span> </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default otherProjects