import React from "react";
import { gql, useMutation } from '@apollo/client'
import { Button } from 'semantic-ui-react';


import { FETCH_POSTS_QUERY } from '../../graphql';

const DeleteButton = ({ postId, mongoId, commentId }) => {
	const userId = mongoId

	const mutation = commentId ? DELETE_COMMENT_MUTATION : DELETE_POST_MUTATION;

	const [deleteOnClick] = useMutation(mutation, {
		variables: {
			postId,
			userId,
			commentId
		},
		update(proxy) {
			if (!commentId) {
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
		}
	})

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

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($postId: String!, $commentId: String!){
    deleteComment(postId: $postId, commentId: $commentId){
		id
		comments {
			id username body createdAt 
		}
		commentCount
	}
  }
`

export default DeleteButton;