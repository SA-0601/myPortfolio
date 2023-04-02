import { useState, useEffect } from "react";
import { getQuote } from "../services/quoteapi";
import Marquee from "react-fast-marquee";

function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuote();
      console.log(data);
      setQuote(data.quotes);
      console.log(data.quotes);
    };
    fetchData();
  }, []);

  const randomNum = Math.floor(Math.random() * 30) + 1;
  console.log(randomNum);
  const selectedQuote = quote[randomNum];
  console.log(selectedQuote);
  return (
    <div className="quote-class">
      <Marquee pauseOnHover speed={30}>
        {quote && (
          <h5>
            {selectedQuote.quote} By {selectedQuote.author}
          </h5>
        )}
      </Marquee>
    </div>
  );
}

export default Quote;
