import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../components/Form/Logo';
import TextField from '../../components/Form/TextField';
import Button from '../../components/Form/Button';
import Link from '../../components/Form/Link';

function Index() {

  const history = useHistory();

  const handleLogin = () => {
    history.push("/dashboard")
  }

  return (
    <div id="container">
      <form className="form-signin">
        <Logo width="72" height="72" />
        <h1>Área Restrita</h1>
        <div>
          <TextField
            className="email"
            label="E-mail"
            placeholder="Insira seu e-mail"
            required={true}
          />
          <TextField
            className="password"
            label="Senha"
            placeholder="Insira sua senha"
            required={true}
          />
        </div>
        <Button className="btn-login" text="Acessar" onClick={() => handleLogin()} />
        <Link className="link-reset" href="/" text="Esqueceu a senha?" />
      </form>
    </div >
  );
}

export default Index;
