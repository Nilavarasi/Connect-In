import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Grid, Header, Image } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class RegisterForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='logo.svg' /> Register
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
            <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
            <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
            <Form.Field control={Button} color='teal'>Submit</Form.Field>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}


export default RegisterForm
