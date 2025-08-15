import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import httpClient from "../httpClient";
import { ITransactionList, ITransactionListState } from "../interface/transactions-list";


const initialState: ITransactionListState = {
    loading: false,
    success: false,
    error: false, 
    transactionList: [],
}

export const getTransactions = createAsyncThunk<ITransactionList[], void>("get-transactions",
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem("accessToken");
            const response = await httpClient.get<ITransactionList[]>(import.meta.env.VITE_GET_GET_TRANSACTIONS, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to fetch transactions");
            }
            return thunkAPI.rejectWithValue("An unknown error occurred");
        }
    }
);

const getTransactionsSlice = createSlice({
    name: "get-transactions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTransactions.pending, (state) => {
            state.loading = true;
            state.success = false;
            state.error = false;
            state.errorMessage = undefined
        });
        builder.addCase(getTransactions.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = false;
            state.transactionList = action.payload;
        });
        builder.addCase(getTransactions.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = true;
            state.errorMessage = action.payload as string;
        });
    },
});

export default getTransactionsSlice.reducer;