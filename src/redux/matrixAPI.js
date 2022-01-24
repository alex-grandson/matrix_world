import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const matrixAPI = createApi({
    reducerPath: 'matrixAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/'}),
    endpoints: (builder) => ({
        getSubjectById: builder.query({
            query: id => `/subject?${id && `id=${id}`}`
        }),
        editSubjectAbilities: builder.mutation({
            query: (body = {}) => {
                const { id } = body;
                return { url: `subject/${id}`, method: 'PATCH', body:  { ...body } };
            }
        }),
        getLocationsList: builder.query({
            query: id => `/location?${id && `id=${id}`}`
        })
    })
})

export const {
    useGetSubjectByIdQuery,
    useEditSubjectAbilitiesMutation
} = matrixAPI