import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/MainPage.tsx';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);
