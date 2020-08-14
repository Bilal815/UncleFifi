import React, { Component ,useState } from 'react'
import moment from 'moment'
// import SingleDate from './../Components/SingleDate'
import { MainLayout } from '../Components/Layout'
import RoutingInstance from './../routes/routingClass'


import {
    Switch,
    Route
} from "react-router-dom"

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


    renderRoutes = () => {

        return RoutingInstance.getRoutesData().map(routeElement => {
            const { to, exact, ComponentPage } = routeElement
            return <Route path={to} exact={exact}>
                <ComponentPage/>
            </Route>
        })
    }

    render() {
        return (<MainLayout>
            <Switch>
                {this.renderRoutes()}
            </Switch>
        </MainLayout>)
    }

}
export default ProtectedRoute