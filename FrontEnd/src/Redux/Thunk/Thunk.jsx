import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import adminconfig, { adminconsfig1 } from "../../User/Utils/Adminconfig";
import userconsfig from "../../User/Utils/Config";
import adminconsfig from "../../User/Utils/Adminconfig";





//products
export const Getproducts = createAsyncThunk("Getproducts",async()=>{
try {
    const response = await axios.get(`http://localhost:3020/api/users/products`);
    return response.data
} catch (error) {
    console.log(error.response.data);
}
})

//register
export const userregister = createAsyncThunk("userregister",async(formData)=>{
 

    try {

     
        const response = await axios.post(
          "http://localhost:3020/api/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data" 
          }
        }
        );
        toast.success(response.data.message);
       
   
      } catch (error) {
        toast.error(error.response.data.message);
      }
})

//login
export const userlogin = createAsyncThunk("userlogin",async(login)=>{
    try {
        const response = await axios.post(
          "http://localhost:3020/api/users/login",
          {
            Email: login.Email,
            Password: login.Password,
          }
        );
  
        const { _id, UserName, Email,ProfileImg } = response.data.details;
        const { TokenUser: token, message } = response.data;
  
        localStorage.setItem("id", _id);
        localStorage.setItem("username", UserName);
        localStorage.setItem("token", token);
        localStorage.setItem("email", Email);
        localStorage.setItem("profileimage",ProfileImg)
  
     
        toast.success(message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
})



//addtocart

export const Addtocart  = createAsyncThunk ("Addtocart",async({userid,id})=>{

    try {
       const response =  await axios.post(
          `http://localhost:3020/api/users/${userid}/cart/${id}`,{},userconsfig
        )
        toast.success(response.data.message);
        
        
      } catch (error) {
        console.error(error.response);
      }
})


//addto wishlist
export const Addtowishlist = createAsyncThunk("Addtowishlist",async({userid,id})=>{
    try {
       const response =await axios.post(
          `http://localhost:3020/api/users/${userid}/wishlist/${id}`,{},userconsfig
      
        );
        toast(response.data.message, {
          icon: '♥',
        });
      
      

      } catch (error) {
        
      }
})

//deletewishlist
export const deletewishlist  = createAsyncThunk("deletewishlist",async({userid,id})=>{
    try {
        const response = await axios.delete(
          `http://localhost:3020/api/users/${userid}/wishlist/${id}/remove`, userconsfig
        );
        return response.data
      } catch (error) {
        console.error(error.response);
      }
})

//wishlistitems
export const fetchwishlistitems = createAsyncThunk("fetchwishlistitems",async({userid})=>{
    try {
        const response = await axios.get(
          `http://localhost:3020/api/users/${userid}/wishlist`, userconsfig
        );
        return response.data
      } catch (error) {
        console.error(error.response.data);
      }
})

//show item by id
export const showitembyid = createAsyncThunk("showitembyid",async(id)=>{
    try {
        const response = await axios.get(
            `http://localhost:3020/api/users/products/${id}`,userconsfig)
          return response.data.product
    } catch (error) {
        ;console.log(error.response.data);
    }
})



//showcart
export const viewcart = createAsyncThunk("viewcart",async(userid1)=>{
    try {
        const response = await axios.get(
          `http://localhost:3020/api/users/${userid1}/cart`,
          userconsfig
        );
        return response.data
        
      } catch (error) {
        console.error(
          "Error fetching cart data:",
          error.response ? error.response.data : error
)}
})


//cart product increament
export const increament = createAsyncThunk("increament",async({id,userid1})=>{
    try {
        console.log(id);
        const response = await axios.patch(`http://localhost:3020/api/users/${userid1}/cart/${id}/increament`, {},userconsfig)
        return response.data
      } catch (error) {
       console.log(error.response.data);
      }
})

//cart product decrement
export const decreament = createAsyncThunk("decreament",async({id,userid1})=>{

  
    try {
       const response =  await axios.patch(`http://localhost:3020/api/users/${userid1}/cart/${id}/decreament`,{},userconsfig)
      
        return response.data
      } catch (error) {
       console.log(error.response.data);
      }
})

//take cartlength
export const getCartlength = createAsyncThunk('getcartlength' , async (userid1)=>{
    try {
        const response = await axios.get(
            `http://localhost:3020/api/users/${userid1}/cart`,userconsfig
          );
          return response.data.length
        
    } catch (error) {
        console.log(error.response.data);
    }
})


//deletecart item
export const deletecartitem = createAsyncThunk(
  "deletecartitem",
  async ({ id, userid1 }) => {
    try {
       await axios.delete(
        `http://localhost:3020/api/users/${userid1}/cart/remove/${id}`, userconsfig
      );
    } catch (error) {
      console.log(error.response.data);
    }
  }
);


//each user Order
export const userorder = createAsyncThunk("userorder",async(Id)=>{
  try {
    const response =await axios.get(`http://localhost:3020/api/users/userorder/${Id}`,userconsfig)
    return response.data
  } catch (error) {
    console.log(error.response);
  }
})


////////////////////////////////////////////////ADMIN/////////////////////////////////////////////////////////////////////////////////////////////
//admin login
export const adminlogin = createAsyncThunk("adminlogin",async(login)=>{
  try {
    const response = await axios.post(`http://localhost:3020/api/admin/adminlogin`,{
      Email: login.Email,
      Password: login.Password
    })
    if(response.status === 200){
     const{admintoken:admintoken}=response.data

      localStorage.setItem("admin",login.Email)
      localStorage.setItem("admintoken",admintoken)

      toast.success(response.data.message);
  
      return response.data
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
})

//view users 
export const viewusers = createAsyncThunk("viewusers",async()=>{
  try {
    const response  = await axios.get(`http://localhost:3020/api/admin/viewallusers`,adminconfig)
    return response.data
  } catch (error) {
    console.log(error.response.data);
  }
})

//viewspecif user
export const Specificuser = createAsyncThunk("Specificuser",async(id)=>{
  try {
    const response = await axios.get(`http://localhost:3020/api/admin/viewusers/${id}`,adminconfig)
    return response.data
    
  } catch (error) {
    console.log(error.response.data);
  }
})

//view all products admin
export const viewallproducts = createAsyncThunk("viewallproducts",async()=>{
  try {
    const response  = await axios.get(`http://localhost:3020/api/admin/showproducts`,adminconfig)
  
    return response.data
    
  } catch (error) {
    console.log(error.response.data);
  }

})

//view specific item admin 
export const specificitem = createAsyncThunk("specificitem",async(id)=>{
  try {
    const response = await axios.get(`http://localhost:3020/api/admin/showproducts/${id}`,adminconfig)
    return response.data
  } catch (error) {
    
  }
})


//update admin product
export const updateproductadmin = createAsyncThunk(
  "updateproduct",
  async ({ id, update }) => {
    
    try {
  
      const response = await axios.patch(
        `http://localhost:3020/api/admin/updateproduct/${id}`,
        update,adminconsfig1
       
      );
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);


// product delete admin
export const deleteperoductadmin = createAsyncThunk("deleteperoductadmin",async(id)=>{
  try {
    const response  = await axios.delete(`http://localhost:3020/api/admin//deleteproduct/${id}`,adminconfig)
    toast.success(response.data.message);
    
    return response.data
  } catch (error) {
    console.log(error.response.data);
    
  }
})

//addproduct new admin
export const addproductadmin = createAsyncThunk(
  'addproductadmin',
  async (formData) => {
    try {
      const response = await axios.post(
        'http://localhost:3020/api/admin/products',
        formData,
        adminconsfig
      );
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      toast.error('Failed to add product');
      throw error; 
    }
  }
);

//total purchase and revenue 
export const status = createAsyncThunk("status",async()=>{
  try {
    const response = await axios.get(`http://localhost:3020/api/admin/status`,adminconfig)
    return response.data
   
  } catch (error) {
    console.log(error.response.data);
    
  }
})

//orders
export const Orderstotal = createAsyncThunk("Orders",async()=>{
  try {
    
const response = await axios.get(`http://localhost:3020/api/admin/showorders`,adminconfig)
return response.data

  } catch (error) {
    console.log(error.response.data);
  }
})

