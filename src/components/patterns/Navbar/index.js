import React from "react";
import styled from "styled-components";
import { primaryColor } from "../../../theme/variables.js";
import Link from '../../Link';
import { Image } from '../../../theme/components';

const Header = styled.nav`
  background-color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: right;
    align-items: center;
`;

const Li = styled.li`
    margin-left: 2rem;
`;


const Navbar = () => {
  return (
    <Header>
      <Image src="/images/logoComNomeRoxo.png" alt="Logo Smart Bank" />
      <div>
        <Ul>
          <Li><Link href="/" >Home</Link></Li>
          <Li><Link href="/portfolio" >Portfolio</Link></Li>
          <Li><Link href="/contato" >Contato</Link></Li>
        </Ul>
      </div>
    </Header>
  );
};

export default Navbar;