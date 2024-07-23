import React, { useEffect } from 'react';
import {  MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { viewusers } from '../Redux/Thunk/Thunk';

export const Userscheck = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(viewusers());
  }, [dispatch]);

  const users = useSelector(state => state.ApiSlice.users);


  const handleclick = (userId) => {
    navigate(`/Usersingle/${userId}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: "center" }}>
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Email</th>
            <th scope='col'>UserName</th>
            <th scope='col'>Profile</th>
          </tr>
        </MDBTableHead>

        <MDBTableBody>
          {users?.map((user) => (
            user.role !== 'admin' &&
            <tr key={user._id}>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='ms-3'>
                    <p className='text-muted mb-0'>{user.Email}</p>
                    <button style={{ backgroundColor: "black", color: "white" }} onClick={() => handleclick(user._id)}>Visit</button>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>{user.UserName}</p>
              </td>
              <td>
                <img 
                  src={user.ProfileImg}
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};
