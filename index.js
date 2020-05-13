const input = document.querySelector('input');

let timeoutId;
const onInput = (event) => {
  const searchTerm = event.target.value;
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  if (searchTerm) {
    timeoutId = setTimeout(() => {
      fetchData(searchTerm);
    }, 500);
  }
};
input.addEventListener('input', onInput);

const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: API_KEY,
      s: searchTerm,
    },
  });

  console.log(response.data);
};
