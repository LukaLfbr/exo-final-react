import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const uri = 'http://localhost:3001'

export const pastryApi = createApi({
    reducerPath: 'pastryApi',
    baseQuery: fetchBaseQuery({ baseUrl: uri }),
    endpoints: (builder) => ({
      getPastries: builder.query({
        query: () => `game/pastries`,
      }),
    }),
  })

  export const { useGetPastriesQuery } = pastryApi

  