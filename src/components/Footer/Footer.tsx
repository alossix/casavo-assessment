import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  StyledFooter,
  StyledFooterNav,
  StyledButtonsContainer,
} from "./Footer.styles";
import useWindowSize from "../../hooks/useWindowSize";
import AlertBox from "../AlertBox";
import ButtonSecondary from "../ButtonSecondary";
import TotalPrice from "../TotalPrice";
import ButtonBack from "../ButtonBack";

const Footer = () => {
  const { alertSet, selectedCar, step } = useSelector(
    (state: RootState) => state.builder
  );
  const size = useWindowSize({ width: 0, height: 0 });
  return (
    <>
      {step === 1 && alertSet && (
        <AlertBox>Please, select a model first!</AlertBox>
      )}
      <StyledFooter>
        <StyledFooterNav>
          <TotalPrice />
          {size.width < 1024 && selectedCar.id === 0 ? null : (
            <StyledButtonsContainer>
              {step > 1 && <ButtonBack />}
              <ButtonSecondary />
            </StyledButtonsContainer>
          )}
          {size.width > 1024 && (
            <StyledButtonsContainer>
              {step > 1 && <ButtonBack />}
              <ButtonSecondary />
            </StyledButtonsContainer>
          )}
        </StyledFooterNav>
      </StyledFooter>
    </>
  );
};
export default Footer;
