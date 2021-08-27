import React from "react";
import { gql, useMutation } from '@apollo/client'
import { Button } from 'semantic-ui-react';


import { FETCH_POSTS_QUERY } from '../../graphql';

const DeleteButton = ({ postId, mongoId }) => {
	const userId = mongoId

	const [deleteOnClick, { error }] = useMutation(DELETE_POST_MUTATION, {
		variables: {
			postId,
			userId
		},
		update(proxy) {
			const data = proxy.readQuery({
				query: FETCH_POSTS_QUERY
			});
			let newData = [...data.getPosts];
			newData = [data.getPosts.filter((p) => p.id !== postId)];
			proxy.writeQuery({
				query: FETCH_POSTS_QUERY,
				data: {
					...data,
					getPosts: {
						newData,
					},
				},

			})
		}
	})

	console.log(JSON.stringify(error, null, 2));

	return (
		<Button
			floated="right"
			onClick={deleteOnClick}>
			Delete
		</Button>
	);
};

const DELETE_POST_MUTATION = gql`
  mutation deletePost($postId: String!, $userId: String!){
    deletePost(postId: $postId, userId: $userId)
  }
`

export default DeleteButton;