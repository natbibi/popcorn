import React from "react";
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
	const { user } = useAuth0();
	const { nickname, picture } = user;

	return (
		<main className="profile-container">
			<Image
				src={picture}
				alt="Profile"
				size="small"
				avatar
			/>
			<h3>Hey, {nickname}!</h3>

			<div className="hashtag-container">
				<h4>Trending Hashtags</h4>
				<p><Link>#D.P.</Link></p>
				<p><Link>#HesAllThat</Link></p>
				<p><Link>#TheChair</Link></p>
				<p><Link>#Clickbait</Link></p>
				<p><Link>#SuicideSquad</Link></p>
				<p><Link>#Vagabond</Link></p>
				<p><Link>#SuicideSquad</Link></p>
				<p><Link>#Brooklyn99</Link></p>
			</div>
		</main>
	);
};

export default Profile;