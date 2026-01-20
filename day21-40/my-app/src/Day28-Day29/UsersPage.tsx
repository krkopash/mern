import UserTable from "./UserTable";
import Pagination from "./Pagination";
import { useUsers } from "./useUsers";

const UsersPage = () => {
  const { users, page, totalPages, setPage, setSearch, search } = useUsers();

  return (
    <div className="card wide">
      <div className="table-header">
        <h3>User Management</h3>
        <input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <UserTable users={users} />

      <Pagination
        page={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </div>
  );
};

export default UsersPage;
