import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {FAKE_SERVER, PROD_SERVER} from "../constants";

export const matrixAPI = createApi({
    reducerPath: 'matrixAPI',
    baseQuery: fetchBaseQuery({ baseUrl: PROD_SERVER}),
    endpoints: (builder) => ({
        getSubjectById: builder.query({
            query: id => `/subject/sub?${id && `id=${id}`}`
        }),
        editSubject: builder.mutation({
            query: (body = {}) => {
                const { id } = body;
                return { url: `subject/${id}`, method: 'PATCH', body:  { ...body } };
            }
        }),
        getSubjectByLocationNumber: builder.query({
            query: locationsId => `/loc?${locationsId && `locationId=${locationsId}`}`
        }),
        getLocationByWoldNumber: builder.query({
            query: worldId => `/location/world?${worldId && `worldId=${worldId}`}`
        })
    })
})

export const {
    useGetSubjectByIdQuery,
    useEditSubjectMutation,
    useGetLocationByWoldNumberQuery,
    useGetSubjectByLocationNumberQuery
} = matrixAPI