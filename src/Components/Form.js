import React, {Component} from 'react';

export default class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather()}>

                <label htmlFor="city">city:</label>
                <input onChange={this.props.handleChange} type="text" name="city" />

                <label htmlFor="country">country:</label>
                <input onChange={this.props.handleChange} type="text" name="country" />

            </form>
        )
    }
}
