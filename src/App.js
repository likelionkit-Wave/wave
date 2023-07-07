import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import MakePage from "./page/MakePage";
import WritePage from "./page/WritePage";
import ReadPage from "./page/ReadPage";
import WavePage from "./page/WavePage";
import AuthPage from "./page/AuthPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/makewave" element={<MakePage />}></Route>
        <Route path="/writewave" element={<WritePage />}></Route>
        <Route path="/readwave/:id" element={<ReadPage />}></Route>
        <Route path="/wave/:id/:name" element={<WavePage />}></Route>
        <Route path="/auth/google" element={<AuthPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
