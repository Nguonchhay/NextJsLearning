import React, { useState } from 'react';
import { Nav } from 'reactstrap';


const CollapseMenu = () => {
    const [ icon, setIcon ] = useState('fa-angle-left');
    const [ isOpen, setIsOpen ] = useState(true);

    const toggle = () => {
        if (isOpen) {
            setIcon('fa-angle-left');
        } else {
            setIcon('fa-angle-right');
        }

        setIsOpen(!isOpen);
    }

    return (
        <Nav className="collapse-menu" onClick={toggle}>
            <i className="fas fa-angle-left"></i>
            Menu
        </Nav>
    )
};

export default CollapseMenu;
