import React from 'react';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

const AppHeader = () => (
   <div>
    <Menu fixed='top' class='teal'>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
          Connect IN
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>
        <Menu.Menu position='right'>
          <Dropdown item simple text='My Connections'>
            <Dropdown.Menu>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Connections</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Notifications</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Container>
    </Menu>
  </div>
);

export default AppHeader;
