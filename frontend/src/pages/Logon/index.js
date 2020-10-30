import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';
import heroesimg from '../../assets/heroes.png';
import logoimg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

function Logon() {
    const history = useHistory();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    async function handlelogin(e) {
        e.preventDefault();

        try {
            const res = await api.post('session', { login, password });

            console.log(res.data.id, res.data.name);

            localStorage.setItem('ongId', res.data.id);
            localStorage.setItem('ongName', res.data.name);

            history.push('/profile');
        } catch(err) {
            alert('Falha no Login')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoimg} alt="Be The Hero" />

                <form onSubmit={handlelogin} >
                    <h1>Faça seu logon</h1>

                    <input placeholder="Login" 
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <input type="password" placeholder="Password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button type="submit" className="button">Entrar</button>
                    <Link className="back-link" to="/register" ><FiLogIn size={16} color="#E02041"/>Não tenho cadastro.</Link>
                </form>
            </section>

            <img src={heroesimg} alt="Heroes" className="src"/>
        </div>
    )
}

export default Logon;