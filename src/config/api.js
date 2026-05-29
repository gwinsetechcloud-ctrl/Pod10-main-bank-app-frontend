// Set at Docker build time: REACT_APP_API_URL=https://bankapi.cohort5pod10.online
export const API_BASE_URL =
  process.env.REACT_APP_API_URL || "https://bankapi.cohort5pod10.online";
