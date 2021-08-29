import React from 'react';
import { Card, Image, Button, Label, Icon } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import { DeleteButton, LikeButton } from '../'

const Posts = ({ post: { body, createdAt, id, username, likeCount, commentCount, likes, userAvatar } }) => {
    const { user } = useAuth0();
    const { sub } = user;
    const mongoId = sub.substring(6)

    return (
        <>
            <Card fluid color="red">
                <Card.Content>
                    <Image
                        floated='right'
                        size='big'
                        src={userAvatar}
                        avatar
                    />
                    <Card.Header>{username}</Card.Header>
                    <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
                    <Card.Description>{body}</Card.Description>

                </Card.Content>
                <Card.Content extra>
                    <LikeButton user={user} post={{ id, likes, likeCount }} />

                    <Button as='div' labelPosition='right' as={Link} to={`/posts/${id}`}>
                        <Button color='pink' basic>
                            <Icon name='comments' />
                        </Button>
                        <Label basic color='pink' pointing='left'>
                            {commentCount}
                        </Label>
                    </Button>
                    {user && user.nickname === username && <DeleteButton postId={id} mongoId={mongoId}/>}
                </Card.Content>
            </Card>
        </>
    )
}

export default Posts;