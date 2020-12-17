import React, { Component } from 'react'
import Acceuil from "./Acceuil/Acceuil"
import Localisation from "./Localisation/Localisation"
import Contact from "./Contact/Contact"
import NavBar from "../../components/UI/NavBar"
import {Route,Switch} from "react-router-dom"
import Container from "react-bootstrap/Container"
import Route404 from "../../components/Route404/Route404"
import Footer from "../../components/Footer/Footer"

export default class Site extends Component {
    render() {
        return (
            <>
            <div className="site">
                <NavBar/>
                <Container>
                    <Switch>
                        <Route path="/" exact render={() => <Acceuil/>}/>
                        <Route path="/localisation"  render={() => <Localisation/>}/>
                        <Route path="/contact" render={(props) => <Contact {...props}/>}/>
                        <Route render={() => <Route404/>}/>
                    </Switch>
                    
                
                </Container>
                <div className="min-site"></div>
            </div>
            
            <Footer/>
            </>
        )
    }
}
