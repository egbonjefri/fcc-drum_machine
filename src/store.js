import { configureStore } from '@reduxjs/toolkit'

import drumSlice from './Drums'

export const store = configureStore({
    reducer: {
        counter: drumSlice,
    },
})