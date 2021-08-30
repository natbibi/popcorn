import React, { useState } from "react";
import { Form, Button } from 'semantic-ui-react';
import { gql, useMutation } from '@apollo/client'
import { useAuth0 } from "@auth0/auth0-react";

import { FETCH_POSTS_QUERY } from '../../graphql';

const CreatePost = () => {
    const { user } = useAuth0();
    const { sub } = user;
    const mongoId = sub.substring(6)
    const userAvatar = user.picture

    const [values, setValues] = useState({ body: "", userId: mongoId, userAvatar: userAvatar });

    const onChange = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        sendFormData();
    };

    const [sendFormData, { error }] = useMutation(CREATE_POST_MUTATION, {
        variables: values,
        update(proxy, result) {
            const data = proxy.readQuery({
                query: FETCH_POSTS_QUERY
            });
            let newData = [...data.getPosts];
            newData = [result.data.createPost, ...newData];
            proxy.writeQuery({
                query: FETCH_POSTS_QUERY,
                data: {
                    ...data,
                    getPosts: {
                        newData,
                    },
                },
            });
            values.body = '';
        }
    })



    console.log(JSON.stringify(error, null, 2));

    return (
        <>

            <Form onSubmit={onSubmit}>
                <h4>Share your thoughts!</h4>
                <Form.Field>
                    <Form.Input
                        placeholder="What have you been watching? 🎬"
                        name="body"
                        autoComplete="off"
                        value={values.body}
                        onChange={onChange}
                        error={error ? true : false}
                    />
                    <Button type="submit" inverted color="orange">
                        Post!
                    </Button>
                </Form.Field>
            </Form>

            {error && (
                <div className="ui error message" style={{ marginBottom: "1rem", marginTop: "0" }}>
                    {error.graphQLErrors[0].message}
                </div>
            )}
        </>
    );
};


const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!, $userId: ID!, $userAvatar: String!) {
    createPost(body: $body, userId: $userId, userAvatar: $userAvatar) {
      id
      body
      createdAt
      username
      userAvatar
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