import React from 'react'

import ContactsPng from './../assets/contacts.png'
import InvoicePng from './../assets/invoice.png'
import SchedulePng from './../assets/calendar.png'
import ReportsPng from './../assets/reports.png'

import { NavigationItem } from './NavigationItem'
// Navigation Should be based on Navigation Config Object
export const SideNav = props => {
    return <div className="navigation flexed vertical">
        <NavigationItem 
            png={ContactsPng}
            title="Contacts"
            to="/"
            exact={true}
        />
        <NavigationItem
            png={InvoicePng}
            title="Invoice"
            to="/Invoice"
            exact={true}
        />
        <NavigationItem
            png={ReportsPng}
            title="Reports"
            to="/Report"
            exact={true}
        />
        <NavigationItem 
            png={SchedulePng}
            title="Schedule"
            to="/Schedule"
            exact={true}
        />
    </div>
}