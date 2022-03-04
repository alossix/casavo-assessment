import styled from "styled-components";
import theme from "../../theme";

export const StyledAccessoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  width: 100%;
`;

export const StyledAccessoryContainer = styled.div<{ checked: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1.375rem;
  font-weight: 700;
  padding: 2.2rem 2rem;
  border: 2px solid
    ${({ checked }) => (checked ? theme.colors.gold : theme.colors.lightGray)};
`;

export const StyledAccessorySubContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
`;

export const StyledCheckButton = styled.button<{ checked: boolean }>`
  border: 2px solid ${theme.colors.lightGray};
  border-radius: 0.25rem;
  background-color: transparent;
  width: 1.9rem;
  height: 1.9rem;
  ${({ checked }) =>
    checked &&
    `
      animation-name: checkbox;
      animation-duration: 0.3s;
      width: 2.75rem;
      height: 2.75rem;
      background-color: ${theme.colors.gold};
      border: 2px solid ${theme.colors.gold};
  `};
`;
