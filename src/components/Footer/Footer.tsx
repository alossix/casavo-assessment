import ButtonSecondary from "../ButtonSecondary";
import TotalPrice from "../TotalPrice";
import { StyledFooter, StyledFooterNav } from "./Footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterNav>
        <TotalPrice totalPrice={0} />
        <ButtonSecondary>Colors</ButtonSecondary>
      </StyledFooterNav>
    </StyledFooter>
  );
};
export default Footer;
