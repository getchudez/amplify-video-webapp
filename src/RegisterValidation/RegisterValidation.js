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

export default function RegisterValidation() {
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [redirectLogin, setRedirectLogin] = useState(false);

    function handleSubmit(event) {

        Auth.confirmSignUp(username, securityCode)
            .then( () => {
                setRedirectLogin(true);
            })
            .catch( (err) => {
                alert("Verifique los datos ingresados");
            });

    }

    if(redirectLogin){
        return(
            <Redirect to={"/login"}/>
        )
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">

            <Grid container spacing={1}>
                <Grid item md={12}>
                    <TextField
                        id="user-username"
                        label="Username"
                        variant="outlined"
                        value={username}
                        onInput={ e => { setUsername(e.target.value); } }
                        fullWidth
                    />
                </Grid>
                <Grid item md={12}>
                    <TextField
                        id="user-securitycode"
                        label="Codigo de seguridad"
                        variant="outlined"
                        value={securityCode}
                        onInput={ e => { setSecurityCode(e.target.value); } }
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Valide su usuario
                    </Button>
                </Grid>
            </Grid>

        </form>
    );
}