import React, { createContext } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { loginContext } from '../../context/loginContext';

export default function Login() {
    const { login, setLogin } = React.useContext(loginContext)
    const [user, setUser] = React.useState({
        name: '',
        password: ''
    })

    

    function saveUserData() {
        console.log(user)
        localStorage.setItem("auth", JSON.stringify(user))
        if (user.name === "admin" || user.password === "admin") {
            setLogin(true)
        }
    }
    return (
        <div>
            {login === false &&
                < div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h1>LOGIN</h1>
                    <TextField label="Name" color="secondary" onChange={e => setUser({ ...user, name: e.target.value })} />
                    <br />
                    <TextField label="Password" color="secondary" onChange={e => setUser({ ...user, password: e.target.value })} />
                    <br />
                    <Button variant="contained" onClick={saveUserData}>
                            Login
                        </Button>
                </div>
            }
        </div >
    )
}
