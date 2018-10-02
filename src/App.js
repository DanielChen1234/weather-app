import React, {Component} from 'react'
import axios from 'axios'
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = 'd61a335d4a31bd2ef2303cb6f9e4a7fa'

export default class App extends Component {

  getWeather = async () => {
    const api_call = await axios.get(``)
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
