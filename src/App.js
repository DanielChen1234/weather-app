import React, {Component} from 'react'
import axios from 'axios'
import Title from './components/Title'
import Form from './components/Form'
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

  getWeather = async (city, country) => {
    const api_call = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    console.log(api_call)
  }

  handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      const weatherResult = await this.props.getWeather(this.state.city, this.state.country)
    } catch (err) {
      console.error(err)
    }
  }

  render(){
    return(
      <div>
        <Title />
        <Form />
        <Weather />
      </div>
    )
  }
}
