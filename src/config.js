const isDevelopment = process.env.NODE_ENV !== "production";

const fallbackApiBaseUrl = isDevelopment
  ? "http://localhost:3001/api"
  : "https://test.omojet.com/api";

const fallbackCdnBaseUrl = isDevelopment
  ? "http://localhost:3001/"
  : "https://test.omojet.com/";

export const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || fallbackApiBaseUrl;

export const CDN_BASE_URL =
  process.env.NEXT_PUBLIC_CDN_BASE_URL || fallbackCdnBaseUrl;
