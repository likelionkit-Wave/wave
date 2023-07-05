import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import MakePage from "./page/MakePage";
import WritePage from "./page/WritePage";
import ReadPage from "./page/ReadPage";
import WavePage from "./page/WavePage";
import VisitPage from "./page/VisitPage";
import { useState } from "react";

function App() {
  //WavePage Test
  const [data, setData] = useState([
    {
      name: "AAA",
      title: "Test1",
      content: "Test1입니다.",
      date: "2023-06-30",
    },
    {
      name: "BBB",
      title: "Test2",
      content: "Test2입니다.",
      date: "2023-06-31",
    },
    {
      name: "CCC",
      title: "Test3",
      content: "Test3입니다.",
      date: "2023-06-31",
    },
    {
      name: "DDD",
      title: "Test4",
      content: "Test4입니다.",
      date: "2023-06-31",
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/makewave" element={<MakePage />}></Route>
        <Route path="/writewave" element={<WritePage />}></Route>
        <Route path="/readwave/:id" element={<ReadPage List={data} />}></Route>
        <Route path="/wave" element={<WavePage List={data} />}></Route>
        <Route path="/visit" element={<VisitPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
