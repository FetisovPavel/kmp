import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthorizationPage } from './pages/authorization';
import { MainPage } from './pages/main';
import { RegistrationPage } from './pages/register';

function App() {
    return (
        <Routes>
            <Route path="/" element={<AuthorizationPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/main" element={<MainPage />} />
        </Routes>
    );
}

export default App;