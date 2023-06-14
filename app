
import React, { useState } from 'react';
import { RegistrationForm } from './components/RegistrationForm';
import { AuthorizationForm } from './components/AuthorizationForm';

function App() {
    const [currentForm, setCurrentForm] = useState('authorization');

    const handleRegistrationClick = () => {
        setCurrentForm('registration');
    };

    const renderForm = () => {
        if (currentForm === 'authorization') {
            return <AuthorizationForm />;
        } else {
            return <RegistrationForm />;
        }
    };

    return (
        <div className="App">
            <h1>{currentForm === 'authorization' ? 'Авторизация' : 'Регистрация'}</h1>
            {renderForm()}
            {currentForm === 'authorization' && (
                <button onClick={handleRegistrationClick}>Регистрация</button>
            )}
        </div>

    );
}

export default App;



    <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <p>{error}</p>}
            <button type="submit">Enter</button>
        </form>


<form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <p>{error}</p>}
            <button type="submit">Register</button>
        </form>