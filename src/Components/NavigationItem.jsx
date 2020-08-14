import React from 'react'

export const NavigationItem = ({png, title}) => {
    return <div className="flexed vertical actionItem navigationItem flex-item centered">
    <img src={png} alt="contacts image" width="70"/>
    <span className="centered-text navigationTitle">{title}</span>
</div>
}