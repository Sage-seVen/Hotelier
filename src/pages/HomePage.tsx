import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import React from "react";

function HomePage(props: any) {
  return (
    <div>
      Welcome to Luxury Hotel Chain By Hotelier
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Link to="/book" style={{ marginTop: 20 }}>
          <Button variant="contained" color="secondary">
            Make a Booking
          </Button>
        </Link>
        <Link to="/bookings" style={{ marginTop: 10 }}>
          <Button variant="contained" color="secondary">
            View My Bookings
          </Button>
        </Link>
        <Link to="/aboutUs" style={{ marginTop: 10 }}>
          <Button variant="contained" color="secondary">
            About Us
          </Button>
        </Link>
        <Link to="/contact" style={{ marginTop: 10 }}>
          <Button variant="contained" color="secondary">
            Contact us
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
