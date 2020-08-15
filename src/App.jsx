import React, { useState } from 'react'
// CSS imports
import './css/index.css'
import './css/flex.css'
import './css/Navigation.css'
import './css/login.css'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'


import { HashRouter as Router } from "react-router-dom"

import ProtectedRoute from './Pages/ProtectedRoute'
import { LoginPage } from './Pages/LoginPage'

// functional Component
const App = () => {

    // doing so should give us a token!
    // token is used to make the API requests...
    const [isAuth, setAuth] = useState(false)

    const forceLoginCallBack = () => setAuth(true)
    const LoadedPage = isAuth ? <ProtectedRoute/> : <LoginPage forceLoginCallBack={forceLoginCallBack}/>

    return <Router>
        {LoadedPage}
    </Router>
}

export default App