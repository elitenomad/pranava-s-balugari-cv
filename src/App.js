import './App.css'

import axios from 'axios'
import React, { Component } from 'react'

import About from './components/About'
import Header from './components/Header'
import Resume from './components/Resume'


class App extends Component {

  state = {
    resumeData: {}
  }

  async getResumeData() {
    const response =
      await axios.get("/resumeData.json", {
        headers: {
          'Content-Type': 'application/json'
        }
      })

    this.setState({
      resumeData: response.data
    })
  }

  componentDidMount(){
    this.getResumeData()
  }

  render() {
    const { resumeData } = this.state

    return (
      <div className="App">
        <Header data={resumeData.main}/>
        <About data={resumeData.main}/>
        <Resume data={resumeData.resume}/>
        {/*<Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/> */}
      </div>
    );
  }
}

export default App;
