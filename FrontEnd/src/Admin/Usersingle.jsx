import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Specificuser } from '../Redux/Thunk/Thunk';
import { useParams } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';




export const Usersingle = () => {
  const { id } = useParams();
  const Dispacth = useDispatch()

  useEffect(()=>{
Dispacth(Specificuser(id))
  },[id,Dispacth])
  const singleuser = useSelector(state=>state.ApiSlice.singleuser)
  
  return (
   <>
   <div style={{display:"flex",justifyContent:"center" }}>
    <div className="profile-container">
    <div className="profile-content w-100 h-100" >
      <div className="profile-image">
      
          <img
            src={singleuser.ProfileImg}
            alt="User avatar"
            className="rounded-circle profile-avatar"
          />
        
       
       
      </div>
      <div className="profile-details">
        <h5 className="profile-name">Name:{singleuser.UserName}</h5>
        <h5 className="profile-email">Email:{singleuser.Email}</h5>
        <h5 className="profile-created-ate">Created Date:{singleuser.AccountCreatedDate}</h5>

        <MDBBtn className='me-1' color='danger'>
       block
      </MDBBtn>


      </div>
    </div>
  </div>
  </div>
  </>
  )
}
