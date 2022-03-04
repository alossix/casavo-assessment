import styled from "styled-components";
import theme from "../../theme";

export const StyledAccessoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  margin-top: -1rem;

  @media screen and (min-width: 1024px) {
    margin-top: 2rem;
    max-width: 75rem;
  }

  @media screen and (min-width: 1440px) {
    gap: 1.5rem;
  }
`;

export const StyledAccessoryContainer = styled.div<{ checked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 700;
  padding: 2.2rem 2rem 1.2rem 2rem;
  border: 2px solid
    ${({ checked }) => (checked ? theme.colors.gold : theme.colors.lightGray)};
  transition: 0.3s ease;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.375rem;
    padding: 2.2rem 2rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.625rem;
    padding-right: 1.5rem;
  }
`;

export const StyledAccessorySubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: ${theme.colors.darkGray};
  font-size: 1rem;
  position: relative;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    color: ${theme.colors.black};
    gap: 2.5rem;
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
      animation-duration: 0.3s;
      width: 2.75rem;
      height: 2.75rem;
      background-color: ${theme.colors.gold};
      border: 2px solid ${theme.colors.gold};
  `};

  @media screen and (min-width: 768px) {
    position: static;
  }
`;
