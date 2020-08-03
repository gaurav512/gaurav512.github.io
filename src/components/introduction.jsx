import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/imgbg.jpg)'}}>
              <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <p id="temp">Hi! <br/><span id="namegrv">I'm Gaurav</span><br/>
                          <a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1X0I9aVLublR6y6YdHLb9ty_efAHb2VUm/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
              </li>
              <li style={{backgroundImage: 'url(images/imgbg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                            <p id="temp2">I want to <br/><span id="build"><b>BUILD THINGS</b></span><br/>that<br/><span id="make"><b> MAKE A DIFFERENCE</b></span></p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

