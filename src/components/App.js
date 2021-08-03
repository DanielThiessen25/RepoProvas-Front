import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from 'react';
import Home from "./Home";
import Load from "./Load";
import Submit from "./Submit";
import Teachers from "./Teachers";
import Subjects from "./Subjects";
import ListTeacher from "./ListTeacher";
import ListSubject from "./ListSubject";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>          
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/enviar" exact={true} component={Submit} />
                    <Route path="/visualizar" exact={true} component={Load} />
                    <Route path="/professores" exact={true} component={Teachers} />
                    <Route path="/professores/:idProf" exact={true} component={ListTeacher} />
                    <Route path="/disciplinas" exact={true} component={Subjects} />
                    <Route path="/disciplinas/:idDisciplina" exact={true} component={ListSubject} />
            </Switch>
        </BrowserRouter>


    );
}