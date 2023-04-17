import { createSlice } from '@reduxjs/toolkit'

const developerInit = {
    name: "Syafira Aliffinda Komala",
    nim: 120140248,
}

export const developer = createSlice({
    name: "developer",
    initialState: {...developerInit},
    reducers: {
        //
    }
})

export default developer.reducer;