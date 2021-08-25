import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Posts = ({ post: { body, createdAt, id, username, likeCount, commentCount, likes } }) => {
    console.log(body)
    return (
        <>
            <Card fluid color="red">
                <Card.Content>
                    <Card.Header>{username}</Card.Header>
                    <Image
                        floated='right'
                        size='mini'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    {body && body}

                </Card.Content>
            </Card>

        </>
    )
}

export default Posts;