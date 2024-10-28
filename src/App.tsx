import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Modal } from './components/Modal.tsx';

export const App = () => {
    const [authActive, setAuthActive] = useState(false);

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button
                    onClick={() => setAuthActive(true)}
                    className="button"
                >
                    Log In
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            {authActive && <Modal isActive={authActive} setIsActive={setAuthActive}><h2>Вход</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Имя пользователя"
                        name="username"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        name="password"
                        required
                    />
                </form>
            </Modal>}
        </>
    );
};
