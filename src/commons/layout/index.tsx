import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutSidebar from "./sidebar";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const BodyWrapper = styled.div`
  display: flex;
`;

const Body = styled.div`
 width: ;
`;

interface ILayoutProps {
  children: ReactNode
}


export default function Layout(props: ILayoutProps){

  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar />
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  )
}