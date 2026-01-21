import React from 'react';
import Component from './useCallback';
import Usememo from "./useMemo";
import"./App.css";
import { useFetch } from './useFetch';
interface User {
  id: number;
  name: string;
  username: string;
}

const App: React.FC = () => {
  const { data: user, loading, error } = useFetch<User>('https://jsonplaceholder.typicode.com/users');


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Component/><hr/>
      <Usememo/>
      {user ? (
        <>
          <h1>User Profile</h1>
          <p>ID: {user.id}</p>
          <p>name: {user.name}</p>
        </>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default App;
