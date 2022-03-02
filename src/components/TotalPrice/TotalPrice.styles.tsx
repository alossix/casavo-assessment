import styled from "styled-components";
import theme from "../../theme";

export const StyledTotalPriceContainer = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledTotalTitle = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1rem;
  color: ${theme.colors.darkGray};
  margin: 0 0 0.25rem 0;
`;

export const StyledTotalPrice = styled.a`
  font-size: 2rem;
  color: ${theme.colors.black};
  line-height: 2rem;
  margin-bottom: 0.2rem;
`;
