import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Feed, Divider } from 'semantic-ui-react';
import PostSection from 'components/PostSection';
import { getPosts } from 'store/connectIn/selectors';

const Posts = ({ posts }) => posts.length === 0 ? (
  <p>No Feeds in your Timeline</p>
) : (
  <Feed>
    { posts.map((post, index) => (
      <Fragment key={post.id}>
        <PostSection post={post} />
        { (index !== posts.length -1) && <Divider /> }
      </Fragment>
    )) }
  </Feed>
);

Posts.defaultProps = {
  posts: [],
};

const mapStateToProps = state => ({
  posts: getPosts(state),
});

export default connect(mapStateToProps)(Posts);
