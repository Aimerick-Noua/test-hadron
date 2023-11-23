// UserList.js
import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { setUserData } from './UserReducer';
import UserTable from './UserTable';
import { Link } from 'react-router-dom';

const userListQuery = gql`
  {
    users {
      id
      first_name
      last_name
      email
      birth_date
      gender
    }
  }
`;

const UserList = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(userListQuery);

  useEffect(() => {
    if (data && data.users) {
      dispatch(setUserData(data.users));
    }
  }, [data, dispatch]);

  if (loading) return 'Loading';
  if (error) return error.message;

  return (
    <div className="p-8">
      <div className="p-8 h-8">
        <h1 className="text-center text-white text-xl">UserDemo App</h1>
      </div>

      <div style={{ marginTop: '5%', width: '100%' }}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-8 py-1 px-2 rounded float-right">
          <Link to="/addUser">Créer un utilisateur +</Link>
        </button>

        <UserTable />
      </div>
    </div>
  );
};

export default UserList;
