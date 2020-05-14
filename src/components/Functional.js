import React from 'react';

const Functional = props => {
	return (
		<div>
			<span>Picture URL: </span>
			<input
				placeholder='Add URL here...'
				onChange={e => props.updatePicture(e.target.value)}
				value={props.picture}
			/>
			<span>Friend name: </span>
			<input
				placeholder='Add name...'
				onChange={e => props.updateName(e.target.value)}
				value={props.name}
			/>
			<button onClick={() => props.addFriend()}>Add Friend</button>
		</div>
	);
};

export default Functional;
