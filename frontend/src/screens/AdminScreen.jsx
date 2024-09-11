import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../actions/userActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Table } from 'react-bootstrap';

const AdminScreen = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th></th>
          </thead>
          <tbody>
            {users &&
              users.length > 0 &&
              users.map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.isAdmin ? 'admin' : ''}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default AdminScreen;
