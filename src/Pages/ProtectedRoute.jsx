import React, { Component ,useState } from 'react'
import moment from 'moment'
// import SingleDate from './../Components/SingleDate'
import { MainLayout } from '../Components/Layout'
import RoutingInstance from './../routes/routingClass'
import Axios from 'axios'


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

    componentDidMount(){
        Axios.get('/authenticate')
        .then((axiosResponse) => {
            if(
                typeof axiosResponse === 'object' && axiosResponse !== null &&
                axiosResponse &&
                axiosResponse.data && 
                axiosResponse.data.authenticated) 
            {
                alert('getting data from express server')
            }
        }).catch((axiosError) => {
            console.dir(axiosError)
        })
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