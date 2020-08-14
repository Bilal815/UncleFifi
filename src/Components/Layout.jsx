import React from 'react'
import { Navigation } from './Navigation'


export const MainLayout = (props) => {
    return <div className="fullDim flexed">
        <Navigation/>
        <div className="flex-item">
            {props.children}
        </div>

    </div>
}