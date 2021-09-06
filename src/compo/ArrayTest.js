import React, { useRef, useState  } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function ArrayTest() {

   const nextId2 = { current: 3 };
	
   const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
	
  const { username, email } = inputs;
	
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
	
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'hyeondong',
      email: 'hyeondong0686@gmail.com'
    },
    {
      id: 2,
      username: 'lagyo',
      email: 'lagyo@gmail.com'
    },	  
  ]);

  const nextId = useRef(3);
	
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
	nextId2.current += 1;
	console.log(nextId.current)
	console.log(nextId2.current)
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default ArrayTest;