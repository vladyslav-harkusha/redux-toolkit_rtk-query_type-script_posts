import React, { useEffect } from 'react';

import './App.scss';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {
  const dispatch = useAppDispatch();
  const {users, isLoading, error} = useAppSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  
  return (
    <div className="app">
      { isLoading && <h1>Loading users ...</h1> }

      { error && <h1>Loading users error: {error}</h1> }

      {JSON.stringify(users, null, 2)}
    </div>
  );
}

export default App;
