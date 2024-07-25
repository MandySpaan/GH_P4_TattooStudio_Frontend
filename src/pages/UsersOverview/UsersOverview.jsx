import React, { useEffect, useState } from "react";
import { deleteUserById, getAllUsers } from "../../services/apiCalls";
import "./UsersOverview.css";

export const UsersOverview = () => {
  const [users, setUsers] = useState([]);

  const passport = JSON.parse(localStorage.getItem("passport"));

  useEffect(() => {
    const bringAllUsers = async () => {
      const response = await getAllUsers(passport.token);
      setUsers(response.data);
      console.log(response);
    };
    bringAllUsers();
  }, [passport.token]);

  const deleteUserHandler = async (e) => {
    const id = +e.target.name;
    const response = await deleteUserById(passport.token, id);
    if (response.success) {
      const remainingUsers = users.filter((user) => {
        if (user.id !== id) {
          return user;
        }
      });
      setUsers(remainingUsers);
    }
  };

  return (
    <div className="user-list-container">
      <h1 className="user-list-title">Users Overview</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Active</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.role.roleName}</td>
              <td>{user.isActive ? "Yes" : "No"}</td>
              <td>{new Date(user.createdAt).toLocaleString()}</td>
              <td>{new Date(user.updatedAt).toLocaleString()}</td>
              <td>
                <input
                  type="button"
                  value="Delete"
                  name={user.id}
                  onClick={deleteUserHandler}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
