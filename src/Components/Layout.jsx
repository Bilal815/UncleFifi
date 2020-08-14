import React from 'react'
import { SideNav } from './Navigation'


export const MainLayout = (props) => {
    return <div className="fullDim flexed">
        <SideNav/>
        <div className="flex-item">
            {props.children}
        </div>

    </div>
}