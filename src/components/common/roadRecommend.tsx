import React, { FC, useEffect } from "react";
import { RoadProps } from "@/store/slices/mock";
import { formatResultList, initCanvas } from "@/utils/tool";
import { roundData } from "./data";
import { Column, Row } from "../flex";
import CircleProgress from "../circleProgress";
import styled from "styled-components";
import { setshowQuickBet, setQuickBet } from "@/store/slices/luxury.slice";
import { removeRecommendRoad } from "@/store/slices/bet.slice";
import { drawBigEyeWay, Options } from "@/utils/dewdrop11";
import { useSetState } from "ahooks";
import { useDispatch } from "react-redux";

const TableInfo = styled(Column)`
  width: 140px;
  height: 106px;
  padding: 5px 13px 15px 13px;
  background: #252822;
`;

const Top = styled(Row)`
  width: 100%;
  height: 42px;
  color: #faf8f4;
`;

const Bot = styled(Row)`
  width: 100%;
  height: 24px;
  color: #d3af6e;
`;

const textMap = {
  banker: "庄",
  player: "闲",
  tie: "和",
};

const colorMap = {
  banker: "#CB5460",
  player: "#4C8CED",
  tie: "#4ea950",
};

const bigEyeOptions: Options = {
  rows: 10,
  columns: 14,
  lineWidth: 1,
  lineColor: "rgba(211, 175, 110, 0.3)",
  cellWidth: 10.6,
  cellHeight: 10.6,
  skipOddLine: true,
  textMap,
  colorMap,
};

const RoadRecommend: FC<RoadProps> = ({ id, type, deskNo, countDown }) => {
  const [{ duration, remaining }, setState] = useSetState({
    duration: `${Date.now()}_${countDown}`,
    remaining: 0,
  });
  const dispatch = useDispatch();
  const initList = formatResultList(roundData);

  const onEveryTurn = (remaining) => setState({ remaining });

  // 打开快捷投注
  const openQuickBet = () => {
    dispatch(
      setQuickBet({
        deskNo,
        type,
        countDown: remaining,
        id,
        chipsStack: {
          playerDouble: [],
          tie: [],
          bankerDouble: [],
          player: [],
          banker: [],
        },
      })
    );

    setTimeout(() => dispatch(setshowQuickBet(true)), 10);
  };

  useEffect(() => {
    const ctx = initCanvas(`canvas${id}`, false, 148.4, 108);
    drawBigEyeWay(ctx, initList, bigEyeOptions, [0, 0]);
  }, []);

  return (
    <Row style={{ cursor: "pointer" }} onClick={openQuickBet}>
      <TableInfo justify="space-between">
        <Top justify="space-between">
          <div>{deskNo}</div>
          <CircleProgress
            {...{
              width: 46,
              radius: 20,
              duration,
              onEveryTurn,
              callback: () => {
                console.log("停止下注");
                dispatch(removeRecommendRoad(id));
              },
            }}
          />
        </Top>
        <Bot justify="center">{type}</Bot>
      </TableInfo>
      <canvas id={`canvas${id}`}></canvas>
    </Row>
  );
};

export default RoadRecommend;
