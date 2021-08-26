import React from "react";
import { Form, Button } from 'semantic-ui-react';
import { gql, useMutation } from '@apollo/client'

import { FETCH_POSTS_QUERY } from '../../graphql'

const CreatePost = () => {


    return (
        <>

            <Form fluid>
                <h4>Share your thoughts!</h4>
                <Form.Field>
                    <Form.Input
                        placeholder="What have you been watching? 🎬"
                        name="body"
                    />
                    <Button type="submit" >
                        Post!
                    </Button>
                </Form.Field>
            </Form>

        </>
    );
};

const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      username
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;

export default CreatePost;