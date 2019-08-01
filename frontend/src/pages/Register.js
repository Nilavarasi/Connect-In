import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Input, Select, Grid, Header, Image, Message } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class RegisterForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() { 
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png's /> Register
          </Header>
          <Form size='large'>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='First name' placeholder='First name' />
              <Form.Field control={Input} label='Last name' placeholder='Last name' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='Professional' placeholder='Professional' />
              <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='Email' placeholder='Email' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field control={Input} type='password' label='Password' placeholder='Password' />
              <Form.Field control={Input} type='password' label='Retype Password' placeholder='Retype Password' />
            </Form.Group>
            <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
            <Form.Field control={Button} color='teal'>Submit</Form.Field>
          </Form>
          <Message size='mini'>
              Already Signed Up, <Link to="/login">Click to Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}


export default RegisterForm
