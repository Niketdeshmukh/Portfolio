import React from 'react'
import OtherProject from './OtherProject'
import '../styles/Project.css';
const Project = () => {
  return (
    <>
     <section className="services" id="skills">
    <div className="content">
      <h2 className="numbered__heading_03"><span>My Projects</span> </h2>
      <div className="boxes">
        <div className="box">
          <div className="icon">
            <i className="fas fa-desktop"></i>
          </div>
          <div className="topic">Web Development</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            autem quam odio, qui voluptatem eligendi?
          </p>
        </div>
        <div className="box">
          <div className="icon">
            <i className="fas fa-paint-brush"></i>
          </div>
          <div className="topic">Graphic Design</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            autem quam odio, qui voluptatem eligendi?
          </p>
        </div>
        <div className="box">
          <div className="icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="topic">Digital Marketing</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            autem quam odio, qui voluptatem eligendi?
          </p>
        </div>
        <div className="box">
          <div className="icon">
            <i className="fab fa-android"></i>
          </div>
          <div className="topic">Icon Design</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            autem quam odio, qui voluptatem eligendi?
          </p>
        </div>
        <div className="box">
          <div className="icon">
            <i className="fas fa-camera-retro"></i>
          </div>
          <div className="topic">Photography</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            autem quam odio, qui voluptatem eligendi?
          </p>
        </div>
        <div className="box">
          <div className="icon">
            <i className="fas fa-tablet-alt"></i>
          </div>
          <div className="topic">Apps Devlopment</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            autem quam odio, qui voluptatem eligendi?
          </p>
        </div>
      </div>
    </div>
  </section>
<OtherProject/>
    </>
  )
}

export default Project