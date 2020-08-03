import React, { Component } from 'react'
import ScriptTag from 'react-script-tag';

const Demo = props => (
<ScriptTag src="https://www.counter12.com/ad.js?id=zZxzwc109x9d72Z9" />
);
export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/index.png)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Gaurav Singh</a></h1>
              <span className="email"><i className="icon-mail"></i> itsgaurav01@gmail.com</span>
            </div>
            <br></br>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#" data-nav-section="skills">Skills</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/gaurav512/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/gaurav512/" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.instagram.com/grvsingh_/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://twitter.com/grvsingh_/" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.facebook.com/singhgauravvv" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p>
            </div>
            <div align="center" id="counter">Site visitors till now: <a href="https://www.counter12.com"><img src="https://www.counter12.com/img-zZxzwc109x9d72Z9-3.gif" alt="free counter" border="{0}" /></a>
            </div>

          </aside>
        </div>
      </div>
    )
  }
}