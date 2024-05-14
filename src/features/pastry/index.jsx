import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const uri = 'http://localhost:3001/game'

export const pastryApi = createApi({
    reducerPath: 'pastryApi',
    baseQuery: fetchBaseQuery({ baseUrl: uri }),
    endpoints: (builder) => ({
      getPastries: builder.query({
        query: () => `pastries`,
      }),
      getWinPastries: builder.query({
        query: (quantity) => `win-pastries/${quantity}`,
      }),
      getPastryFromId: builder.query({
        query: (id) => `pastrie/${id}`,
      }),
      getRefresh: builder.query({
        query: () => `refresh`,
      }),
    }),
  })

  export const { useGetPastriesQuery, useGetWinPastriesQuery, useGetPastryFromIdQuery, useGetRefreshQuery } = pastryApi

  