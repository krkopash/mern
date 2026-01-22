import { useEffect, useMemo, useState } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "User";
};

const USERS_PER_PAGE = 5;

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Simulated API response
    const fakeUsers: User[] = Array.from({ length: 27 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: i % 4 === 0 ? "Admin" : "User",
    }));

    setUsers(fakeUsers);
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);

  const paginatedUsers = useMemo(() => {
    const start = (page - 1) * USERS_PER_PAGE;
    return filteredUsers.slice(start, start + USERS_PER_PAGE);
  }, [filteredUsers, page]);

  return {
    users: paginatedUsers,
    page,
    totalPages,
    setPage,
    setSearch,
    search,
  };
};
