import React, { useRef, useState, useEffect } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
// eslint-disable-next-line
import { firestore } from '../firebase';

function ArrayTest() {
	const [inputs, setInputs] = useState({
		username: '',
		email: '',
	});

	const { username, email } = inputs;

	const onChange = (e) => {
		const { name, value } = e.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	const [users, setUsers] = useState([]);
	const nextId = useRef(1);

	const refresh_list = () => {
		nextId.current = 1;
		const new_users = []
		firestore
			.collection('User')
			.get()
			.then((snapshot) => {
				snapshot.forEach((doc) => {
					const user = {
						id: nextId.current,
						username: doc.data().name,
						email: doc.data().email
					};
					new_users.push(user)
					nextId.current += 1;
					
				});
			setUsers(new_users);
			});


	};

	 useEffect(() => {
		 refresh_list();
		 // eslint-disable-next-line
  		}, []);
	
	const onCreate = () => {
		firestore
		.collection('User')
		.add({
			name: username,
			email: email
		})
		refresh_list();
		setInputs({
			username: '',
			email: '',
		});
		
	};
	
	return (
		<>
		
			<CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
			<br />
			<UserList users={users} />
		</>
	);
}

export default ArrayTest;