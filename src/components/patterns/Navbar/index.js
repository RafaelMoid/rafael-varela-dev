import React from "react";
import styled from "styled-components";
import { primaryColor } from "..src/theme/variables.js";

const StyledCabecalho = styled.nav`
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

const StyledUl = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: right;
    align-items: center;
`;

const StyledLi = styled.li`
    margin-left: 2rem;
`;


const Navbar = () => {
  return (
    <StyledCabecalho>
      <Logo src="/images/logoComNomeRoxo.png" alt="Logo Smart Bank" />
      <div>
        <StyledUl>
                  <StyledLi><Link href="/" ><Image src="/images/logoComNomeRoxo.png"/></Link></StyledLi>
                  <StyledLi><Link href="/" >Home</Link></StyledLi>
                  <StyledLi><Link href="/portfolio" >Portfolio</Link></StyledLi>
                  <StyledLi><Link href="/contato" >Contato</Link></StyledLi>
              </StyledUl>
        </div>
    </StyledCabecalho>
  );
};

export default Navbar;