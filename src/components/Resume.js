import React, { Component } from 'react'

class Resume extends Component {
  render() {

    const {
      skillmessage,
      education = [],
      work = [],
      skills = [],
    } = this.props.data || {}

    const educationInfo = education.map(function (e) {
        return(
          <div key={e.school}>
            <h3>{e.school}</h3>
            <p className="info">
              {e.degree} <span>&bull;</span><em className="date">{e.graduated}</em>
            </p>
            <p>{e.description}</p>
          </div>
      )
    })

    const workInfo = work.map(function(w){
        return <div key={w.company}><h3>{w.company}</h3>
            <p className="info">{w.title}<span>&bull;</span> <em className="date">{w.years}</em></p>
            <p>{w.description}</p>
        </div>
    })

    const skillsInfo = skills.map(function (s) {
        var className = 'bar-expand '+s.name.toLowerCase();
        return <li key={s.name}><span style={{width:s.level}}className={className}></span><em>{s.name}</em></li>
    })

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
              <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {educationInfo}
                </div>
              </div>
          </div>
        </div>


        <div className="row work">
          <div className="three columns header-col">
              <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {workInfo}
          </div>
        </div>



        <div className="row skill">

          <div className="three columns header-col">
              <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

              <p>{skillmessage}
              </p>

          <div className="bars">
            <ul className="skills">
              {skillsInfo}
            </ul>
          </div>
        </div>
        </div>
      </section>
    );
  }
}

export default Resume;
