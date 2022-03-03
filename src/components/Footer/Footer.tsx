import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  StyledFooter,
  StyledFooterNav,
  StyledButtonsContainer,
} from "./Footer.styles";
import ButtonSecondary from "../ButtonSecondary";
import TotalPrice from "../TotalPrice";
import ButtonBack from "../ButtonBack";

const Footer = () => {
  const { step } = useSelector((state: RootState) => state.builder);

  return (
    <StyledFooter>
      <StyledFooterNav>
        <TotalPrice />
        <StyledButtonsContainer>
          {step > 1 && <ButtonBack />}
          <ButtonSecondary />
        </StyledButtonsContainer>
      </StyledFooterNav>
    </StyledFooter>
  );
};
export default Footer;
