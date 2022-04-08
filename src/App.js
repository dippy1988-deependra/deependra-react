import React from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Login from './pages/login/Login';
import { loginContext } from '../src/context/loginContext'


function App() {

  const [login, setLogin] = React.useState(false)
  React.useEffect(() => {
    const data = localStorage.getItem("auth")
    if (data) {
      setLogin(true)
    } else {
      setLogin(false)
    }
  }, [])

  if (login === false) {
    return (
      <loginContext.Provider value={{ login, setLogin }}>
        <Login />
      </loginContext.Provider>
    )
  }


  return (
    <div>
      <loginContext.Provider value={{ login, setLogin }}>

        <Header />
        <Sidebar />
        {/* <Home /> */}
        {/* <About/> */}
      </loginContext.Provider>
    </div>

  );
}

export default App;
