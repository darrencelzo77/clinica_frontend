// import axios from "axios";

// const BASE_URL = `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_VERSION}`;

// const httpClient = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// });

// // Function to get stored tokens from localStorage
// const getStoredTokens = () => {
//   const persistence = window.localStorage.getItem("persist:root");
//   if (!persistence) return { accessToken: null, refreshToken: null };

//   try {
//     const parsedData = JSON.parse(persistence);
//     const loginData = JSON.parse(parsedData?.login || "{}");
//     return {
//       accessToken: loginData.accessToken || null,
//       refreshToken: loginData.refreshToken || null,
//     };
//   } catch (error) {
//     console.error("Error parsing stored tokens:", error);
//     return { accessToken: null, refreshToken: null };
//   }
// };

// // Request Interceptor - Attach Authorization Token
// httpClient.interceptors.request.use(
//   async function (config) {
//     const { accessToken } = getStoredTokens();
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response Interceptor - Handle 401 and Refresh Token
// httpClient.interceptors.response.use((response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     const { refreshToken } = getStoredTokens();

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       if (!refreshToken) {
//         console.warn("No refresh token available, redirecting to login.");
//         localStorage.removeItem("persist:root");
//         window.location.href = "/login";
//         return Promise.reject(error);
//       }

//       try {
//         const { data } = await axios.post(
//           `${BASE_URL}/auth/refresh-token/${refreshToken}`
//         );

//         const persistence = JSON.parse(
//           localStorage.getItem("persist:root") || "{}"
//         );
//         const loginData = JSON.parse(persistence?.login || "{}");

//         loginData.accessToken = data.accessToken;
//         localStorage.setItem(
//           "persist:root",
//           JSON.stringify({ ...persistence, login: JSON.stringify(loginData) })
//         );
//         originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
//         return httpClient(originalRequest);
//       } catch (refreshError) {
//         console.error("Refresh token expired, logging out.");
//         localStorage.removeItem("persist:root");
//         window.location.href = "/login";
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default httpClient;
