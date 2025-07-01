import React, {useState} from "react";

const UserList = ({users, onUpdate, onDelete}) => {
  const [editingId, setEditingID] = useState(null);
  const [editForm, setEditForm] = useState({name: '', email: ''});

  const startEditing = (user) => {
    setEditingId(user._id);
    setEditForm({name: user.name, email: user.email});
  };

  const handleEditChange = (e) => {
    setEditForm({...editForm, [e.target.name]: e.target.value});
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onUpdate(editingId, editForm);
    setEditingId(null);
  }

  return (
    <ul>
        {users.map((user) => (
          <li key={user._id} style={{ marginBottom: "10px" }}>
            {editingId === user._id ? (
              <form onSubmit={handleEditSubmit}>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditChange}
                />
                <input
                  type="email"
                  name="email"
                  value={editForm.email}
                  onChange={handleEditChange}
                />
                <button type="submit">Save</button>
              </form>
            ) : (
              <>
                <span>{user.name} - {user.email}</span>
                <button onClick={() => startEditing(user)}>Edit</button>
                <button onClick={() => onDelete(user._id)}>Delete</button>
              </>
            )}
          </li>
        ))}
    </ul>
  )
}

export default UserList;
