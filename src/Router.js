import { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Contact from "./pages/Contact";

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