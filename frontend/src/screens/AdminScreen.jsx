import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../actions/userActions';

const AdminScreen = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <div>
      AdminScreen
      {users && users.length > 0 && users.map((item) => <div>{item.name}</div>)}
    </div>
  );
};

export default AdminScreen;
