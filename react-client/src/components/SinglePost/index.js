import React from "react";
import { useHistory } from 'react-router-dom';
import { Card, Image, Button, Label, Icon } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery, gql } from '@apollo/client';

import { DeleteButton, LikeButton } from '../../components'

const SinglePost = (props) => {
    const { user } = useAuth0();
    const { sub } = user;
    const mongoId = sub.substring(6)

    const postId = props.match.params.postId;

    const history = useHistory();

    const { data: getPost } = useQuery(FETCH_POST_QUERY, {
        variables: {
            postId
        },
    });

    let renderPosts;
    if (!getPost) {
        renderPosts = <p>Loading post..</p>;
    } else {
        const {
            id,
            body,
            createdAt,
            username,
            likeCount,
            likes,
            commentCount,
            comments
        } = getPost.getPost;

        console.log(getPost.getPost.body)

        renderPosts = (
            <main className="single-post-container">
                <Button id="back-button" onClick={history.goBack}>back</Button>
                <Card fluid color="red">
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
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
            </main>
        );
    }
    return renderPosts;
}

const FETCH_POST_QUERY = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      createdAt
      username
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
