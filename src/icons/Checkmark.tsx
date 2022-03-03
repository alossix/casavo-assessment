import { HTMLAttributes } from "react";

const Checkmark = ({ className }: HTMLAttributes<HTMLElement>): JSX.Element => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="44px"
    height="44px"
    viewBox="8 3 44 44"
  >
    <g transform="translate(10, 10)">
      <polyline
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="square"
        strokeMiterlimit="10"
        points="2,12 9,19 22,6 &#10;&#9;"
        strokeLinejoin="miter"
      />
    </g>
  </svg>
);

export default Checkmark;
