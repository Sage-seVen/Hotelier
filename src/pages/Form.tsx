import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core/";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import Login from "../components/Login";
import Signup from "../components/Signup";

export default function Form(props: any) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card style={{ background: "#CDF0EA" }} variant="outlined">
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Hello There, Please login/Signup
        </Typography>
        <CardContent className={classes.cardContent}>
          <Login />
          <Signup />
        </CardContent>
      </Card>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      margin: theme.spacing(5),
    },
    title: {
      fontSize: 14,
    },
    cardContent: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
    },
  })
);
