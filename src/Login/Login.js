import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import  { Redirect } from 'react-router-dom'

import { Auth } from 'aws-amplify';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Login() {
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirectMain, setRedirectMain] = useState(false);

    function handleSubmit(event) {

        Auth.signIn({
            username: username,
            password: password,
        }).then( (response) => {
            setRedirectMain(true);
            console.log(response);
        }).catch( (err) => {
            alert(err.message);
            console.log(err);
        });

    }

    if(redirectMain){
        return (
            <Redirect to={"/main"}/>
        );
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">

            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField
                        id="user-username"
                        label="Username"
                        variant="outlined"
                        value={username}
                        onInput={ e => { setUsername(e.target.value); } }
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="user-password"
                        label="Password"
                        variant="outlined"
                        value={password}
                        type="password"
                        onInput={ e => { setPassword(e.target.value); } }
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Login
                    </Button>
                    <br/><br/>
                    <a href={"/#/register"}>¿Sin cuenta? Registrese</a>
                </Grid>
            </Grid>

        </form>
    );
}