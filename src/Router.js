import { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

class Router extends Component{

    render(){
        return(
            <BrowserRouter>
                <Header/>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                </Switch>

                <Footer/>
            </BrowserRouter>
        );
    }
}

export default Router;