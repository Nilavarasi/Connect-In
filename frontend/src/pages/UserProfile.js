import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Header as SemanticHeader, Container, Segment, Grid, Button} from 'semantic-ui-react'
import { getUser, isUserConnected } from 'store/connectIn/selectors';
import { addNewConnection } from 'store/connectIn/actions';


class UserProfile extends Component {
  extra = (
    <a>
      <Icon name='user' />
       {(this.props.user && this.props.user.connections) ? this.props.user.connections.length : 0 } Friends 
    </a>
  );
   
  render() {
    const { user, isConnected } = this.props;
    console.log("this.props", this.props)
    // console.log("this.props.match.params.redirectParam   ", this.props.match.params.redirectParam)
    // console.log(user)
    return user ? (


      <Container fluid text style={{ padding: '2rem 0'}}>
        <Segment>
          <div>
            <SemanticHeader as="h2" textAlign="center">
              Profile
            </SemanticHeader>
            <Grid columns='two'  divided='vertically'>
              <Grid.Row>
                <Grid.Column>
                  <Card
                    image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'
                  />
                </Grid.Column>
                <Grid.Column>
                  <Card
                    header={user.first_name + " " +user.last_name}
                    meta={user.email}
                    description={user.professional}
                    extra={this.extra}
                  />
                  <Button 
                    basic 
                    color='green' 
                    onClick={() => this.props.addNewConnection(user._id)}
                    disabled={isConnected}
                  >
                      Add Connection
                  </Button>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <SemanticHeader as="h2" textAlign="center">
                  Connections
                </SemanticHeader>
                    <Grid.Row>
                      <Card.Group centered items={this.items} />
                    </Grid.Row>
              </Grid.Row>
            </Grid>
          </div>
        </Segment>
      </Container>
    ) : <p>Loading...</p>;
  }
}

const mapStateToProps = (state, props) => ({
  user: getUser(state, { id: props.match.params.id }),
  isConnected: isUserConnected(state, { id: props.match.params.id }),
});


const mapDispatchToProps = {
  addNewConnection,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
