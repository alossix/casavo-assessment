import styled from "styled-components";
import theme from "../../theme";

export const StyledAccessoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 0.8rem;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 1rem;
    max-width: 75rem;
    gap: 1.25rem;
  }

  @media screen and (min-width: 1481px) {
    gap: 1.5rem;
  }
`;

export const StyledAccessoryContainer = styled.div<{ checked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.5rem;
  padding: 2rem 1.5rem 1.6rem 1.5rem;
  border: 2px solid
    ${({ checked }) => (checked ? theme.colors.gold : theme.colors.lightGray)};
  transition: 0.3s ease;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.375rem;
    line-height: 1.4rem;
    padding: 1.7rem 1.5rem 1.65rem 2rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.625rem;
    padding: 2.3rem 1.5rem 2.3rem 2rem;
  }
`;

export const StyledAccessorySubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  color: ${theme.colors.darkGray};
  font-size: 1rem;
  line-height: 1rem;
  position: relative;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    color: ${theme.colors.black};
    gap: 1.8rem;
    font-size: 1.375rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.625rem;
    gap: 2rem;
  }
`;
export const StyledCheckButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 3rem;
  height: 3rem;

  @media screen and (min-width: 768px) {
    position: static;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    height: 2rem;
  }
`;

export const StyledCheckButton = styled.button<{ checked: boolean }>`
  @keyframes accessoriesCheckbox {
    0% {
      transform: scale(1.25);
    }
    25% {
      transform: scale(1.1);
    }
    75% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1.1);
    }
  }

  border: 2px solid ${theme.colors.lightGray};
  border-radius: 0.25rem;
  background-color: transparent;
  width: 1.9rem;
  height: 1.9rem;
  position: absolute;
  top: 2.25rem;

  ${({ checked }) =>
    checked &&
    `
      animation-name: accessoriesCheckbox;
      animation-duration: 0.35s;
      width: 2.75rem;
      height: 2.75rem;
      background-color: ${theme.colors.gold};
      border: 2px solid ${theme.colors.gold};
  `};

  @media screen and (min-width: 768px) {
    position: static;
  }
`;
