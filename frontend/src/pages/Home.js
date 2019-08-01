/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import { Container, Segment } from 'semantic-ui-react';
import Posts from 'containers/Posts';
import { hasLoaded, getUserError } from 'store/connectIn/selectors';

const Home = ({ loaded, userError, ...props }) => {
  React.useEffect(() => {
    if (userError !== null) {
      props.history.push('/login');
    }
  }, [userError]);

  return (
    <Container fluid text style={{ padding: '2rem 0'}}>
      <Segment loading={!loaded}>
        { loaded ? <Posts /> : 'Loading...'}
      </Segment>
    </Container>
  )
};

const mapStateToProps = state => ({
  loaded: hasLoaded(state),
  userError: getUserError(state),
});

export default connect(mapStateToProps)(Home);
