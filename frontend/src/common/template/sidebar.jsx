import React from 'react'
import Menu from './menu'

export default props => (
    // SideBar é o background 'preto' da barra lateral do menu
    <aside className="main-sidebar">
        <section className="sidebar">
            <Menu />
        </section>
    </aside>
)