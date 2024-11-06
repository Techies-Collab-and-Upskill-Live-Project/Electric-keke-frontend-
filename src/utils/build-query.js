export const buildQueryString = (params = {}) => {
  const queryString = Object.entries(params)
    .map(([key, value]) => {
      return `${key}=${value}`;
    })
    .join("&");

  return queryString ? `?${queryString}` : "";
};
