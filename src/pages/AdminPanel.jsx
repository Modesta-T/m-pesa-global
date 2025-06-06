import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", subscription: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", subscription: "Inactive" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", subscription: "Active" },
];

const AdminPanel = () => {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== "admin") {
    return <p>Access denied. You must be an admin to view this page.</p>;
  }

  return (
    <div className="admin-panel">
      <h2>Admin Panel - User Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subscription</th>
            <th>Actions</th>
          </tr>
        </thead>
       <tbody>
  {mockUsers.map((u) => (
    <tr key={u.id}>
      <td data-label="Name">{u.name}</td>
      <td data-label="Email">{u.email}</td>
      <td data-label="Subscription">{u.subscription}</td>
      <td data-label="Actions">
        <button onClick={() => alert(`Suspended user ${u.name}`)}>Suspend</button>
        <button onClick={() => alert(`Deleted user ${u.name}`)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
