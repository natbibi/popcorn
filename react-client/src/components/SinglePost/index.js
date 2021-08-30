import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Card, Image, Button, Label, Icon, Form } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery, gql, useMutation } from '@apollo/client';

import { DeleteButton, LikeButton } from '../../components'

const SinglePost = (props) => {
    const { user } = useAuth0();
    const { sub } = user;
    const mongoId = sub.substring(6)

    const postId = props.match.params.postId;

    const history = useHistory();

    const [comment, setComment] = useState("");

    const { data: getPost } = useQuery(FETCH_POST_QUERY, {
        variables: {
            postId
        },
    });

    const [addComment, { error }] = useMutation(ADD_COMMENT_MUTATION, {
        update() {
            setComment("")
        },
        variables: {
            postId,
            body: comment
        }
    })

    let renderPosts;
    if (!getPost) {
        renderPosts = <p>Loading post..</p>;
    } else {
        const { id, body, createdAt, username, likeCount, likes, commentCount, comments, userAvatar } = getPost.getPost;

        renderPosts = (
            <main className="single-post-container">
                <Button id="back-button" onClick={history.goBack}>back</Button>
                <Card fluid color="red">
                    <Card.Content>
                        {userAvatar ? (<Image
                            floated='right'
                            size='big'
                            src={userAvatar}
                            avatar
                        />) :
                            (<Image
                                floated='right'
                                size='big'
                                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/popcorn_1f37f.png"
                                avatar
                            />)
                        }
                        <Card.Header>{username}</Card.Header>
                        <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
                        <Card.Description>{body}</Card.Description>

                    </Card.Content>
                    <Card.Content extra>
                        <LikeButton user={user} post={{ id, likes, likeCount }} />

                        <Button as='div' labelPosition='right'>
                            <Button color='pink' basic>
                                <Icon name='comments' />
                            </Button>
                            <Label basic color='pink' pointing='left'>
                                {commentCount}
                            </Label>
                        </Button>
                        {user && user.nickname === username && <DeleteButton postId={id} mongoId={mongoId} />}
                    </Card.Content>
                </Card>
                {user && <Card fluid>
                    <Card.Content>
                        <Card.Description><p>Add Comment</p></Card.Description>
                        <Form>
                            <Form.Field>
                                <Form.Input
                                    placeholder="What are your thoughts? 💬"
                                    name="body"
                                    value={comment}
                                    onChange={e => setComment(e.target.value)}
                                    autoComplete="off"
                                    error={error ? true : false}
                                />
                                <Button type="submit" inverted color="orange" onClick={addComment}>
                                    Post!
                                </Button>
                            </Form.Field>
                        </Form>
                        {error && (
                            <div className="ui error message" style={{ margin: "0" }}>
                                  {error.graphQLErrors[0].message}
                            </div>
                        )}
                    </Card.Content>
                </Card>}
                {comments.map(comment => (
                    <Card fluid key={comment.id}>
                        <Card.Content>
                            {user && user.nickname === comment.username && <DeleteButton postId={id} commentId={comment.id} />}
                            <Card.Header>{comment.username}</Card.Header>
                            <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
                            <Card.Description>{comment.body}</Card.Description>
                        </Card.Content>
                    </Card>
                ))}

            </main>
        );
    }
    return renderPosts;
}

const ADD_COMMENT_MUTATION = gql`
    mutation($postId: String!, $body: String!) {
        createComment(postId: $postId, body: $body) {
            id 
            comments {
                id body createdAt username
            }
            commentCount
        }
    }
`

const FETCH_POST_QUERY = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      createdAt
      username
      userAvatar
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;


export default SinglePost;
