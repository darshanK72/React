import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isLoading: true,
    students: [],
    count: 0,
    error: ''
}

export const fetchStudents = createAsyncThunk('students/fetch', async () => {
    const response = await axios.get('http://localhost:3000/students');
    return response.data;
})

const studentSlice = createSlice({
    name: 'students',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudents.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.isLoading = false;
                state.students = action.payload;
                state.count = action.payload?.length
            })
            .addCase(fetchStudents.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
})

export default studentSlice.reducer;