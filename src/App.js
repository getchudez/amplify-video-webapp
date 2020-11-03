import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import WebPlayer from "./WebPlayer2/WebPlayer";
import MainLogin from "./MainLogin/MainLogin";
import MainRegister from "./MainRegister/MainRegister";

/*import Amplify, {Analytics, Auth} from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);*/

class App extends Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/login" component={MainLogin}/>
                    <Route exact path="/register" component={MainRegister}/>
                    <Route exact path="/video" component={WebPlayer}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
