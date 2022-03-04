import { OptionsProps } from "../../App";
import { StyledInfoBubble } from "./InfoBubble.styles";

type InfoBubbleProps = {
  option: OptionsProps;
  visible: boolean;
};

const InfoBubble = ({ option, visible }: InfoBubbleProps) => {
  return (
    <>
      {visible && (
        <StyledInfoBubble>
          {option.title}
          {" - "}
          {option.price
            .toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })
            .replace(",", ".")}
        </StyledInfoBubble>
      )}
    </>
  );
};
export default InfoBubble;
