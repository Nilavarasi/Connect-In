import _ from 'lodash'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Visibility,
} from 'semantic-ui-react';
import Logout from 'containers/LogoutButton';
import SearchUser from './SearchUser';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

export default class Header extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) {
      this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
    }
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed } = this.state

    return (
      <div>
        {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
        <style>{`
          html, body {
            background: #fff;
          }
        `}
        </style>

        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image size='mini' src='/logo.png' />
              </Menu.Item>
              <Menu.Item header> <Link to="/home">Connect IN</Link></Menu.Item>
              
              <div style = {{ marginTop: '1rem' }}><SearchUser /></div>

              <Menu.Menu position='right'>
              <Dropdown item simple text='My Home'>
                <Dropdown.Menu>
                  <Dropdown.Item><Link to="/profile">Profile</Link></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item><Link to="/post">Posts</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Menu.Menu>
              <Menu.Menu  style={{display: 'block',marginTop: '1.5rem'}} position='right'>
                <Logout />
              </Menu.Menu>
            </Container>
          </Menu>
        </Visibility>
      </div>
    )
  }
}