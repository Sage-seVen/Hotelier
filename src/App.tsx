import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Form from "./pages/Form";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import BookingPage from "./pages/BookingPage";
import Viewbookings from "./pages/Viewbookings";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Welcome to Hotelier!
        </header>
        <div>
          <Switch>
            <Route path="/" exact component={Form} />
            <Route path="/home" component={HomePage} />
            <Route path="/book" component={BookingPage} />
            <Route path="/bookings" component={Viewbookings} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
