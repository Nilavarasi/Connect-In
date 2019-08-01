import React from 'react'
import { Card, Icon, Header as SemanticHeader, Container, Segment, Grid, Button} from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
);

const removeConnection = (
  <Button basic color='red'>
      Remove
  </Button>
);

const items = [
  {
    header: 'Project Report - April',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
    extra: removeConnection
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
    extra: removeConnection
  },
  {
    header: 'Project Report - April',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
    extra: removeConnection
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
    extra: removeConnection
  }
]


const Profile = () =>  (
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
                  header='Elliot Baker'
                  meta='Friend'
                  description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                  extra={extra}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <SemanticHeader as="h2" textAlign="center">
                Connections
              </SemanticHeader>
                  <Grid.Row>
                    <Card.Group centered items={items} />
                  </Grid.Row>
            </Grid.Row>
          </Grid>
        </div>
      </Segment>
    </Container>
);

export default Profile;
