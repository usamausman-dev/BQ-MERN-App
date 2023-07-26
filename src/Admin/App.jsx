import React from 'react'
import { Route, Routes, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Home from './Pages/Home';
import Brands from './Pages/Brands';
import Categories from './Pages/Categories';
import AdminNav from './Components/AdminNav';

export default function App() {
    const NavItems = [
        {
            tab: 'Home',
            link: '/'
        },
        {
            tab: 'Brands',
            link: '/brands'
        },
        {

            tab: 'Category',
            link: '/category'
        }

    ]

    return (
        <>
            <AdminNav />
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-3 bg-dark " style={{ height: '91.9vh' }} >
                        <Nav defaultActiveKey="/" className="flex-column">
                            {
                                NavItems.map((val, index) => <li key={index} class="nav-item"><Link to={val.link} className='text-white nav-link'>{val.tab}</Link></li>)
                            }
                        </Nav>
                    </div>
                    <div className="col-md-9">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/brands" element={<Brands />} />
                            <Route path="/category" element={<Categories />} />
                            <Route path="*" element={<div>Page-404</div>} />
                        </Routes>
                    </div>
                </div>
            </div></>

    )
}
