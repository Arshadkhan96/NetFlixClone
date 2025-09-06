// import Reasons from "./Components2/Reasons";
// import Started from "./Components2/Started";
// import Questions from "./Components2/Questions"
// import Footer from "./Components2/Footer";
// import UpcomingMovies from "./Components2/Slide";
// import Background from "./Components2/Background";
// import Trending from "./Components2/Trending ";
// import Login from "./pages/auth/Login";
// import './App.css'

// const App = () => {
//   return (
//     <>
//       <Background/>
//       <Trending/>
//       <UpcomingMovies/>
//       <Reasons />
//       <Questions/>
//       <Started/>
//       <Footer/>

//     </>
//   )
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Reasons from "./Components2/Reasons";
import Started from "./Components2/Started";
import Questions from "./Components2/Questions";
import Footer from "./Components2/Footer";
import UpcomingMovies from "./Components2/Slide";
import Background from "./Components2/Background";
import Trending from "./Components2/Trending ";

import Login from "./pages/auth/Login";

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Background />
              <Trending />
              <UpcomingMovies />
              <Reasons />
              <Questions />
              <Started />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
