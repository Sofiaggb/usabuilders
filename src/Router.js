import { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";

class Router extends Component{

    render(){
        return(
            <BrowserRouter>
                <Header/>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/usabuilders" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />

                    <Route exact path="*" component={Error} />
                     
                </Switch>

                <Footer/>
            </BrowserRouter>
        );
    }
}

export default Router;