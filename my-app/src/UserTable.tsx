import type { User } from "./useUsers";

type Props = {
  users: User[];
};

const UserTable = ({ users }: Props) => {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>

      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>
              <span className={`badge ${u.role.toLowerCase()}`}>
                {u.role}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
