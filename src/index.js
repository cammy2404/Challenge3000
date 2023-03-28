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

export default function App() {
  console.log("THING")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Challenge3000/" element={<Layout />}>
          <Route index element={<Content />} />
          <Route path="who" element={<Who />} />
          <Route path="what" element={<What />} />
          <Route path="when" element={<When />} />
          <Route path="why" element={<Why />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Challenge3000 /> */}
  </React.StrictMode>
);
