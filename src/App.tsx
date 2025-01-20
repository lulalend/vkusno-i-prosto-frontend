import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/MainPage.tsx';
import { Header } from './components/header/Header.tsx';
import { NoMatch } from './pages/404/NoMatch.tsx';

export const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NoMatch />}/>
    </Routes>
  </BrowserRouter>
);
