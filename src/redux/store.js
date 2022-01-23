import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { matrixAPI } from './matrixAPI'

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [matrixAPI.reducerPath]: matrixAPI.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(matrixAPI.middleware),
})
setupListeners(store.dispatch)
