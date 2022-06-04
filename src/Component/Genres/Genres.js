import React, { useEffect } from "react";
import axios from "axios";
import Chip from "@mui/material/Chip";

const Genres = ({
  type,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
}) => {
  const handleAdd = (gen) => {
    setSelectedGenres([...selectedGenres, gen]);
    setGenres(genres.filter((g) => g.id !== gen.id));
    setPage(1);
  };

  const handleRemove = (gen) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== gen.id)
    );
    setGenres([...genres, gen]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=1107005a8ce91c111d2356ee3e94328c&language=en-US`
    );
    setGenres(data.genres);
    console.log(data.genres);
  };

  useEffect(() => {
    fetchGenres();
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((gen) => (
        <Chip
          label={gen.name}
          style={{ margin: 4 }}
          clickable
          size="medium"
          key={gen.id}
          color="primary"
          onDelete={() => handleRemove(gen)}
        />
      ))}
      {genres.map((gen) => (
        <Chip
          label={gen.name}
          style={{ margin: 4, backgroundColor: "white" }}
          clickable
          size="medium"
          key={gen.id}
          onClick={() => handleAdd(gen)}
        />
      ))}
    </div>
  );
};

export default Genres;
