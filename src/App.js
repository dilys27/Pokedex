import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import Home from './pages/HomePage'
import Detail from './pages/DetailPage'
import Error404 from './pages/Error404'

import { AppBar, Toolbar, Typography } from '@material-ui/core'

class App extends Component {

    render() {
        return (
            <div className="app">
                <Router>
                    <AppBar position="sticky">
                        <Toolbar>
                            <img src="https://fontmeme.com/permalink/191013/b79629d5ed22cd020e06bebb471f2605.png" />
                            <ul>
                                <Typography>
                                    <NavLink exact
                                        to="/"
                                        style={{
                                            fontWeight: "bold",
                                            color: "white",
                                        }}
                                    >Accueil
                                    </NavLink>
                                </Typography>
                            </ul>
                        </Toolbar>
                    </AppBar>
                    <Switch>
                        <Route exact path="/:name" component={Detail} />
                        <Route path="/" component={Home} />
                        <Route component={Error404} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
