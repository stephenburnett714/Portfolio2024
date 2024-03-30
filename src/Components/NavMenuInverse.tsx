import { NavLink } from "react-router-dom";
import styled from 'styled-components';

interface UlProps {
  open: boolean;
}

const Ul = styled.ul<UlProps>`
  list-style: none;
  display: flex;
  justify-content: center;

  li {
    padding: 22px 10px;
  }

  @media (min-width: 1023px) { 
    display: none;
  }

  @media (max-width: 1023.1px) { 
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    margin: 0;
    align-items:center;
    transition: transform .3s ease-in-out;
  }
`;

interface NavMenuProps {
  setOpen: (open: boolean) => void;
  open: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({ setOpen, open }) => {

  return (
    <Ul open={open}>
      <NavLink to={'/'} onClick={() => setOpen(!open)}>
        <li className="text-white text-2xl">Home</li>
      </NavLink>

      <NavLink to={'/about'} onClick={() => setOpen(!open)}>
        <li className="text-white text-2xl">About</li>
      </NavLink>

      <NavLink to={'/work'}>
        <li onClick={() => setOpen(!open)} className="text-white text-2xl">Work</li>
      </NavLink>

      <NavLink to={'/contact'}>
        <li onClick={() => setOpen(!open)} className="text-white text-2xl">Contact</li>
      </NavLink>
    </Ul>
  );
}

export default NavMenu;
