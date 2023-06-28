import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage';
import MakePage from './page/MakePage';
import WritePage from './page/WritePage';
import ReadPage from './page/ReadPage';
import WavePage from './page/WavePage';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<MainPage />}></Route>
              <Route path='/makewave' element={<MakePage />}></Route>
              <Route path='/writewave' element={<WritePage />}></Route>
              <Route path='/readwave' element={<ReadPage />}></Route>
              <Route path='/wave' element={<WavePage />}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
