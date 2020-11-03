import React, {Component} from 'react';
import './MainVideoSite.css';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Amplify, {Auth} from 'aws-amplify';
import awsconfig from '../aws-exports';
import WebPlayer from "../WebPlayer2/WebPlayer";

Amplify.configure(awsconfig);

class MainVideoSite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            video_url : ""
        }
    }

    componentDidMount() {


        Auth.currentSession().then( data => {
            // alert();

            var headers = {headers: { 'Authorization': data.getIdToken().getJwtToken() }};

            var data = {
                "file" : this.props.match.params.video_id,
            };

            // axios.get( "/sandbox/list" , headers)
            //     .then( (response) => {
            //         console.log(response);
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });

            axios.post( "https://hju0wru39g.execute-api.us-east-2.amazonaws.com/sandbox/video", data, headers)
                .then( (response) => {
                    console.log(response);
                    this.setState({ video_url : response.data });
                })
                .catch((error) => {
                    console.log(error);
                });


        });

    }

    render() {

        if (this.state.video_url == ""){
            return (
                <div></div>
            )
        }

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
                        <WebPlayer
                            url={this.state.video_url}
                        />
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default MainVideoSite;
