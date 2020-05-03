import React, { useState } from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import Link from '../../components/Form/Link';
import Logo from '../../components/Form/Logo';
import './styles.scss';

export default function Index({ children }) {

    const [menu, setMenu] = useState(true);


    function handleMenu() {
        menu ? setMenu(false) : setMenu(true);
    }

    return (
        <div>
            <Navbar bg="light" expand="md">
                <Navbar.Toggle style={{ display: "block", marginRight: "10px" }} onClick={() => handleMenu()} />
                <Navbar.Brand href="#home">ProntMed</Navbar.Brand>
                <div className="dropdown-user" >
                    <div className="img">
                        <Logo width="25" height="25" />
                    </div>
                    <NavDropdown title="Usuário" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Sair</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </Navbar>
            {menu ?
                <>
                    <div className="menu-lateral">
                        <Link className="link-menu-left" href="" text="Dashboard" />
                        <Link className="link-menu-left" href="" text="Usuário" />
                        <Link className="link-menu-left" href="" text="Agenda Médica" />
                        <Link className="link-menu-left" href="" text="Medicamentos" />
                        <Link className="link-menu-left" href="" text="Exames" />
                        <Link className="link-menu-left" href="" text="Convênios" />
                        <Link className="link-menu-left" href="" text="Prontuário Médico" />
                        <Link className="link-menu-left" href="" text="Sair" />
                    </div>
                    <div className="menu-central-opened">
                        {children}
                    </div>
                </>
                :
                <div className="menu-central">
                    {children}
                </div>
            }

        </div >
    )
}
