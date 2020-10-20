import React, { FormEvent, useState/*, ChangeEvent*/ } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg';

// import api from "../services/api";

import '../styles/pages/acesso-restrito.css';

function AcessoRestrito() {
  const { goBack } = useHistory();

  const[email, setEmail] = useState('');
  const[pass, setPass] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    data.append('email', email);
    data.append('pass', pass);

    //await api.post('login', data);
    console.log(email, pass);
    
  }
  return (
    <div id="page-acesso-restrito">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h1>happy</h1>
        </header>
        <footer>
          <strong>Franca</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      <main>
        <button className="go-back" type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#15C3D6" />
        </button>
        <form onSubmit={handleSubmit} className="restrito-form">
            <h2>Login</h2>
            <div>
              <label htmlFor="email">Email</label>
              <input 
                id="email" 
                value={email} 
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="pass">Senha</label>
              <input 
                type="password"
                id="pass" 
                value={pass} 
                onChange={event => setPass(event.target.value)}
              />
            </div>
            <div className="check">
              <input 
                id="remember" 
                type="checkbox"
              />
              <label htmlFor="rememer">Lembrar-me?</label>
              <Link className="link" to="" >Esqueci minha senha</Link>
            </div>
          {email !== '' && pass !== '' ? (
            <Link to="/acesso-restrito/dashboard" /*onClick={handleSubmit}*/ className="enable" type="submit">
            Entrar
          </Link>
          ) : (
            <Link to="#" onClick={handleSubmit} className="disable" type="submit">
              Entrar
            </Link>
          )}
         </form>
      </main> 
    </div>
  );
}

export default AcessoRestrito;