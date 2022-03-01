import { ReactNode } from "react";

type ILayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: ILayoutProps) => {
  return <div>{children}</div>;
};
export default Layout;
