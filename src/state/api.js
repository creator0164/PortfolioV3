import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL}),
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