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
      city: 'new york',
      country: 'us'
    }
  }

  getWeather = async (city, country, e) => {
    try{  
      let api_call = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
      console.log(api_call)
      e.preventDefault()
    } catch {
      console.log(e)
    }
  }

  handleClick = () => {
    const data = this.formApi.getState()
    const country = data.values.Country
    const city = data.values.City
    this.getWeather(country, city)
  }

  setFormApi = (formApi) => {
      this.formApi = formApi;
  }

  render(){
    this.getWeather()
    return(
      <div>
        <Title />
        <Informed handleClick={this.handleClick} setFormApi={this.setFormApi} />
        <Weather />
      </div>
    )
  }
}
