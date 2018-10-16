import React, {Component} from 'react';
import {Form, Text} from 'informed'

export default class Informed extends Component {

    render() {
        return (
            <Form id="intro-form" getApi={this.props.setFormApi}>
                <label htmlFor="intro-name">Country:</label>
                    <Text field="Country" id="intro-name" />
                <label htmlFor="intro-name">City:</label>
                    <Text field="City" id="intro-name" />
                <button onClick={this.props.handleClick}>Submit</button>
            </Form>
        )
    }
}
