import React from 'react';
import Button from '../../components/Form/Button';
import Table from '../../components/Table';
import './styles.scss';

function Users() {

  const handleLogin = () => {

  }

  return (
    <div id="container">
      <div className="top">
        <h2 className="info-page">Dashboard</h2>
        <Button className="btn-cadastrar" text="Cadastrar" onClick={() => handleLogin()} />
      </div>
      <Table />
    </div >
  );
}

export default Users;
