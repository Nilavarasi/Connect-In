import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Grid, Header, Image, Message } from 'semantic-ui-react';
import LoginForm from 'containers/LoginForm';
import { isLoggedIn } from 'store/connectIn/selectors';

const Login = ({ loggedIn, ...props }) => {
  React.useEffect(() => {
    if (loggedIn) {
      props.history.push('/home');
    }
  });

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: '40vw' }}>
        <Header as='h1' color='teal' textAlign='center'>
          <Image src='/logo.png' /> ConnectIN
        </Header>
          <LoginForm />
        <Message size='mini'>
          New to us? <Link to="/register">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = state => ({
  loggedIn: isLoggedIn(state),
});

export default connect(mapStateToProps)(Login);
