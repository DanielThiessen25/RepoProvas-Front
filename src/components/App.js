import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from 'react';
import Home from "./Home";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>          
                    <Route path="/" exact={true} component={Home} />
            </Switch>
        </BrowserRouter>


    );
}