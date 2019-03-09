import React from 'react'

export default props => (
    // SubMenu
    // Exemplo: Cliente
    <li className='treeview'>
        <a>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
            <i className="fa fa-angle-left pull-right"></i>
        </a>

        {/* Item do sub menu */}
        {/* Exemplo: Listar Cliente, Cadastrar Cliente... */}
        <ul className='treeview-menu'>
            {props.children}
        </ul>
    </li>
)