const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=in&category=general";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY = "4a72b276e30b504ae9a776e052236703";
export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&lang=en&category=${category}&apikey=${API_KEY}`;    
export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;

export  const handleGetApi = async (endpoint) => {
  await axios.get(endpoint)
    .then((respose) => {
      // console.log(respose.data.articles[0])
      setData(respose.data.articles)
    })
}


console.log(endpointPath("in","general"))