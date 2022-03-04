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
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%, -50%);

  &:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    border-top: 20px solid ${theme.colors.lightGray};
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }
`;
