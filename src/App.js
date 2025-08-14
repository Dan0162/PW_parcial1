import React, { useState } from 'react';
import './App.css';
import logo from './Images/logo.png';

function App() {
  const [codigoCliente, setCodigoCliente] = useState('');
  const [usr, setUsr] = useState('');
  const [pswd, setPswd] = useState('');
  //const [loginCalled, setLoginCalled] = useState(false); 

  const isFormValid = codigoCliente && usr && pswd;

  function handleLogin(e) {
    e.preventDefault();
    //setLoginCalled(true);
    
    
  }

  return (
  <div className="App">
      
      <header className="App-header">
        <form onSubmit={handleLogin} style={{ color: 'black' }}>
          
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', width: '400px', height: '500px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="codigoCliente" style={{ display: 'block', marginBottom: '5px', textAlign: 'center' }}>Código de cliente:</label>
                <input
                  id="codigoCliente"
                  type="text"
                  value={codigoCliente}
                  onChange={e => setCodigoCliente(e.target.value)}
                  data-testid="codigoCliente-input"
                  style={{ display: 'block', width: '100%', maxWidth: '250px', margin: '0 auto' }}
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="usr" style={{ display: 'block', marginBottom: '5px', textAlign: 'center' }}>Usr:</label>
                <input
                  id="usr"
                  type="text"
                  value={usr}
                  onChange={e => setUsr(e.target.value)}
                  data-testid="usr-input"
                  style={{ display: 'block', width: '100%', maxWidth: '250px', margin: '0 auto' }}
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="pswd" style={{ display: 'block', marginBottom: '5px', textAlign: 'center' }}>Pswd:</label>
                <input
                  id="pswd"
                  type="password"
                  value={pswd}
                  onChange={e => setPswd(e.target.value)}
                  data-testid="pswd-input"
                  style={{ display: 'block', width: '100%', maxWidth: '250px', margin: '0 auto' }}
                />
            </div>
            <button
              type="submit"
              disabled={!isFormValid}
              data-testid="login-button"
              style={{ display: 'block', width: '100%', maxWidth: '250px', margin: '0 auto', textAlign: 'center', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', background: '#003865', color: 'white', fontSize: '16px', cursor: isFormValid ? 'pointer' : 'not-allowed' }}
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
