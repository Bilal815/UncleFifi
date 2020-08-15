import React from 'react'

import RoutingInstance from './../routes/routingClass'

import { NavigationItem } from './NavigationItem'

export const Navigation = () => {

    const renderNavigationItems = () => {
        return RoutingInstance.getNavData().map(n => {
            const { icon, title, to, exact } = n
            return <NavigationItem png={icon} title={title} to={to} exact={exact}/>
        })
    }

    return <div className="navigation flexed vertical hiddenScroll autoOverflow">
        {renderNavigationItems()}
    </div>
}