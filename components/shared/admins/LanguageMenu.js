import Link from 'next/link';
import {
  Nav,
  NavItem
} from 'reactstrap';

import { languageMenu } from './../../../constants';

const LanguageMenu = props => {
  return (
      <Nav>
        {
          languageMenu.map(language => {
            return (
                <NavItem key={language.key}>
                  <Link href={language.key}>
                    <a>{language.label}</a>
                  </Link>
                </NavItem>
            )
          })
        }
      </Nav>
  )
};

export default LanguageMenu;
