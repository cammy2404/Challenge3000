import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Challenge3000 from './App/Challenge3000';
import Content from './App/Content';
import Layout from './Layout';
import Who from './App/Content/Who';
import What from './App/Content/What';
import When from './App/Content/When';
import Why from './App/Content/Why';
import SocialMedia from './App/SocialMedia';

export default function App() {
  console.log("THING")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Challenge3000/" element={<Layout />}>
          <Route index element={<Content />} />
          <Route path="participants" element={<Who />} />
          <Route path="challenge" element={<><What /><When /></>} />
          <Route path="supporting" element={<Why />} />
          <Route path="socialmedia" element={<SocialMedia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
