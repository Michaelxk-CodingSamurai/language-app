import React, { Component } from "react";
import {
    Route,
    Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Reader from "./Reader";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/reader">Reader</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={ <Home /> }/>
                            <Route path="/reader" element={ <Reader /> }/>
                            <Route path="/contact" element= {<Contact /> }/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;