import {configureStore} from "@reduxjs/toolkit"
import cultureContentSlice from "./features/culture-content-key-slice"

export const store = configureStore({
    reducer: {
        content: cultureContentSlice,
    }
})