import React, { useState } from 'react'
import backgroundImg3 from './../assets/Hippie.jpg'
import { Button, FormControl, TextField } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
export const LoginPage = ({forceLoginCallBack}) => {

    const [input, setInput] = useState('')
    const [password, editPasswordControl] = useState('')

    const SignInRequest = () => {
        debugger
        forceLoginCallBack()
    }

    return <div className="centered coverBackgroundImg flexed fullDim" style={{backgroundImage: `url(${backgroundImg3})`}}>
        <div className="centered flexed loginForm vertical">
            <div>
                <FormControl>
                    <TextField value={input} onChange={e => {setInput(e.target.value)}} label="userid" variant="outlined"/>
                </FormControl>
            </div>
            <div>
                <FormControl>
                    <TextField value={password} onChange={e => {editPasswordControl(e.target.value)}} label="password" variant="outlined"/>
                </FormControl>
            </div>
            <div>
                <Button endIcon={<Icon>send</Icon>} size="large" variant="contained" color="primary" onClick={SignInRequest}>
                    Sign in
                </Button>
            </div>
        </div>
    </div>
}