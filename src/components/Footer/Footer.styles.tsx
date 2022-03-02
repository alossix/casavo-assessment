import styled from "styled-components";

export const StyledFooterNav = styled.nav`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 7.5rem;
    box-shadow: 0 0 39px rgb(0 0 0 / 10%);
  }
`;
