import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://portfoliov3-backend.onrender.com'}),
    reducerPath: 'adminApi',
    tagType: ['User'],
    endpoints: (builder) => ({
      sendEmail: builder.mutation({
        query: (data) => ({
          url: 'client/email_api',
          method: 'POST',
          body: data,
        }),
      }),
    })
})
export const { useSendEmailMutation  } = api;