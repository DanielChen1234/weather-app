import React, {Component} from 'react'
import axios from 'axios'
import Title from './components/Title'
import Informed from './components/Form'
import Weather from './components/Weather'

const API_KEY = 'd61a335d4a31bd2ef2303cb6f9e4a7fa'

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      city: '',
      country: ''
    }
  }

  getWeather = async (city, country, e) => {
    const api_call = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    e.preventDefault()
    console.log(api_call)
  }

  handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value})
  }

  render(){
    this.getWeather()
    return(
      <div>
        <Title />
        <Informed handleChange={this.handleChange} getWeather={this.getWeather}/>
        <Weather />
      </div>
    )
  }
}
