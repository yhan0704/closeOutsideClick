import React, { Component } from "react";
import * as emailjs from "emailjs-com";
// import '../css/Contact.css';

import { Button, Form, FormGroup, Input } from "reactstrap";
class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  handleSubmit(e) {
    e.preventDefault();
    const { email, subject, message } = this.state;
    let templateParams = {
      from_name: email,
      to_name: "hanyc1205",
      subject: subject,
      message_html: message,
    };
    emailjs.send(
      templateParams,
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <div className="contactContainer" id="contact">
        <h1 className="p-heading1">Contact Me</h1>
        <div className="contactMain">
        <h5 className="contactH3"> I WILL BE GLAD TO ANSWER YOUR QUESTIONS!</h5>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <br />
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, "email")}
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup controlId="formBasicName">
              <br />
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, "name")}
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <br />
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                placeholder="Message"
                onChange={this.handleChange.bind(this, "message")}
              />
            </FormGroup>
            <Button className="submitButton" variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
export default Contact;
