import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import AppHeader from '../components/Header';
import AppFooter from '../components/Footer';

const Post = () => (
  <div>
    <AppHeader />
    <Container fluid text style={{ padding: '2rem 0'}}>
      <Header as="h2" textAlign="center">
        Post
      </Header>
    </Container>
    <AppFooter />
  </div>
);

export default Post;
