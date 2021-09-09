import React from 'react';

function User({ user }) {

  return (
    <>
      <b>{user.username}</b> <span>({user.email})</span>
	  <br />
    </>
  );
}

function UserList({ users }) {

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;