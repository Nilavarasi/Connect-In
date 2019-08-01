import React from 'react';
import { Comment } from 'semantic-ui-react'

// TODO: Convert into a container and get the commenter info
const CommentSection = ({ comment, ...rest }) => (
  <Comment {...rest}>
    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
    <Comment.Content>
      <Comment.Author as="a">{comment.by}</Comment.Author>
      <Comment.Metadata>
        <div>{comment.at}</div>
      </Comment.Metadata>
      <Comment.Text>{comment.text}</Comment.Text>
      <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
);

export default CommentSection;
