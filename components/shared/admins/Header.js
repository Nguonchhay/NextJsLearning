import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavbarText
} from 'reactstrap';

import CollapseMenu from './CollapseMenu';
import LanguageMenu from './LanguageMenu';


const Header = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md" className="main-nav">
            <NavbarBrand href="/">NextJs</NavbarBrand>
            <CollapseMenu />

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <LanguageMenu />
            </Collapse>
        </Navbar>
    )
};

export default Header;
