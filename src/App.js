import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import MakePage from "./page/MakePage";
import WritePage from "./page/WritePage";
import ReadPage from "./page/ReadPage";
import WavePage from "./page/WavePage";
import { useState } from "react";

function App() {
  //WavePage Test
  const [data, setData] = useState([
    {
      name: "AAA",
      content: "Test1",
      date: "2023-06-30",
    },
    {
      name: "BBB",
      content: "Test2",
      date: "2023-06-31",
    },
    {
      name: "CCC",
      content: "Test3",
      date: "2023-06-31",
    },
    {
      name: "DDD",
      content: "Test4",
      date: "2023-06-31",
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/makewave" element={<MakePage />}></Route>
        <Route path="/writewave" element={<WritePage />}></Route>
        <Route path="/readwave" element={<ReadPage />}></Route>
        <Route path="/wave" element={<WavePage List={data} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
