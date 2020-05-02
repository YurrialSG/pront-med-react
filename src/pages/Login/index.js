import React from 'react';
import Logo from '../../components/Form/Logo';
import TextField from '../../components/Form/TextField';
import Button from '../../components/Form/Button';
import Link from '../../components/Form/Link';

function index() {
  return (
    <div id="container">
      <form className="form-signin">
        <Logo width="72" height="72" />
        <div>   
          <TextField className="email" label="E-mail" placeholder="Insira seu e-mail" />
          <TextField className="password" label="Senha" placeholder="Insira sua senha" />
        </div>
        <Button className="btn-login" text="Acessar" />
        <Link  className="link-reset" href="" onClick="" text="Esqueceu a senha?" />
      </form>
    </div >
  );
}

export default index;
