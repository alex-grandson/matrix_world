import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const matrixAPI = createApi({
    reducerPath: 'matrixAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/'}),
    endpoints: (builder) => ({
        getUserById: builder.query({
            query: id => `/user?${id && `id=${id}`}`
        }),
        getUserListByWorld: builder.query({
            query: world => `user?${world && `world=${world}`}`
        })

    })
})

export const {
    useGetUserByIdQuery,
    useGetUserListByWorld
} = matrixAPI