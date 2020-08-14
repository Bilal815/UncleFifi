import React from 'react'

import ContactPage from './../Pages/ContactPage'
import InvoicePage from './../Pages/InvoicePage'
import ReportPage from './../Pages/ReportPage'
import SchedulePage from './../Pages/SchedulePage'

// ICONS
import ContactsPng from './../assets/contacts.png'
import InvoicePng from './../assets/invoice.png'
import SchedulePng from './../assets/calendar.png'
import ReportsPng from './../assets/reports.png'


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
    addRoute(to, exact, Page)
    {
        this.Routes.push(new RoutingElement(to, exact, Page))
    }

    getRoutesData()
    {
        return this.Routes.map(R => R.ToRouteData())
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
     */
    constructor(to, exact, Page, icon)
    {
        this.to = to
        this.exact = exact
        this.ComponentPage = Page
        this.icon = icon
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
}

const RouterManagerInstance = new RouteManager()
RouterManagerInstance.addRoute('/Invoice', true, InvoicePage, InvoicePng)
RouterManagerInstance.addRoute('/Report', true, ReportPage, ReportsPng)
RouterManagerInstance.addRoute('/Schedule', true, SchedulePage, SchedulePng)
RouterManagerInstance.addRoute('/', true, ContactPage, ContactsPng)
export default RouterManagerInstance