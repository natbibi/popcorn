import React from "react";
import { Image } from 'semantic-ui-react';

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
	const { user } = useAuth0();
	const { nickname, picture, email } = user;

	return (
		<main className="profile-container">
			<Image
				src={picture}
				alt="Profile"
				size="small"
				avatar
			/>
			<h3>Hey, {nickname}!</h3>
		</main>
	);
};

export default Profile;