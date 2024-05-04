const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=in&category=general";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY = "d5c01d25fb7f7521b4ce4d0d24caeebf";
export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&lang=en&category=${category}&apikey=${API_KEY}`;    
export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;

console.log(endpointPath)
