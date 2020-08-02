import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduation at NIT Warangal <span>2018-present (Expected graduation: 2022)</span></h2>
                        <p>I am currently pursuing my undergraduate studies at National Institute of Technology Warangal with a Bachelor of Technology focused in Computer Science. I have taken courses like Data Structures, Design of Algorithms, Object Oriented Programming, Database Management Systems, Discrete Mathematics, etc. and have a sound understanding of these subjects.</p>
                        <p>I have actively taken part in extra curricular activities and have helped in organising many events. I am a member of the Quiz Club and have represented my college in various Quizzing competitions.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>High School and Secondary School<span> 2014-2018</span></h2>
                        <p>I have completed my higher secondary education with Physics, Chemistry and Mathematics as my main subjects securing a 96.75% score in my intermediate exams (ISC). I have had a keen interest in Mathematics and Physics since my school days and enjoyed solving complex problems which has helped me improve my understanding of problems and the mathematical and analytical skills required to solve problems.</p>
                        <p>I also secured national rank 4 in my class 10th ICSE exams.</p>
                      </div>
                    </div>
                  </article>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}