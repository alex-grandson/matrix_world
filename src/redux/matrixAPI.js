import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const matrixAPI = createApi({
    reducerPath: 'matrixAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/'}),
    endpoints: (builder) => ({
        getHumanById: builder.query({
            query: id => `/human?${id && `id=${id}`}`
        }),
        getLocationsList: builder.query({
            query: id => `/location?${id && `id=${id}`}`
        })
    })
})

export const {
    useGetHumanByIdQuery,
    useGetLocationListQuery
} = matrixAPI