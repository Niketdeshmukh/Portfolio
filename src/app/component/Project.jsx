import React from 'react'
import OtherProject from './OtherProject'
import "../../app/component/Project.css"
const Project = () => {
  return (
    <>
     <section class="services" id="skills">
    <div class="content">
      <h2 class="numbered__heading_03"><span>My Projects</span> </h2>
      <div class="boxes">
        <div class="box">
          <div class="icon">
            <i class="fas fa-desktop"></i>
          </div>
          <div class="topic">Web Development</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            autem quam odio, qui voluptatem eligendi?
          </p>
        </div>
        <div class="box">
          <div class="icon">
            <i class="fas fa-paint-brush"></i>
          </div>
          <div class="topic">Graphic Design</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            autem quam odio, qui voluptatem eligendi?
          </p>
        </div>
        <div class="box">
          <div class="icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <div class="topic">Digital Marketing</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            autem quam odio, qui voluptatem eligendi?
          </p>
        </div>
        <div class="box">
          <div class="icon">
            <i class="fab fa-android"></i>
          </div>
          <div class="topic">Icon Design</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            autem quam odio, qui voluptatem eligendi?
          </p>
        </div>
        <div class="box">
          <div class="icon">
            <i class="fas fa-camera-retro"></i>
          </div>
          <div class="topic">Photography</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            autem quam odio, qui voluptatem eligendi?
          </p>
        </div>
        <div class="box">
          <div class="icon">
            <i class="fas fa-tablet-alt"></i>
          </div>
          <div class="topic">Apps Devlopment</div>
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