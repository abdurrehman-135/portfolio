import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const portfolioApi = createApi({
  reducerPath: "portfolioApi",
  tagTypes: [
    "Profile",
    "Projects",
    "Skills",
    "Experiences",
    "Services",
    "Messages",
    "Auth",
  ],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      headers.set("content-type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
    getCurrentUser: builder.query({
      query: () => "/auth/me",
      transformResponse: (response) => response.data,
      providesTags: ["Auth"],
    }),
    getProfile: builder.query({
      query: () => "/profile",
      transformResponse: (response) => response.data,
      providesTags: ["Profile"],
    }),
    updateProfile: builder.mutation({
      query: (payload) => ({
        url: "/profile",
        method: "PUT",
        body: payload,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ["Profile"],
    }),
    getProjects: builder.query({
      query: (params = {}) => ({
        url: "/projects",
        params,
      }),
      transformResponse: (response) => response.data,
      providesTags: ["Projects"],
    }),
    createProject: builder.mutation({
      query: (payload) => ({
        url: "/projects",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ["Projects"],
    }),
    updateProject: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/projects/${id}`,
        method: "PUT",
        body: payload,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ["Projects"],
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Projects"],
    }),
    getSkills: builder.query({
      query: () => "/skills",
      transformResponse: (response) => response.data,
      providesTags: ["Skills"],
    }),
    createSkill: builder.mutation({
      query: (payload) => ({
        url: "/skills",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ["Skills"],
    }),
    updateSkill: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/skills/${id}`,
        method: "PUT",
        body: payload,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ["Skills"],
    }),
    deleteSkill: builder.mutation({
      query: (id) => ({
        url: `/skills/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Skills"],
    }),
    getExperiences: builder.query({
      query: () => "/experiences",
      transformResponse: (response) => response.data,
      providesTags: ["Experiences"],
    }),
    createExperience: builder.mutation({
      query: (payload) => ({
        url: "/experiences",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ["Experiences"],
    }),
    updateExperience: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/experiences/${id}`,
        method: "PUT",
        body: payload,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ["Experiences"],
    }),
    deleteExperience: builder.mutation({
      query: (id) => ({
        url: `/experiences/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Experiences"],
    }),
    getServices: builder.query({
      query: () => "/services",
      transformResponse: (response) => response.data,
      providesTags: ["Services"],
    }),
    createService: builder.mutation({
      query: (payload) => ({
        url: "/services",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ["Services"],
    }),
    updateService: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/services/${id}`,
        method: "PUT",
        body: payload,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ["Services"],
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Services"],
    }),
    createMessage: builder.mutation({
      query: (payload) => ({
        url: "/messages",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ["Messages"],
    }),
    getMessages: builder.query({
      query: () => "/messages",
      transformResponse: (response) => response.data,
      providesTags: ["Messages"],
    }),
    updateMessageStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/messages/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ["Messages"],
    }),
  }),
});

export const {
  useCreateExperienceMutation,
  useCreateMessageMutation,
  useCreateProjectMutation,
  useCreateServiceMutation,
  useCreateSkillMutation,
  useDeleteExperienceMutation,
  useDeleteProjectMutation,
  useDeleteServiceMutation,
  useDeleteSkillMutation,
  useGetCurrentUserQuery,
  useGetExperiencesQuery,
  useGetMessagesQuery,
  useGetProfileQuery,
  useGetProjectsQuery,
  useGetServicesQuery,
  useGetSkillsQuery,
  useLoginMutation,
  useUpdateExperienceMutation,
  useUpdateMessageStatusMutation,
  useUpdateProfileMutation,
  useUpdateProjectMutation,
  useUpdateServiceMutation,
  useUpdateSkillMutation,
} = portfolioApi;

