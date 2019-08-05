import React from 'react';
import { Feed, Comment } from 'semantic-ui-react';
import CommentSection from './CommentSection';
import { avatar } from 'utils/dummy';

const PostSection = ({ post }) => (
  <Feed.Event>
    <Feed.Label>
      {console.log(avatar[post.avatar_id])}
        <img src={avatar[post.avatar_id]} alt={avatar[post.avatar_id]} />
      {/* <img src={post.user_id} alt={post.user_id} /> */}
    </Feed.Label>
    <Feed.Content>
      <Feed.Summary>
        <Feed.User>{post.user_id}</Feed.User> posted a status
      </Feed.Summary>
      <Feed.Extra text>
        {post.post_text}
      </Feed.Extra>
      <Feed.Meta>
        <Feed.Like>
          {post.likes || 0} Likes
        </Feed.Like>
        {/* <Comment.Group>
          { post.comments.map(comment => (
            <CommentSection key={comment.at} comment={comment} />
          )) }
        </Comment.Group> */}
      </Feed.Meta>
    </Feed.Content>
  </Feed.Event>
);

export default PostSection;
