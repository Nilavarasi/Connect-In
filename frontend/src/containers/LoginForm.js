import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Segment, Message } from 'semantic-ui-react';
import { login } from 'store/connectIn/actions';
import { isLoggedIn, getUserError } from 'store/connectIn/selectors';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    emailError: '',
    passwordError:'',
  }

  handleSubmit = () => this.setState({email: '', password: ''})

  render() {
    const { error } = this.props;
    return (
      <Form size='large' onSubmit={this.handleSubmit}>
        <Segment stacked padded="very">
          {
            error ?
              <Message size='mini' negative>
                {error}
              </Message>
            : ''
          }
          
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='E-mail address'
            onChange={(e) => this.setState({'email': e.target.value})}
            // error={this.state.emailError}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={(e) => this.setState({'password': e.target.value})}
            // error={this.state.passwordError}
          />
          <Button
            fluid
            color='teal'
            size='large'
            onClick={() => this.props.login(this.state.email, this.state.password)}
          >
            Login
          </Button>
        </Segment>
      </Form>
    );
  }
}


const mapStateToProps = state => ({
  loggedIn: isLoggedIn(state),
  error: getUserError(state),
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
