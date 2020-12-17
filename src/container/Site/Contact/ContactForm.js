import React from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Badge from "react-bootstrap/Badge"
const ContactForm = () => {
    return (
        <Form>

            <Form.Group controlId="nom">
                <Form.Label>Nom :</Form.Label><Badge variant="warning">( min 5 carac)</Badge>
                <Form.Control type="text" placeholder="Votre nom" />
                
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Votre email" />
                <Form.Text className="text-muted">
               Nous n'allons jamais divulger votre email
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="message">
                <Form.Label>message</Form.Label><Badge variant="warning">( entre  100 et 200 caractéres)</Badge>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Valider
            </Button>
        </Form>
    );
};

export default ContactForm;