import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Segment } from 'semantic-ui-react';
import { login } from 'store/connectIn/actions';
import { isLoggedIn, getUserError } from 'store/connectIn/selectors';

const LoginForm = (props) => (
  <Form size='large'>
    <Segment stacked padded="very">
      <Form.Input
        fluid
        icon='user'
        iconPosition='left'
        placeholder='E-mail address'
      />
      <Form.Input
        fluid
        icon='lock'
        iconPosition='left'
        placeholder='Password'
        type='password'
      />
      <Button
        fluid
        color='teal'
        size='large'
        onClick={() => props.login()}
      >
        Login
      </Button>
    </Segment>
  </Form>
);

const mapStateToProps = state => ({
  loggedIn: isLoggedIn(state),
  error: getUserError(state),
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
