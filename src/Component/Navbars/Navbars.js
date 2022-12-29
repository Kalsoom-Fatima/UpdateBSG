import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import bsglogo from "../../Assets/bsg-logo-only.png";
import topfacebook from "../../Assets/top-facebook.png";
import toptelegram from "../../Assets/top-telegram.png";
import toptron from "../../Assets/top-tron-2.png"
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import ph from "../../Assets/ph.png"
import pa from "../../Assets/pa.png";
import ni from "../../Assets/ni.png";
import ins from "../../Assets/in.png";
import ge from "../../Assets/ge.png";
import en from "../../Assets/en.png";
import cn from "../../Assets/cn.png";
import topbar from "../../Assets/top-bar-logo.png"
import { IoPeople, IoHome } from 'react-icons/io5'
import { Link, Outlet, Route, Routes } from "react-router-dom"
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BiMenu } from 'react-icons/bi';
import { IoCalendar } from 'react-icons/io5'
import { TbMessageDots } from 'react-icons/tb'
import Pdf from "../../Assets/docs/rules.pdf"
import "./Navbars.css"

import { useWeb3React } from '@web3-react/core'
import useAuth from '../../hooks/useAuth'

function Navbars({ state }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { account } = useWeb3React();
    const { login,logout } = useAuth();
    const connectMetaMask = () => {
         console.log('click')
         login("injected");
    }


   const Disconnect=()=>{
         logout()

    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className='navbar-color'>

                <Navbar.Brand href="#home" className='ms-md-5 d-flex align-items-center'><img src={bsglogo} height="30" width="25" /><span className='mode'>BSG2.0</span></Navbar.Brand>

                <Nav className="me-auto">

                </Nav>
                <Nav className=' d-flex flex-row  me-2 '>
                    {
                        state ? (
                            <div className='d-flex align-items-center'>
                                {!account ?
                                <button
                                    href="#"
                                    
                                    className="gamestart mobileRow me-3"
                                    style={{ display: "block" }}
                                    onClick={connectMetaMask}
                                >
                                   Conect Wallet 
                                </button>
                                :
                                <button
                                    href="#"
                                    
                                    className="gamestart mobileRow me-3"
                                    style={{ display: "block" }}
                                    onClick={Disconnect}
                                >
                                   Disconnect Wallet 
                                </button>
}
                               
                                <div className="both_dev mt-1" >

                                    <a className="user " onClick={handleShow} style={{cursor: "pointer"}}>
                                        <BiMenu />
                                    </a>
                                    <Offcanvas show={show} onHide={handleClose} placement="end" responsive="" style={{ background: "linear-gradient(180deg, rgba(12,13,31,1) 0%, rgba(14,13,71,1) 100%)" }}>
                                        <Offcanvas.Header closeButton="true" style={{ paddingTop: "10px", zIndex: "999999999", backgroundColor: "transparent" }}>
                                            <Offcanvas.Title><h3></h3></Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body className='bbbdy'>
                                            <Link to='/dashbord' onClick={handleClose} className="sidetexts" style={{ textDecoration: "none" }}>
                                            <div className="lenkk"><MdOutlineDashboardCustomize className='iicon' /> <h3>Dashboard</h3></div>
                                            </Link>
                                          <Link to='/team' onClick={handleClose} className="sidetexts" style={{ textDecoration: "none" }}>
                                            <div className="lenkk"><IoCalendar className='iicon' /> <h3>My Team</h3></div>
                                            </Link>
                                            <Link to='/details' onClick={handleClose} className="sidetexts" style={{ textDecoration: "none" }}>
                                            <div className="lenkk"><IoCalendar className='iicon' /> <h3>Deposit Details</h3></div>
                                            </Link>
                                            <a href={Pdf} without rel="noopener noreferrer" target="_blank" style={{ textDecoration: "none" }}>
                                            <div className="lenkk"><IoCalendar className='iicon' /> <h3>Rules</h3></div>
                                            </a>
                                           
                                        </Offcanvas.Body>
                                    </Offcanvas>
                                </div>
                            </div>
                        ) : (
                            <div className='d-flex'>
                                <Nav.Link href="#deets"><img src={topfacebook} width="32px" /></Nav.Link>
                                <Nav.Link href="#deets"><img src={toptelegram} width="32px" /></Nav.Link>
                                <Nav.Link href="#deets"><img src={toptron} width="32px" /></Nav.Link>
                                <Nav.Link href="#deets"><img src={topbar} width="32px" /></Nav.Link>
                            </div>
                        )
                    }




                </Nav>

            </Navbar>
        </div>
    )
}

export default Navbars