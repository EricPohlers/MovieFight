const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: API_KEY,
      s: 'avengers',
    },
  });

  console.log(response.data);
};

fetchData();
