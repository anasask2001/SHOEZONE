import { createSlice } from "@reduxjs/toolkit";
import {  Getproducts, Orderstotal, Specificuser, decreament, fetchwishlistitems, getCartlength, increament, showitembyid, specificitem,status,userorder,viewallproducts, viewcart, viewusers } from "../Thunk/Thunk";

export const ApiSlice = createSlice ({
    name:"api",
    initialState:{
        Products : [],
        Wislist:[],
        SingleProduct:[],
        cart:[],
        increament:1,
        decreament:1,
        cartlength:0,
        users:[],
        singleuser:[],
        adminproducts:[],
        singleproduct:[],
        totals:{    
          totalRevenue: 0,
          totalProduct: 0},
      orderstotal :[],
      userorder:[]

      
    
        
    },
    extraReducers:(builder)=>{
        builder.addCase(Getproducts.fulfilled,(state,action)=>{
            state.Products = action.payload
        })
        .addCase(fetchwishlistitems.fulfilled,(state,action)=>{
            state.Wislist=action.payload
        })
        .addCase(showitembyid.fulfilled,(state,action)=>{
            state.SingleProduct=action.payload
        })
        
        .addCase(viewcart.fulfilled,(state,action)=>{
            state.cart=action.payload
        })
        .addCase(increament.fulfilled,(state,action)=>{
            state.increament=action.payload
        })
        .addCase(decreament.fulfilled,(state,action)=>{
            state.decreament =action.payload
        })
        .addCase(getCartlength.fulfilled,(state,action)=>{
            state.cartlength = action.payload
        })
      .addCase(viewusers.fulfilled,(state,action)=>{
        state.users = action.payload
      })
      .addCase(Specificuser.fulfilled,(state,action)=>{
        state.singleuser = action.payload
      })
      .addCase(viewallproducts.fulfilled,(state,action)=>{
        state.adminproducts = action.payload
      })
      .addCase(specificitem.fulfilled,(state,action)=>{
        state.singleproduct = action.payload
      })
     .addCase(status.fulfilled,(state,action)=>{
      state.totals = action.payload
     })
     .addCase(Orderstotal.fulfilled,(status,action)=>{
      status.orderstotal = action.payload
     })
     .addCase(userorder.fulfilled,(status,action)=>{
      status.userorder = action.payload
     })
        
    }
})


export default ApiSlice.reducer