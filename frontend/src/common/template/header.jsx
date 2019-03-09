import React from 'react';

export default props => (
    <header className="main-header">
        <a href="/#/" className='logo'>

            {/* Nome no menu pequeno */}
            <span className="logo-mini"><b>My</b>M</span>

            {/* Nome no menu grande */}
            <span className="logo-lg">
                <i className="fa fa-money"></i>
                <b> My</b> Money
            </span>

        </a>

        {/* Botão Amburguer */}
        <nav className="navbar navbar-static-top">
            <a href="/#/" className="sidebar-toggle" data-toggle="offcanvas" ></a>
        </nav>
    </header>
)