import React from 'react'
import '../../app/component/About.css'

const About = () => {
  return (
    <>
    <section className="about" id="about">
    <div className="content">
      {/* <!-- <div className="title"><span>About Me</span></div> --> */}
      <h2 className="numbered__heading"><span>About Me</span> </h2>
      <div className="about-details">
        <div className="left">
          {/* <!-- <img src="images/about.jpg" alt="" /> --> */}
        </div>
        <div className="right">
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web
            development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at
            <a href="https://us.mullenlowe.com/" rel="noopener noreferrer" target="_blank">an advertising agency</a>, <a
              href="https://starry.com/" rel="noopener noreferrer" target="_blank">a start-up</a>,
            <a href="https://www.apple.com/" rel="noopener noreferrer" target="_blank">a huge corporation</a>, and
            <a href="https://scout.camd.northeastern.edu/" rel="noopener noreferrer" target="_blank">a student-led
              design studio</a>
            . My main focus these days is building accessible, inclusive products and digital experiences at
            <a href="https://upstatement.com/" rel="noopener noreferrer" target="_blank">Upstatement</a>
            for a variety of clients.
          </p>
          <p>I also recently <a href="https://www.newline.co/courses/build-a-spotify-connected-app"
              rel="noopener noreferrer" target="_blank">launched a course</a> that covers everything you need to build a
            web app with the Spotify API using Node &amp; React.</p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Eleventy</li>
            <li>Node.js</li>
            <li>WordPress</li>
          </ul>
        </div>
        <div orientation="right" className="side__StyledSideElement-sc-1duznzb-0 ele__position"><div className="email__StyledLinkWrapper-sc-2epoq-0 email__position fade-enter-done"><a href="mailto:niketdeshmukh2002@gmail.com">niketdeshmukh2002@gmail.com</a></div></div>
      </div>
    </div>
  </section>
    </>
  )
}

export default About