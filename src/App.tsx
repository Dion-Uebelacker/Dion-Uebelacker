import {Routes, Route} from "react-router-dom";
import HomeView from "./views/HomeView/HomeView.tsx";
import ImprintView from "./views/ImprintView/ImprintView.tsx";
import PrivacyView from "./views/PrivacyView/PrivacyView.tsx";
import React from "react";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeView />}/>
      <Route path="imprint" element={<ImprintView />}/>
      <Route path="/privacy" element={<PrivacyView />}/>
    </Routes>
  )
}

export default App;
