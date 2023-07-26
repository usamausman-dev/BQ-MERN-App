import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function AdminNav() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Admin</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: Admin Name
                    </Navbar.Text>
                    <button className='btn btn-outline-secondary ms-4'>Logout</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}
