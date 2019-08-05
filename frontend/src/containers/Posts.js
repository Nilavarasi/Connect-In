import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Feed, Divider } from 'semantic-ui-react';
import PostSection from 'components/PostSection';
import { getConnectionPosts } from 'store/connectIn/selectors';

const Posts = ({ posts }) => typeof(posts) == 'string' ?
  <p>No Feeds in your Timeline..! Come on let's start Finding Connections</p>
  : (
  <Feed>{console.log(posts)}
    { posts.map((post, index) => (
    <Fragment key={post.id}>
      <PostSection post={post} />
      { (index !== posts.length -1) && <Divider /> }
      </Fragment>
     )) } 
  </Feed>
);

// Posts.defaultProps = {
//   posts: [],
// };

const mapStateToProps = state => ({
  posts: getConnectionPosts(state),
});

export default connect(mapStateToProps)(Posts);
