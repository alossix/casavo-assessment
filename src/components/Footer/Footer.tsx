import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ButtonSecondary from "../ButtonSecondary";
import TotalPrice from "../TotalPrice";
import { StyledFooter, StyledFooterNav } from "./Footer.styles";

const Footer = () => {
  const selectedCar = useSelector(
    (state: RootState) => state.builder.selectedCar
  );
  return (
    <StyledFooter>
      <StyledFooterNav>
        <TotalPrice totalPrice={selectedCar.price} />
        <ButtonSecondary>Colors</ButtonSecondary>
      </StyledFooterNav>
    </StyledFooter>
  );
};
export default Footer;
