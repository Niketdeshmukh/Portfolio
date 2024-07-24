import React from 'react'
import "../../app/component/Contact.css"
const Contact = () => {
  return (
   <>
   <section className="contact" id="contact">
    <div className="content">
      <h2 className="numbered__heading_04"><span>Contact Me</span> </h2>

    </div>
    <div id="headerwrap">
      <div className="container">
        <div className="row centered">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="code-editor">
              <div className="top-bar">
                <ul className="control">
                  <li className="button" onclick="closeTab()"></li>
                  <li className="button"></li>
                  <li className="button"></li>
                </ul>
                <div className="file-path">~/Users/NIKET/portfolio_website</div>
              </div>
              <ul className="line-numbers">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li className="no-mobile">15</li>
                <li className="no-mobile">16</li>
              </ul>
              <div className="code">
                <p className="comment">/* Welcome to Portfolio website! */</p>
                <p className="about__para">
                  <span className="selector">#ABOUT</span>
                  
                  &#123;
                </p>
                <p className="indent">
                  <span className="prop">name:</span>
                  Niket Deshmukh;
                </p>
                <p className="indent">
                  <span className="prop">location:</span>
                  Bhopal, India;
                </p>
                <div className="no-mobile">
                  <p className="indent">
                    <span className="prop">description:</span>
                    A special interest group that supports women who study or are interested in Computer and Information
                    Science at Northeastern University;
                  </p>
                  <p className="indent">
                    <span className="prop">email: </span>
                    url('niketdeshmukh2002@gmail.com');
                  </p>
                </div>
                <p className="about__bras">
                  {/* } */}

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="content">
      <div className="text">
        <div className="button">
          <button>Let's Chat</button>
        </div>
      </div>
    </div>
  </section>
   </>
  )
}

export default Contact