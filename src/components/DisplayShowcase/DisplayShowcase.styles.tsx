import styled from "styled-components";
import theme from "../../theme";

export const StyledDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${theme.colors.lightGray};
  border-radius: 0.25rem;
  padding: 2.75rem 0;
`;

export const StyledImg = styled.img`
  display: block;
  max-width: 80%;
  margin: 1.8rem auto 2.2rem auto;
`;
