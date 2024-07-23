import { configureStore } from '@reduxjs/toolkit';
import ApiSlice from '../Slice/ApiSlice';



export const Store = configureStore({
    reducer:{
        ApiSlice
    }
})