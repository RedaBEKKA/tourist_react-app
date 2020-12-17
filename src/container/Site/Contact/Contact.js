import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import {Route} from "react-router-dom"
import Titre from "../../../components/UI/Titres/Titre"
import {LinkContainer} from "react-router-bootstrap"
import ContactForm from './ContactForm'

export default class Contact extends Component {
    render() {
        return (
            <>
              <Titre>Contactez nous !</Titre>
              <h2>Adresse</h2>
              Cité 612 logts btD4 ....
              <h2>Téléphone</h2>
              0782205066
              <h2>Vous préferez nous décrire ?</h2>
              <LinkContainer to={this.props.match.url+"/form"}>
                 <Button variant="primary">Formulaire de contact</Button>
              </LinkContainer>
              <Route path={this.props.match.url+"/form"} render={(props) => <ContactForm/>}/>
             
            </>
        )
    }
}
