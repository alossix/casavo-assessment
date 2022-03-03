import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  height: 3.375rem;
  width: 100vw;
  position: fixed;
  bottom: 0;

  @media screen and (min-width: 1024px) {
    height: 7.5rem;
    box-shadow: 0 0 40px rgb(0 0 0 / 10%);
  }
`;

export const StyledFooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;

  @media screen and (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);

  @media screen and (min-width: 1024px) {
    box-shadow: none;
    justify-content: flex-end;
    gap: 1rem;
  }
`;
