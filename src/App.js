import { Container } from "@mui/material";
import React from "react";
import "./App.css";
import Header from '../src/Component/Header/Header'
import SimpleBottomNavigation from "./Component/MainNav/MainNav";
import { Routes, Route } from "react-router-dom";
import Trending from "./Pages/Trending";
import Search from "./Pages/Search";
import Series from "./Pages/Series";
import Movies from "./Pages/Movies";

const App = () => {
  return (
    <>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route exact path="/" element={<Trending />} />
            <Route exact path="/movies" element={<Movies />} />
            <Route exact path="/series" element={<Series />} />
            <Route exact path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </>
  );
};

export default App;
