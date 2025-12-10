import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from './views/HomeView';
import smooth from "./utils/smooth";
import link from "./utils/link";

function App () {
  useEffect(() => {
    smooth();
    link();
  }, []);

  return (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
            <Route path="/" element={<HomeView />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;