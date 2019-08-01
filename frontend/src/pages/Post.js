import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Feed, Divider, Container, Segment, Header as SemanticHeader, Button } from 'semantic-ui-react';
import PostSection from 'components/PostSection';
import { getPosts } from 'store/connectIn/selectors';
import UploadPost from 'containers/UploadPost';

const Post = ({ posts }) => posts.length === 0 ? (
  <p>No Feeds in your Timeline</p>
) : (
  <Container fluid text style={{ padding: '2rem 0'}}>
      <Segment>
        <SemanticHeader as="h2" textAlign="center">
            My Post
        </SemanticHeader>
        <UploadPost />
        <Feed>
          { posts.map((post, index) => (
            <Fragment key={post.id}>
              <PostSection post={post} />
              { (index !== posts.length -1) && <Divider /> }
            </Fragment>
          )) }
        </Feed>
      </Segment>
    </Container>
);

Post.defaultProps = {
  posts: [],
};

const mapStateToProps = state => ({
  posts: getPosts(state),
});

export default connect(mapStateToProps)(Post);
