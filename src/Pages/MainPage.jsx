import React, { Component ,useState } from 'react'
import moment from 'moment'
import SingleDate from './../Components/SingleDate'

class MainPage extends Component
{
    constructor(props) {
        super (props)
        // STATE
        this.state = { 
            startDate: moment(),// this means today in Moment
            focused: false,
            count: 0
         }
    }

    // METHODS
    toggleFocus = () => {
        this.setState({
            focused: !this.state.focused,
            count: this.state.count + 1
        })
    }
    onDateChange = newDate => this.setState({startDate: newDate})


    render() {
        return (<div className="container">
            <div className="row">
                <SingleDate 
                        date={this.state.startDate}
                        focused={this.state.focused}
                        onDateChange={this.onDateChange}
                        toggleFocus={this.toggleFocus}
                />
            </div>
            <div className="row">
                <div>
                    <span>Start Date</span><span>{this.state.startDate.format('L')}</span>
                </div>
                <div>
                    <span>Focused State</span><span> {this.state.focused ? "TRUE" : "FALSE"} </span>
                </div>
                <div>
                    <span>Click Count</span><span> {this.state.count} </span>
                </div>
            </div>
            </div>)
    }

}
export default MainPage