// Compare this snippet from crud-app/frontend/src/componenets/UserList.jsx:

import React, {useState} from "react";

const UserForm = ({onAdd}) => {
    const [user, setUser] = useState({name: '', email: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email) {
      onAdd(user);
      setUser({name: '', email: ''});
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({...user, name: e.target.value})}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        required
      />
      
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;


