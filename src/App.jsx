import React, { useState } from 'react'
// CSS imports
import './css/index.css'
import './css/flex.css'
import './css/Navigation.css'
import './css/login.css'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'

import ProtectedRoute from './Pages/ProtectedRoute'
import { LoginPage } from './Pages/LoginPage'

// functional Component
const App = () => {

    // doing so should give us a token!
    // token is used to make the API requests...
    const [isAuth, setAuth] = useState(false)

    const forceLoginCallBack = () => setAuth(true)

    if(isAuth)
        return <ProtectedRoute />
    else
        return <LoginPage forceLoginCallBack={forceLoginCallBack}/>
}

export default App