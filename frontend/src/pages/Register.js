import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Header, Image, Message } from 'semantic-ui-react'
import RegisterForm from 'containers/RegisterForm';


class Register extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() { 
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Register
          </Header>
          <RegisterForm />
          <Message size='mini'>
              Already Signed Up, <Link to="/login">Click to Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}


export default Register;
