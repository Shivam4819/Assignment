import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import RegisterComponent from "./RegisterComponent";
import LoginComponent from "./LoginComponent";
import PasswordResetComponent from "./PasswordResetComponent";

function ControllerComponent(){
return(
    <div >
        <HashRouter>
            <HeaderComponent/>
                <Switch>
                <Route exact path="/register" component={RegisterComponent}/>
                <Route exact path="/login" component={LoginComponent}/>
                <Route exact path="/reset" component={PasswordResetComponent}/>
                </Switch>
             <FooterComponent/>
        </HashRouter>

    </div>
)

}
export default ControllerComponent;

