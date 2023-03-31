//fetch data from API
export const getTechNews = async () => {
    //make fetch request and store response
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4ef55ff38f87455690129bb8d178a84c`
      );
      const data = await response.json();
        return data;
    } catch (error) {
      console.log(error);
    }
  };
