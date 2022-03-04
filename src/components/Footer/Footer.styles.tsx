import styled from "styled-components";
import theme from "../../theme";

export const StyledFooter = styled.footer`
  display: flex;
  height: 3.375rem;
  width: 100vw;
  position: fixed;
  bottom: 0;
  background-color: ${theme.colors.white};
  box-shadow: 0 0 25px rgb(0 0 0 / 20%);

  @media screen and (min-width: 1024px) {
    height: 7.5rem;
    box-shadow: 0 0 40px rgb(0 0 0 / 10%);
  }

  @media screen and (min-width: 1481px) {
    height: 7.5rem;
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

  @media screen and (min-width: 1024px) {
    box-shadow: none;
    justify-content: flex-end;
    gap: 1rem;
  }
`;
