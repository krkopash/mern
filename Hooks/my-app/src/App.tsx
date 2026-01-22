import UserList from './UserList';
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
    return <p>Please wait.........❗</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
   
    <div className='box'>
      <div className="container">
       <Component/><hr/>
       <Usememo/><hr/>
       <UserList />
    </div>

    </div>
  );
};

export default App;
