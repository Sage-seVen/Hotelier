import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
// import Alert from '@material-ui/lab/Alert';  have to make error mechanism
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import firebase from "firebase";
import { auth } from "../firebase";

export default function Login(props: any) {
  const classes = useStyles();
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const goToSignupPage = () => {
    history.push("/signup");
    console.log("Take me to signup");
  };

  const setLoginEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`User email is ${e.target.value} `);
    setUserInfo({ ...userInfo, email: e.target.value });
  };

  const setLoginPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`User pass is ${e.target.value} `);
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        console.log("You are logged in");
        history.push("/home");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <Router>
      <div>
        <code>{/* <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre> */}</code>
        <div>
          <TextField className={classes.textField} label="Email" variant="outlined" onChange={setLoginEmail} />
        </div>
        <div>
          <TextField
            className={classes.textField}
            label="Password"
            type="password"
            variant="outlined"
            onChange={setLoginPassword}
          />
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
          {/* <Redirect to="/signup">
              <Button variant="text" color="secondary" className={classes.button} onClick={goToSignupPage} >
                Signup Instead
              </Button>
            </Redirect> */}
        </div>
      </div>
    </Router>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      margin: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);
