import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ContextProvider from "./Context/ContextProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Notfounding from './components/Notfounding/Notfounding';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddBikes from "./components/AddBikes/AddBikes";
import Explore from "./components/Explore/Explore";
import Purchase from "./components/Purchase/Purchase";
import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              {" "}
              <Home></Home>{" "}
            </Route>
            {/* <Route exact path="/services">
              {" "}
              <Services></Services>{" "}
            </Route> */}
            <PrivateRoute exact path="/purchase">
              {<Purchase></Purchase>}
            </PrivateRoute>
            <PrivateRoute exact path="/bikes/:_id">
              {<Purchase></Purchase>}
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
              {<Dashboard></Dashboard>}
            </PrivateRoute>
            <Route exact path="/doctors">
              {" "}
              {/* <Doctors></Doctors>{" "} */}
            </Route>
            <Route exact path="/about">
              {" "}
              <About></About>{" "}
            </Route>
            <Route exact path="/contact">
              {" "}
              <Contact></Contact>{" "}
            </Route>
            <Route exact path="/addbikes">
              {" "}
              <AddBikes></AddBikes>{" "}
            </Route>
            <Route exact path="/bikes">
              {" "}
              <Explore></Explore>{" "}
            </Route>
            <Route exact path="/signin">
              {" "}
              <Login></Login>{" "}
            </Route>
            <Route exact path="/signup">
              {" "}
              <Register></Register>{" "}
            </Route>
            <Route exact path="/">
              {" "}
              <Home></Home>{" "}
            </Route>
            <Route>
              {" "}
              <Notfounding></Notfounding>{" "}
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
