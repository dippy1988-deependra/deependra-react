import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../sidebar/Sidebar';
import { loginContext } from '../../context/loginContext';

export default function Header() {
    const { login, setLogin } = React.useContext(loginContext)
    function logout(){
        setLogin(false) 
        localStorage.clear() 
    }
    return (
        <div>
            {login === true &&
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                            <Sidebar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    style={{ color: "#ffffff" }}>
                                    <MenuIcon />
                                </IconButton>
                            </Sidebar>

                            <Button color="inherit" onClick={logout}>Logout</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            }
        </div>
    )
}
