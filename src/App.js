import React, {Component} from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

import Image from './components/Image'

import Home from './pages/HomePage'
import Error404 from './pages/Error404'

import NavBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class App extends Component {
    
  render(){
      return (
          <Router>
              <NavBar position="sticky">
                <Toolbar>
                <Image image="https://fontmeme.com/permalink/191013/b79629d5ed22cd020e06bebb471f2605.png" />
                <ul>
                    <Typography>
                    <NavLink exact
                          to="/"
                          activeStyle={{
                              fontWeight: "bold",
                              color: "white"
                          }}    
                              >Accueil
                   </NavLink>
                   </Typography>
                </ul>
                </Toolbar>
              </NavBar>
              <Switch>
                  <Route path="/" component={Home} />
                  <Route component={Error404} />
              </Switch>
          </Router>
      );
  }
}

export default App;
