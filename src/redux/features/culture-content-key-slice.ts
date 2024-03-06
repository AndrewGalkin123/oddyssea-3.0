import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export const cultureContentSlice = createSlice({
    name: "contentKey",
    initialState: {
        contentKey: "Eclecticism"
    },
    reducers: {
        setContentKey: (state, action) => {
            state.contentKey = action.payload;
        }
    }
})

export const { setContentKey } = cultureContentSlice.actions;
export default cultureContentSlice.reducer;