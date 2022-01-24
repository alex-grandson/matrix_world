import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const matrixAPI = createApi({
    reducerPath: 'matrixAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/'}),
    endpoints: (builder) => ({
        getSubjectById: builder.query({
            query: id => `/subject?${id && `id=${id}`}`
        }),
        editSubject: builder.mutation({
            query: (body = {}) => {
                const { id } = body;
                return { url: `subject/${id}`, method: 'PATCH', body:  { ...body } };
            }
        }),
        getSubjectByLocationNumber: builder.query({
            query: location_number => `/subject?${location_number && `location_number=${location_number}`}`
        }),
        getLocationByWoldNumber: builder.query({
            query: world_number => `/location?${world_number && `world_number=${world_number}`}`
        })
    })
})

export const {
    useGetSubjectByIdQuery,
    useEditSubjectMutation,
    useGetLocationByWoldNumberQuery,
    useGetSubjectByLocationNumberQuery
} = matrixAPI