import React, { Component ,useState } from 'react'
import moment from 'moment'
import SingleDate from '../Components/SingleDate'

class MainPage extends Component
{
    constructor(props) {
        super (props)
        // STATE
        this.state = { 
            startDate: moment(),// this means today in Moment
            focused: false
         }
    }

    // METHODS
    toggleFocus = () => this.setState({focused: !this.state.focused})
    onDateChange = newDate => this.setState({startDate: newDate})


    render() {
        return (<SingleDate 
                date={this.state.startDate}
                focused={this.state.focused}
                onDateChange={this.onDateChange}
                toggleFocus={this.toggleFocus}
            />)
    }

}
export default MainPage