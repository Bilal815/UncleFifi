import React from 'react'

import ContactPage from './../Pages/ContactPage'
import InvoicePage from './../Pages/InvoicePage'
import ReportPage from './../Pages/ReportPage'
import SchedulePage from './../Pages/SchedulePage'
import EmployeePage from './../Pages/EmployeePage'

// ICONS
import ContactsPng from './../assets/contacts.png'
import InvoicePng from './../assets/invoice.png'
import SchedulePng from './../assets/calendar.png'
import ReportsPng from './../assets/reports.png'
import RocketPng from './../assets/rocket.png'


class RouteManager {
    /**
     * Holds all Routes in shape of RoutingElement
     */
    constructor()
    {
        this.Routes = []
    }

    /**
     * Adds to the Routes List
     * @param {string} to is the Path which our route lives in.
     * @param {string} exact is if this is an exact path, or dynamic
     * @param {React.FC<{}>} Page this is the component to be rendered
     */
    addRoute(to, exact, Page, icon, title)
    {
        this.Routes.push(new RoutingElement(to, exact, Page, icon, title))
    }

    getRoutesData()
    {
        return this.Routes.map(R => R.ToRouteData())
    }

    getNavData()
    {
        return this.Routes.map(R => R.ToNavItem())
    }

}


class RoutingElement
{
    /**
     * 
     * @param {string} to 
     * @param {string} exact 
     * @param {React.FC<{}>} Page 
     * @param {string>} icon
     * @param {string>} title
     */
    constructor(to, exact, Page, icon, title)
    {
        this.to = to
        this.exact = exact
        this.ComponentPage = Page
        this.icon = icon
        this.title = title
    }

    /*
    Returns a basic Object where only has the following props...
     * @param {string} to 
     * @param {string} exact 
     * @param {React.FC<{}>} Page 
    */
    ToRouteData() {
        return {
            to: this.to,
            exact: this.exact,
            ComponentPage: this.ComponentPage
        }
    }

    /*
    Returns a basic Object where only has the following props...
     * @param {string} to 
     * @param {string} exact 
     * @param {React.FC<{}>} Page 
    */
   ToNavItem() {
    return {
        icon: this.icon,
        title: this.title,
        to: this.to,
        exact: this.exact
    }
}
}

const RouterManagerInstance = new RouteManager()

RouterManagerInstance.addRoute('/', true, ContactPage, ContactsPng, "Contacts")
RouterManagerInstance.addRoute('/Employee', true, EmployeePage, RocketPng, "Employees")
RouterManagerInstance.addRoute('/Schedule', true, SchedulePage, SchedulePng, "Schedule")
RouterManagerInstance.addRoute('/Invoice', true, InvoicePage, InvoicePng, "Invoices")
RouterManagerInstance.addRoute('/Report', true, ReportPage, ReportsPng, "Reports")

export default RouterManagerInstance