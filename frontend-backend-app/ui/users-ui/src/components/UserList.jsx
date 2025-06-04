import React from "react";

function UserList({ users, onDelete }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> ({user.age}) - {user.email}
          <button
            onClick={() => onDelete(user.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
