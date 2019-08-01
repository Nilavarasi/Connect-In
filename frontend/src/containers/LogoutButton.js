import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import { logout } from 'store/connectIn/actions';

const Logout = (props) => {
  const handleLogout = async() => {
    await props.logout();
    props.history.push('/login');
  };

  return (
    <Button animated basic size="small" onClick={handleLogout}>
      <Button.Content visible>Logout</Button.Content>
      <Button.Content hidden>
        <Icon name="sign-out" />
      </Button.Content>
    </Button>
  );
};

const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(withRouter(Logout));
