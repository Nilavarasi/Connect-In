import React from 'react';
import { Feed, Comment } from 'semantic-ui-react';
import CommentSection from './CommentSection';

const PostSection = ({ post }) => (
  <Feed.Event>
    <Feed.Label>
      <img src={post.by.avatar} alt={post.by.name} />
    </Feed.Label>
    <Feed.Content>
      <Feed.Summary>
        <Feed.User>{post.by.name}</Feed.User> posted a status
      </Feed.Summary>
      <Feed.Extra text>
        {post.content}
      </Feed.Extra>
      <Feed.Meta>
        <Feed.Like>
          {post.likes} Likes
        </Feed.Like>
        <Comment.Group>
          { post.comments.map(comment => (
            <CommentSection key={comment.at} comment={comment} />
          )) }
        </Comment.Group>
      </Feed.Meta>
    </Feed.Content>
  </Feed.Event>
);

export default PostSection;
