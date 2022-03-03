import styled from "styled-components";
import theme from "../../theme";

export const StyledAlertBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 100%;
  height: 7.5rem;
  position: fixed;
  bottom: 0;
`;

export const StyledAlertBox = styled.div`
  background-color: ${theme.colors.black};
  color: white;
  padding: 0.8rem 1rem;
  width: 11.75rem;
  height: fit-content;
  white-space: nowrap;
  border-radius: 0.25rem;
`;
