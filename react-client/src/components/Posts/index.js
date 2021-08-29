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
                    < Card.Header > {username}</Card.Header>
                    <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
                    <Card.Description>{body}</Card.Description>

                </Card.Content>
                <Card.Content extra>
                    <LikeButton user={user} post={{ id, likes, likeCount }} />
                    <Link to={`/posts/${id}`}>
                        <Button as='div' labelPosition='right'>
                            <Button color='pink' basic>
                                <Icon name='comments' />
                            </Button>
                            <Label basic color='pink' pointing='left'>
                                {commentCount}
                            </Label>
                        </Button>
                    </Link>
                    {user && user.nickname === username && <DeleteButton postId={id} mongoId={mongoId} />}
                </Card.Content>
            </Card>
        </>
    )
}

export default Posts;