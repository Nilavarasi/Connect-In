import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Feed, Divider, Container, Segment, Header as SemanticHeader } from 'semantic-ui-react';
import PostSection from 'components/PostSection';
import { getPostStateItems } from 'store/connectIn/selectors';
import UploadPost from 'containers/UploadPost';
import { string } from 'postcss-selector-parser';

const Post = ({ posts }) => 
// posts.length === 0 ? (
//   <p>No Feeds in your Timeline</p>
// ) :
 (
  <Container fluid text style={{ padding: '2rem 0'}}>
      <Segment>{console.log("posts", posts)}
        <SemanticHeader as="h2" textAlign="center">
            My Post
        </SemanticHeader>
        <UploadPost />
        <Feed>
        {
          typeof(posts) == 'string' ?
            <p>No Feeds in your Timeline..! Come on let's start Posting</p>

          : posts.map((post, index) => (
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
  posts: getPostStateItems(state),
});

export default connect(mapStateToProps)(Post);
