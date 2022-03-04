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
  const { alertSet, selectedModel, step } = useSelector(
    (state: RootState) => state.builder
  );
  const { width } = useWindowSize();
  return (
    <>
      {step === 1 && alertSet && (
        <AlertBox>Please, select a model first!</AlertBox>
      )}
      <StyledFooter>
        <StyledFooterNav>
          <TotalPrice />
          {width < 1024 && selectedModel.id === 0 && null}
          {width < 1024 && selectedModel.id !== 0 && (
            <StyledButtonsContainer>
              {step > 1 && <ButtonBack />}
              <ButtonSecondary />
            </StyledButtonsContainer>
          )}
          {width >= 1024 && (
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
