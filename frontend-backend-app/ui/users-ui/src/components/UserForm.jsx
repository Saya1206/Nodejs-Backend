import React, { useState } from "react";

function UserForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", age: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ageNumber = parseInt(form.age);
    if (!form.name || !ageNumber || !form.email) {
      alert("All fields are required.");
      return;
    }
    onAdd({ name: form.name.trim(), age: ageNumber, email: form.email });
    setForm({ name: "", age: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
