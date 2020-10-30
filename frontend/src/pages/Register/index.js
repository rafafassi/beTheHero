import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'

import './styles.css';
import { FiArrowLeft } from 'react-icons/fi'
import logoimg from '../../assets/logo.svg';

function Register() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
            login,
            password
        }

        try {
            const res = await api.post('ongs', data);
            alert(`Novo ID criado: ${res.data.id}`);
            history.push('/');
        } catch {
            alert('Erro ao cadastrar!');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoimg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ejude possoas a encontrarem os casos dentro da sua ONG.</p>
                    <Link className="back-link" to="/" ><FiArrowLeft size={16} color="#E02041"/>Voltar</Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input type="email" placeholder="contato@ong.com.br"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input placeholder="UF" style={{ width: 80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <input placeholder="Login"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <input placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Register;