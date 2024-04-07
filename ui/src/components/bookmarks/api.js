import { API_ENDPOINTS } from "utils/constants";
import { coreApi } from "common/api";

export const bookmarkApi = coreApi.injectEndpoints({
  tagTypes: ['Bookmarks'],
  endpoints: (builder) => ({
    getBookmarks: builder.query({
      query: () => {
        return {
          url: API_ENDPOINTS.BOOKMARKS,
          method: 'GET'
        };
      }
    }),
  }),
});

export const { useGetBookmarksQuery } = bookmarkApi;
