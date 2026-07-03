import React, { useState } from "react";

import Reasons from "./Components2/Reasons";
import Started from "./Components2/Started";
import Questions from "./Components2/Questions";
import Footer from "./Components2/Footer";
import UpcomingMovies from "./Components2/Slide";
import Background from "./Components2/Background";
import Trending from "./Components2/Trending ";

import useTrailer from "./hooks/useTrailer";
import TrailerModal from "./components/TrailerModal";

import './App.css';

const App = () => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const { trailerKey, loading: trailerLoading, error: trailerError } = useTrailer(selectedMovieId);

  const handlePlayTrailer = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const handleCloseTrailer = () => {
    setSelectedMovieId(null);
  };

  return (
    <>
      <TrailerModal
        open={Boolean(selectedMovieId)}
        trailerKey={trailerKey}
        loading={trailerLoading}
        error={trailerError}
        onClose={handleCloseTrailer}
      />

      <Background />
      <Trending onPlayTrailer={handlePlayTrailer} />
      <UpcomingMovies onPlayTrailer={handlePlayTrailer} />
      <Reasons />
      <Questions />
      <Started />
      <Footer />
    </>
  );
};

export default App;
