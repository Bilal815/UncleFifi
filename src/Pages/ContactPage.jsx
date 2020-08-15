import React, { useEffect } from 'react'

import Axios from 'axios'


const ContactPage = () => {

    useEffect(() => {
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
    }, [])
    
    return <div>
        <h1>CONTACT</h1>
        1. First you will add your client information in this view...
    </div>
}

export default ContactPage