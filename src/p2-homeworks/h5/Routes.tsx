import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import s from './HW5.module.css'
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUNIOR: "/junior",
    JUNIOR_PLUS: "/junior+",
    '404': '/404'
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route  exact path={"/"}  render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={PATH.JUNIOR} render={() => < Junior />} />
                <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus />}/>
                <Route path={PATH["404"]} render={() => <Error404/>}/>
                <Route path={'*'} render={ () => <Redirect to={PATH["404"]}/>}/>
            </Switch>
        </div>
    );
}

export default Routes;
