import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Header as SemanticHeader, Container, Segment, Grid, Button} from 'semantic-ui-react'
import { getUserState, getConnectionsForCurrentUser } from 'store/connectIn/selectors';
import { removeConnection } from 'store/connectIn/actions';


class Profile extends Component {
  extra = (
    <a>
      <Icon name='user' />
       {this.props.user.object[0].connections ? (this.props.user.object[0].connections).length : 0 } Friends
    </a>
  );
  
  removeConnection = (_id) => (
    <Button basic color='red' onClick={() => this.props.removeConnection(this.props.user.object[0].id, _id)}>
        Remove
    </Button>
  );

  items = this.props.connections.map(data => {
    return {
      header: data.first_name+data.last_name,
      description: data.email,
      meta: data.professional,
      extra: this.removeConnection(data._id)
    }
  })
  

  render() {
    let { user, connections } = this.props;
    console.log("connections", connections)
    console.log(this.items)
    return (


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
                    header={user.object[0].first_name + " " +user.object[0].last_name}
                    meta={user.object[0].email}
                    description={user.object[0].professional}
                    extra={this.extra}
                  />
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
      );
  }
}

const mapStateToProps = state => ({
  user: getUserState(state),
  connections: getConnectionsForCurrentUser(state),
});

const mapDispatchToProps = {
  removeConnection,
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
