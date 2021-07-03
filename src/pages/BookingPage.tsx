import React from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { firestore } from "../firebase";

export default function BookingPage(props: any) {
  const classes = useStyles();
  const [bookingInfo, setBookingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    date: "",
    roomType: "",
    roomNo: "",
  });

  const handleSubmit = () => {
    console.log("Save data here");
    console.log(bookingInfo);

    // e.preventDefault();
    const db = firestore;
    // firestore.settings({
    //   timestampsInSnapshots: true
    // });
    const userRef = db
      .collection("bookings")
      .add({
        firstName: bookingInfo.firstName,
        lastName: bookingInfo.lastName,
        email: bookingInfo.email,
        number: bookingInfo.number,
        date: bookingInfo.date,
        roomType: bookingInfo.roomType,
        roomNo: bookingInfo.roomNo,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 100 }}>
      Please enter your booking Details
      <TextField
        className={classes.textField}
        label="First Name"
        variant="outlined"
        onChange={(e) => {
          setBookingInfo({ ...bookingInfo, firstName: e.target.value });
        }}
      />
      <TextField
        className={classes.textField}
        label="Last Name"
        variant="outlined"
        onChange={(e) => {
          setBookingInfo({ ...bookingInfo, lastName: e.target.value });
        }}
      />
      <TextField
        className={classes.textField}
        label="Email"
        variant="outlined"
        onChange={(e) => {
          setBookingInfo({ ...bookingInfo, email: e.target.value });
        }}
      />
      <TextField
        className={classes.textField}
        label="Number"
        variant="outlined"
        onChange={(e) => {
          setBookingInfo({ ...bookingInfo, number: e.target.value });
        }}
      />
      <TextField
        className={classes.textField}
        label="Date"
        variant="outlined"
        onChange={(e) => {
          setBookingInfo({ ...bookingInfo, date: e.target.value });
        }}
      />
      <TextField
        className={classes.textField}
        label="Room Type"
        variant="outlined"
        onChange={(e) => {
          setBookingInfo({ ...bookingInfo, roomType: e.target.value });
        }}
      />
      <TextField
        className={classes.textField}
        label="Room No"
        variant="outlined"
        onChange={(e) => {
          setBookingInfo({ ...bookingInfo, roomNo: e.target.value });
        }}
      />
      Please enter your Fooding Options
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
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
