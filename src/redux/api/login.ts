// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import axios from "axios"
// import httpClient from "../httpClient"

// const initialState = {
//     loading: false,
//     success: false,
//     error: false,
//     accessToken: '',
//     refreshToken: ''
// }

// export const loginUserAPI = createAsyncThunk<any, any>("login-user-api", async (param, thunkAPI) => {
//     try {
//         const response = await httpClient.post(import.meta.env.VITE_SIGN_IN, param)
//         return response.data
//     } catch (error) {
//         if (axios.isAxiosError(error)) {
//             return thunkAPI.rejectWithValue({
//                 message: error.message,
//                 code: error.code,
//                 response: error.response ? {
//                     status: error.response.status,
//                     data: error.response.data
//                 } : null
//             });
//         }
//         return thunkAPI.rejectWithValue({ message: "An unknown error occurred" });
//     }
// })


// //Pending - waiting ng app sa API..
// //Fulfilled - 
// //Slice, maramihang data...
// const login = createSlice({
//     name: "login",
//     initialState,
//     reducers: {
//         logout() {

//         }
//     },
//     extraReducers(builder) {
//         builder.addCase(loginUserAPI.pending, (state) => {
//             state.loading = true
//             state.success = false
//             state.error = false
//         })
//         builder.addCase(loginUserAPI.fulfilled, (state, action) => {
//             state.loading = false
//             state.success = true
//             state.error = false
//             state.accessToken = action.payload.accessToken
//             state.refreshToken = action.payload.refreshToken
//         })
//         builder.addCase(loginUserAPI.rejected, (state) => {
//             state.success = false
//             state.error = true
//             state.loading = false

//         })
//     },
// })

// const { actions, reducer } = login

// export const { logout } = actions
// export default reducer