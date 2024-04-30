import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
//   params: {
//     url: 'https://time.com/6266679/musk-ai-open-letter/',
//     length: '3'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'd009bab2e3mshecc8f6ccb9292e6p100349jsn853191c7ec73',
//     'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/'
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `test`
    })
  })
});
