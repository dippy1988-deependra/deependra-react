import React from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Login from './pages/login/Login';
import { loginContext } from '../src/context/loginContext'
import { Route, Switch } from 'react-router-dom';


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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </loginContext.Provider>
    </div>

  );
}

export default App;
