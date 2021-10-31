import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <div className="container cvc">
                        <NavLink className="navbar-brand cvc2" to="/">الله</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse navA" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <NavLink activeClassName="NavLinkQ" className="nav-link" to="/Home">الصفحة الرئيسية <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink activeClassName="NavLinkQ" className="nav-link" to="/Quran">القرأن الكريم  <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink activeClassName="NavLinkQ" className="nav-link" to="/Conversations">أحاديث <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink activeClassName="NavLinkQ" className="nav-link" to="/PrayerTime">توقيت الصلاه  <span className="sr-only">(current)</span></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;