import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navbar.css'; // импортируйте пользовательский CSS-файл

export function NavigationBar() {
    return (
        <Navbar className="my-navbar" bg="light" expand="lg">
            <Navbar.Brand href="#home">Алгоритм Кнута-Морриса-Пратта</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="my-navbar-link" href="https://gitflic.ru/">Home</Nav.Link>
                    <Nav.Link className="my-navbar-link" href="https://gitflic.ru/job/java-backend">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}