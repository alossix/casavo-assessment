import styled from "styled-components";
import theme from "../../theme";

export const StyledInfoBubble = styled.div`
  display: flex;
  background-color: ${theme.colors.lightGray};
  padding: 0.7rem 1.1rem;
  border-radius: 2rem;
  text-transform: capitalize;
  white-space: nowrap;
  position: absolute;
  bottom: 3rem;
`;
