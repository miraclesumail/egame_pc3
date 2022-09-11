import { Row, Column } from "@/components/flex";
import { Throttle } from "@/utils";
import { useSelector, useDispatch } from "react-redux";
import useEventListener from "@/utils/hooks/useEventListener";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { setTableList, setShowSelectBetting } from "@/store/slices/bet.slice";
import SelectBetting from "@/components/common/SelectBetting";
import Table, { DeskStatus } from "./components/Table";
import { ws } from "@/App";
import RoadTip from "./components/roadTip";
import { useNavigate } from "react-router-dom";
import { useSetState } from "ahooks";
import { RootState, useAppSelector } from "@/store";
import { getDeskAmountSelector } from "@/store/slices/config.slice";
import useMidiPlay from "@/utils/hooks/useMidiPlay";

const Container = styled(Row)<any>`
  width: 100%;
  height: 100vh;
  align-items: flex-start;
  overflow-y: auto;
  // overflow-x: hidden;
  /* padding: 31px 136px; */
  background: #0d0d0d;
`;

function getArr(data: any[], group: number) {
  const total = Math.ceil(data.length / group);
  return Array.from({ length: total }, (_, index) => index).reduce((prev: any, next) => {
    prev.push(data.slice(next * group, (next + 1) * group));
    return prev;
  }, []);
}

const ScaleColumn = styled(Column)<any>`
  padding-top: 50px;
  transform-origin: center top;
  transform: ${({ scale }: any) => `scale(${scale})`};
`;

const TablePick = () => {
  const [{ scale, currentPick }, setState] = useSetState({
    scale: document.body.clientWidth / 1920,
    currentPick: "",
  });
  const { tableList } = useSelector((state: any) => state.bet);
  const { music } = useAppSelector((state) => state.config);

  const deskAmount = useAppSelector(getDeskAmountSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEventListener("resize", new Throttle(changeScale, 50).run);
  useMidiPlay({
    url: "/bg.mp3.mid",
    loop: true,
    auto: music,
  });

  function changeScale() {
    const ratio = document.body.clientWidth / 1920;
    setState({ scale: ratio });
  }

  function onConfirm(selected: number) {
    onClose();
    setTimeout(() => navigate(selected ? "/classic" : "/luxuryBet"), 1000);
  }

  function onClose() {
    dispatch(setShowSelectBetting(false));
  }

  const tables = useMemo(() => getArr(tableList, deskAmount === 12 ? 4 : 3), [deskAmount, tableList]);

  // useEffect(() => {
  //   ws.createEventListener("getTableList", (result) => {
  //     console.log(result, "dsfsdf");
  //     dispatch(setTableList(result.list));
  //   });
  // }, []);

  return (
    <Container justify="center">
      <ScaleColumn style={{ width: "1648px" }} scale={scale}>
        {tables.map((item: any[], index: number) => {
          return (
            <Row
              justify={item.length === (deskAmount === 12 ? 4 : 3) ? "space-between" : "flex-start"}
              style={{ width: "100%" }}
              key={index}
            >
              {item.map((ele: any, index) => (
                <Table key={index} {...{ ...ele, type: deskAmount === 12 }}></Table>
              ))}
            </Row>
          );
        })}
      </ScaleColumn>
      <RoadTip />
    </Container>
  );
};

export default TablePick;
