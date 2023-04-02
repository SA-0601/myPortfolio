//fetch data from API
export const getQuote = async () => {
    //make fetch request and store response
    try {
      const response = await fetch(
        `https://dummyjson.com/quotes`
      );
      const data = await response.json();
        return data;
    } catch (error) {
      console.log(error);
    }
  };