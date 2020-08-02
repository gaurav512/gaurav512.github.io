import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p id="about-text1">I am an undergraduate student at National Institute of Technology Warangal pursuing B.Tech. in Computer Science Engineering. I am interested in exploring new technologies and improving my skills to build applications which solve real-life problems. </p>
                    <p id="about-text2">I enjoy solving algorithmic problems and am an active competitive programmer on various platforms like <a href="https://codeforces.com/profile/gaurav_512">Codeforces</a>, <a href="https://www.codechef.com/users/ahambrahmasmi">Codechef</a>, <a href="https://hackerrank.com/gaurav512">HackerRank</a>, etc. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        
      </div>
    )
  }
}