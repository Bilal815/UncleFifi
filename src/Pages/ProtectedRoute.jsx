import React, { Component ,useState } from 'react'
import moment from 'moment'
// import SingleDate from './../Components/SingleDate'
import { MainLayout } from '../Components/Layout'
class ProtectedRoute extends Component
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
        return (<MainLayout>
            <div className="fullDim centered flex-item flexed vertical">
                <h1>MAIN PAGE</h1>
                Will need to create some kind of switch statement over here...
            </div>
        </MainLayout>)
    }

}
export default ProtectedRoute