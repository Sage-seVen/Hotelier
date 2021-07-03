import React from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";

export default function Signup(props: any) {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleSignup = () => {
    console.log("Creating new user");
    auth
      .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        let errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const setUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`User email is ${e.target.value} `);
    setUserInfo({ ...userInfo, email: e.target.value });
  };

  const setUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`User pass is ${e.target.value} `);
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  return (
    <Router>
      <div>
        <div>
          <TextField className={classes.textField} label="Name" variant="outlined" />
        </div>
        <div>
          <TextField className={classes.textField} label="Email" variant="outlined" onChange={setUserEmail} />
        </div>
        <div>
          <TextField className={classes.textField} label="Phone" variant="outlined" />
        </div>
        <div>
          <TextField
            className={classes.textField}
            label="Password"
            type="password"
            variant="outlined"
            onChange={setUserPassword}
          />
        </div>
        <div>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleSignup}>
            Sign Me Up!!
          </Button>
          {/* <Link to="/">Back to Login</Link> */}
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
