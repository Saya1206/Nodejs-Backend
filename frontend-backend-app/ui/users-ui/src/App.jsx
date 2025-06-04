import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
  };

  const addUser = async (user) => {
    try {
      const res = await axios.post("http://localhost:3000/users", user);
      setUsers([...users, res.data.user]);
    } catch (err) {
      alert(err.response?.data?.message || "Error adding user");
    }
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management</h1>
      <UserForm onAdd={addUser} />
      <UserList users={users} onDelete={deleteUser} />
    </div>
  );
}

export default App;
