import React from 'react';
import Button from '../../components/Form/Button';
import Table from '../../components/Table';

function Users() {

  return (
    <div id="container">
        <Button className="btn-cadastrar" text="Cadastrar" />
        <Table />
    </div >
  );
}

export default Users;
