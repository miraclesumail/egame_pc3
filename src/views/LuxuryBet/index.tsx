import React from "react";
import Cover from "./components/cover";
import LiveVideo from "@/components/LiveVideo";
import {
  Player,
  Banker,
  Tie,
  BankerDouble,
  PlayerDouble,
} from "./components/deskSection";
import TableBot from './components/tableBot'
import { setshowQuickBet } from "@/store/slices/luxury.slice";
import LeftSide from "./components/leftSide";
import RightSide from "./components/rightSide";
import QuickBet from "@/components/common/quickBet";
import bgtable from "@/assets/images/luxuryBet/tableBg.png";
import outline from "@/assets/images/luxuryBet/bg-table-outline02.svg";
import detail from "@/assets/images/luxuryBet/bg-table-detail03.svg";
import RoadMap from "./components/roadMap";
import styled from "styled-components";
import MenuBar from "./components/menu-bar";
import { roundData, tablePosition } from "./data";
import { useSetState } from "ahooks";
import Zoom from "@/components/zoom";
import BetTable from "@/components/common/betTable";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@/components/Dialog";
import { useAppSelector } from "@/store";

const Container: any = styled.div`
  position: relative;
  background-image: url(${bgtable});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: left top;
  width: 1920px;
  height: 639px;
  margin: 0 auto;
  z-index: 1;
`;

const Wrap = styled.div`
  position: relative;
  width: 1920px;
  height: 600px;
  background-image: url(${outline});
  background-repeat: no-repeat;
  background-size: 1920px 498px;
  background-position: center bottom;
`;

const Decration = styled.div`
  width: 1920px;
  height: 639px;
  background-image: url(${detail});
  background-repeat: no-repeat;
  background-size: 1920px 274px;
  background-position: center bottom;
`;

const headLine = [
  { text: "座位", field: "seat" },
  { text: "会员", field: "member" },
  { text: "金额", field: "amount" },
];

const m3u8 =
  "https://pull-tx.cgcxs.net/live/cg01_m.m3u8?txSecret=9d34f2574174f17ab449b935a947bbeb&txTime=81C97A38";

const Index = () => {
  const [
    { initheight, scale, visible, showBetTable, showPick, showMask },
    setState,
  ] = useSetState<any>({
    initheight: document.body.clientHeight,
    scale: 1,
    visible: false,
    showBetTable: false,
    showPick: true,
    showMask: "",
  });
  const { seatNo } = useAppSelector((state) => state.luxury);

  const dispatch = useDispatch();

  const { showQuickBet } = useSelector((state: any) => state.luxury);

  function onClose() {
    setState({ showBetTable: false });
  }

  return (
    <Zoom {...{ width: 1920, height: 926 }}>
      <Container>
        <Wrap>
          <Decration />
          <div style={{ position: "absolute", left: 0, top: 0 }}>
            <svg
              data-v-a9f5d69a=""
              width="1920px"
              height="600px"
              viewBox="0 0 1920 600"
              version="1.1"
              transform="translate(0, -100px)"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <Player seatNo={seatNo}/>
              <Banker seatNo={seatNo}/>
              <BankerDouble />
              <PlayerDouble />
              <Tie />
              <TableBot {...tablePosition[seatNo]}/>
            </svg>
          </div>
        </Wrap>
        <LeftSide />
        <RightSide open={() => setState({ showBetTable: true })} />
        <LiveVideo source={m3u8} />
        <MenuBar />
      </Container>
      <RoadMap dataSource={roundData} />
      <QuickBet
        visible={showQuickBet}
        onClose={() => dispatch(setshowQuickBet(false))}
      />
      <Dialog
        visible={showBetTable}
        title="投注列表"
        buttons={[
          {
            type: "solid",
            text: "确定",
            action: onClose,
          },
        ]}
      >
        <div style={{ padding: "0 60px" }}>
          <BetTable head={headLine} />
        </div>
      </Dialog>
    </Zoom>
  );
};

export default Index;
