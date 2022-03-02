import { HTMLAttributes } from "react";

const Arrow = ({ className }: HTMLAttributes<HTMLElement>): JSX.Element => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="16px"
    height="32px"
    viewBox="0 0 16 32"
  >
    <g transform="translate(0, 16)">
      <polygon
        fill="#fff"
        points="4.9,15.7 3.4,14.3 9.7,8 3.4,1.7 4.9,0.3 12.6,8 "
      />
    </g>
  </svg>
);

export default Arrow;
