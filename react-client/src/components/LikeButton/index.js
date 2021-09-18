import React, { useEffect, useState } from "react";
import { Button, Icon, Label } from 'semantic-ui-react';
import { useMutation, gql } from "@apollo/client";

const LikeButton = ({ user, post: { id, likes, likeCount } }) => {
    const [liked, setLiked] = useState(false);
    const sub = user.sub;
    const mongoId = sub.substring(6);

    useEffect(() => {
        if (user && likes.find((like) => like.username === user.nickname)) {
            setLiked(true);
        } else setLiked(false);
    }, [user, likes]);

    const likeButton = user ? (
        liked ? (
            <Button color='red'>
                <Icon name='heart' />
            </Button>
        ) : (
            <Button color='red' basic>
                <Icon name='heart' />
            </Button>
        )
    ) : (
        <Button color='red' basic>
            <Icon name='heart' />
        </Button>
    )

    const [likePost] = useMutation(LIKE_POST_MUTATION, {
        variables: { userId: mongoId, postId: id }
      });
    
    return (
        <Button as='div' labelPosition='right' onClick={likePost}>
            {likeButton}
            <Label basic color='red' pointing='left'>
                {likeCount}
            </Label>
        </Button>
    );
};

const LIKE_POST_MUTATION = gql`
    mutation likePost($userId: ID!, $postId: ID!){
        likePost(userId: $userId, postId: $postId){
            id
            likes{
                id username
            }
            likeCount
        }
    }
`

export default LikeButton;