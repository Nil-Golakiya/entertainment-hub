import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Trending.css";
import SingleContent from "../Component/SingleContent/SingleContent";
import CustomPagination from "../Component/CustomPagination/CustomPagination";

const Trending = () => {
  const [content, setContent] = useState([]);

  const [page, setPage] = useState(1);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=1107005a8ce91c111d2356ee3e94328c&page=${page}`
    );
    setContent(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <div>
        <span className="pageTitle">Trending</span>
        <div className="trending">
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
              />
            ))}
        </div>
        <CustomPagination setPage={setPage} />
      </div>
    </>
  );
};
export default Trending;
