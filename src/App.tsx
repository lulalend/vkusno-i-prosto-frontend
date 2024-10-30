import { useState } from 'react';
import './App.css';
import { Modal } from './components/modal/Modal.tsx';
import { AuthPage } from './pages/auth/AuthPage.tsx';

export const App = () => {
  const [authActive, setAuthActive] = useState(true);

  return (
    <>
      <button onClick={() => setAuthActive(true)} className="button">
        Log In
      </button>
      {authActive && (
        <Modal isActive={authActive} setIsActive={setAuthActive}>
          <AuthPage />
        </Modal>
      )}
    </>
  );
};
