import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { MainPage } from './pages/main/MainPage.tsx';
import { Header } from './components/header/Header.tsx';
import { NoMatch } from './pages/404/NoMatch.tsx';
import { ProfilePage } from './pages/profile/ProfilePage.tsx';
import { RecipePage } from './pages/recipe/RecipePage.tsx';
import { initAnalytics, sendPageView } from './analitics.ts';

export const App = () => {
  useEffect(() => {
    initAnalytics();

    sendPageView(window.location.pathname);
  }, []);

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile/:login" element={<ProfilePage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};
