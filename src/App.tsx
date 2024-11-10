import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/MainPage.tsx';
import { Header } from './components/header/Header.tsx';

export const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);
