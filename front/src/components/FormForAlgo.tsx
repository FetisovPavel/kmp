import React, {useState, FormEvent, useEffect} from 'react';
import './css/main.css';
import {useLocation} from "react-router-dom";

export function TextForm() {
    const [text, setText] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');
    const [result, setResult] = useState('');
    const [option, setOption] = useState('');
    const [username, setUsername] = useState('');
    const location = useLocation();

    const handleChangeOption = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOption(event.target.value);
    };

    useEffect(() => {
        if (location.state && location.state.username) {
            const username = location.state.username;
            setUsername(username)
        }
    }, [location.state]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        if (!option){
            setError('Выберите опцию')
        }
        else {
            try {
                const response_token = await fetch('http://localhost:3001/algorithm/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username}),
                });
                if (await response_token.text() === 'true') {
                    const response = await fetch('http://localhost:3001/kmp', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ text, image, option}),
                    });
                    if (response.status === 201) {
                        const data = await response.text();
                        setResult(data);
                    } else {
                        setError('Error');
                    }
                }
                else{
                    setError('Пожалуйста, авторизуйтесь')
                }
            } catch (e) {
                console.error(e);
                setError('Что-то пошло не так');
            }
        }
    };

    return (
        <div className="mainForm">
            <h2>Добро пожаловать, {username}!</h2>
            <label>
                Введите текст:
                <textarea value={text} onChange={(e) => setText(e.target.value)} />
            </label>
            <div className = "textForm">
                <form onSubmit={handleSubmit}>
                    <label>
                        Введите подстроку:
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                    </label>
                    <label>
                        <input type="radio" value="count" checked={option === 'count'} onChange={handleChangeOption} />
                        Посчитать количество вхождений
                    </label>
                    <label>
                        <input type="radio" value="index" checked={option === 'index'} onChange={handleChangeOption} />
                        Индекс последнего вхождения
                    </label>
                    <button type="submit">Отправить</button>
                    {error && <p>{error}</p>}
                </form>
                <p>{result}</p>
            </div>
        </div>
    );
}