import React, {Component} from 'react';
import './MainLogin.css';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Amplify, {API, graphqlOperation} from 'aws-amplify';
import awsconfig from '../aws-exports';
import Login from "../Login/Login";

Amplify.configure(awsconfig);

class MainLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {

        return (
            <div>
                <style>{'body { background-color: #bdbdbd; }'}</style>

                <Grid
                    container
                    spacing={1}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item md={4} xs={6}>
                        <Card>
                            <CardContent>
                                <Login/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default MainLogin;
