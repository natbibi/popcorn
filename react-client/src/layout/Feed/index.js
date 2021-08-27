import React from "react";
import { useQuery } from '@apollo/client';
import { Grid, Transition } from 'semantic-ui-react';
import { useAuth0 } from "@auth0/auth0-react";

import { CreatePost } from "../../components";
import { Posts } from '../../components';
import { FETCH_POSTS_QUERY } from '../../graphql';


const Feed = () => {
    const { user } = useAuth0();
    const { loading, error, data } = useQuery(FETCH_POSTS_QUERY);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <>
            <main className="feed-container">
                {user &&
                    <CreatePost />}
                {loading ? (
                    <h1>Loading posts..</h1>
                ) : (
                    <Transition.Group>
                        {data &&
                            data.getPosts.map((post) => (
                                <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                                    <Posts post={post} />
                                </Grid.Column>
                            ))}
                    </Transition.Group>
                )}
            </main>
        </>
    );
};

export default Feed;