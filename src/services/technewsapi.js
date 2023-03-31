    //if you want to hide your api key
    const apiKey = process.env.REACT_APP_API_KEY;

//fetch data from API
export const getTechNews = async () => {
    //make fetch request and store response
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
      );
      const data = await response.json();
        return data;
    } catch (error) {
      console.log(error);
    }
  };
