import { HTMLAttributes } from "react";

const Arrow = ({ className }: HTMLAttributes<HTMLElement>): JSX.Element => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="6.42 9 11.17 6.58"
    width="14"
    height="14"
  >
    <path
      d="M15.88 9.29 12 13.17 8.12 9.29a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0z"
      fill="#24221f"
    />
  </svg>
);

export default Arrow;
