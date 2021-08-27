import React from 'react';
import { Card, Image, Button, Label, Icon } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Posts = ({ post: { body, createdAt, id, username, likeCount, commentCount, likes } }) => {

    function likePost() {
        console.log('like post')
    }

    function addComment() {
        console.log('commented')
    }

    return (
        <>
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
                    <Button as='div' labelPosition='right' onClick={likePost}>
                        <Button color='red' basic>
                            <Icon name='heart' />
                        </Button>
                        <Label basic color='red' pointing='left'>
                            {likeCount}
                        </Label>
                    </Button>

                    <Button as='div' labelPosition='right' onClick={addComment}>
                        <Button color='pink' basic>
                            <Icon name='comments' />
                        </Button>
                        <Label basic color='pink' pointing='left'>
                            {commentCount}
                        </Label>
                    </Button>
                </Card.Content>
            </Card>
        </>
    )
}

export default Posts;