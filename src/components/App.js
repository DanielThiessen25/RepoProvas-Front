import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from 'react';
import Home from "./Home";
import Load from "./Load";
import Submit from "./Submit";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>          
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/enviar" exact={true} component={Submit} />
                    <Route path="/visualizar" exact={true} component={Load} />
            </Switch>
        </BrowserRouter>


    );
}