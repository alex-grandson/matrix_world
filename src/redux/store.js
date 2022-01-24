import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { matrixAPI } from './matrixAPI'

export const store = configureStore({
    reducer: {
        [matrixAPI.reducerPath]: matrixAPI.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(matrixAPI.middleware),
})
setupListeners(store.dispatch)
