import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

import { Auth } from 'aws-amplify';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Register() {
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(event) {

        var userData = {
            username: email,
            password: password,
            attributes : {
                email: email,
                phone_number : phoneNumber,
            }
        };

        Auth.signUp(userData).then( (response) => {
            alert("SIGN UP OK");
        }).catch( (err) => {
            alert(err.message);
        });

    }

    return (
        <form className={classes.root} noValidate autoComplete="off">

            <Grid container spacing={1}>
                <Grid item md={12}>
                    <TextField
                        id="user-email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onInput={ e => { setEmail(e.target.value); } }
                        fullWidth
                    />
                </Grid>
                <Grid item md={12}>
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
                <Grid item md={12}>
                    <TextField
                        id="user-phonenumber"
                        label="Celular"
                        variant="outlined"
                        value={phoneNumber}
                        onInput={ e => { setPhoneNumber(e.target.value); } }
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Registrese
                    </Button>
                </Grid>
            </Grid>

        </form>
    );
}