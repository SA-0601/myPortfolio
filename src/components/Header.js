import { useState, useEffect } from "react";
import { getTechNews } from "../services/technewsapi";
function Header() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTechNews();
      console.log(data);
      setNews(data.articles);
    };
    fetchData();
  }, []);

  const randomNum = Math.floor(Math.random() * 10) + 1;
  
  return (
    <div className="header">
        
      {news && (
        <h5>LATEST NEWS : <a
          target="_blank"
          rel="noreferrer"
          href={news[randomNum].url}
          >
          {news[randomNum].title}
        </a></h5>
      )}

      {/* {news?.map(item => {
            return(
                <a href ={item.url} alt='latest'>{item.title}</a>
            )
        })} */}
    </div>
  );
}

export default Header;
