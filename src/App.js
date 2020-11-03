import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import WebPlayer from "./WebPlayer2/WebPlayer";
import MainLogin from "./MainLogin/MainLogin";
import MainRegister from "./MainRegister/MainRegister";
import MainSite from "./MainSite/MainSite";
import MainVideoSite from "./MainVideoSite/MainVideoSite";

class App extends Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/login" component={MainLogin}/>
                    <Route exact path="/register" component={MainRegister}/>
                    <Route exact path="/main" component={MainSite}/>
                    <Route exact path="/video" component={MainVideoSite}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
