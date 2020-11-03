import React, {Component} from 'react';
import './MainVideoSite.css';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Amplify, {Auth} from 'aws-amplify';
import awsconfig from '../aws-exports';
import Login from "../Login/Login";
import WebPlayer from "../WebPlayer2/WebPlayer";

Amplify.configure(awsconfig);

class MainVideoSite extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

        Auth.currentSession().then( data => {
            // alert(data.getIdToken().getJwtToken());
        });

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
                        <WebPlayer
                            url={"https://d17rmzbxgxru50.cloudfront.net/MP4_MP4.mp4?Expires=1604445802&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMTdybXpieGd4cnU1MC5jbG91ZGZyb250Lm5ldC9NUDRfTVA0Lm1wNCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTYwNDQ0NTgwMn19fV19&Signature=CO9HkGJs7rcy4jV~3Nt5mFq5cZEFVLa~9eKmujBcYkvkEGYJEVcIRKLFwa1qYyLPj~1awDH4wRer74xEAVhMKNFZh5pDQLlggQu6e~5ly66kGn0g7RNXgpNEppie3xEz~j8jm4bc8d8U-B4v1ED3coACEZeBjcwfqm0jDWNg9QT9N7dqZkOXUjH6LvQvkOCIv~7l7WPSj9aszM2SPT989xLEiJtMiLhzmNSXjLcnYM4ivSVAcWUuf9BAvN3c2kOsI68vDvHdXKlYVyICiuAgYtBBt8V4FBZJ9~1S4hpEmOg2LoRwMC6IlOYMulyfNueWewat2arcpKmZbUIafONg9A__&Key-Pair-Id=K210FBQU0W4R88"}
                        />
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default MainVideoSite;
