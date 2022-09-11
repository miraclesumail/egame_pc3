import { Column, Row } from "@/components/flex";
import React, { useMemo } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "@/components/Header";
import SlideModal from "@/components/slideModal";
import TablePick from "@/components/tablePick";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { setShowTablePick } from "@/store/slices/bet.slice";

interface Props {}
const TitleView = styled(Row)`
  font-size: 12rem;
`;

interface RoutePropsType {
  [key: string]: any;
}
const Layout2 = (props: Props) => {
  console.log(props);
  const [routeProps, setRouteProps] = React.useState<RoutePropsType>({});
  const title = useMemo(() => {
    if (routeProps?.title) return decodeURIComponent(routeProps.title);
    return "";
  }, [routeProps.title]);
  
  return (
    <Column>
      <TablePick />
      {/* <TitleView className="title">{title}</TitleView> */}
      <Header />
      <Outlet context={[routeProps, setRouteProps]} />
    </Column>
  );
};

export default Layout2;
