import styled from "styled-components";

export const StyledFooterNav = styled.nav`
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  box-shadow: 0 0 25px rgb(0 0 0 / 20%);
  height: 3.375rem;

  @media screen and (min-width: 1024px) {
    height: 7.5rem;
    box-shadow: 0 0 40px rgb(0 0 0 / 10%);
  }
`;
