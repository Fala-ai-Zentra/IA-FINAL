import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardIA from "./pages/DashboardIA";
import HistoricoUso from "./pages/HistoricoUso";
import UploadIngestao from "./pages/UploadIngestao";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardIA />} />
        <Route path="/historico" element={<HistoricoUso />} />
        <Route path="/upload" element={<UploadIngestao />} />
      </Routes>
    </Router>
  );
}

export default App;
