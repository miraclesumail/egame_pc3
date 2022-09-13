import React, { FC, useMemo } from "react";
import styled from "styled-components";
import CircleProgress from "@/components/circleProgress";
import { Column, Row } from "../flex";
import { Solid } from "@/components/common";
import casino from "@/assets/images/bet/bigCasino.svg";
import table from "@/assets/images/bet/table.svg";
import user from "@/assets/images/bet/user.svg";
import RoadMap from "@/components/roadCanvas";
import SelectPicker from "@/components/deskPick/selectPicker";
import { config, smallConfig } from "./config";
import { useSetState } from "ahooks";
import useEnterGame from "@/utils/hooks/useEnterGame";
import { DeskStatus } from "@/store/slices/mock";
import { useLocation, useNavigate } from "react-router-dom";
import { setShowTablePick } from "@/store/slices/bet.slice";
import { useAppDispatch, useAppSelector } from "@/store";
import { setCurrentDesk, resetChipsStack } from "@/store/slices/multi.slice";

interface Props {
  isSmall?: boolean;
}

interface ContainerProps extends Props {
  desk_no: string;
  game_mod: number;
  onChoose?: (data) => void;
  [key: string]: any;
}

const Container = styled(Column)<Props>`
  position: relative;
  width: ${({ isSmall }) => `${isSmall ? "382px" : "524px"}`};
  height: ${({ isSmall }) => `${isSmall ? "194px" : "265px"}`};
  background: #171717;
  overflow: hidden;
`;

const TableInfo = styled(Row)<Props>`
  width: ${({ isSmall }: any) => `${isSmall ? "382px" : "524px"}`};
  height: ${({ isSmall }) => `${isSmall ? "66px" : "90px"}`};
  padding: ${({ isSmall }) => `${isSmall ? "0 12px" : "0 15px"}`};
`;

const TableIcon = styled.div<any>`
  width: ${({ isSmall }) => `${isSmall ? "56px" : "72px"}`};
  height: ${({ isSmall }) => `${isSmall ? "42px" : "55px"}`};
  margin: ${({ isSmall }) => `${isSmall ? "0 9px" : "0 15px"}`};
  background: ${(props: any) => `url(${props.src}) no-repeat center`};
  background-size: 100%;
`;

const TableColumn = styled(Column)<Props>`
  height: ${({ isSmall }) => `${isSmall ? "50px" : "65px"}`};
  /* height: 65px; */
  width: ${({ isSmall }) => `${isSmall ? "240px" : "320px"}`};
  color: #faf8f4;
`;

const IconRow = styled(Row)<Props>`
  margin-right: ${({ isSmall }) => `${isSmall ? "10px" : "16px"}`};
  &:nth-of-type(2) {
    margin-right: ${({ isSmall }) => `${isSmall ? "10px" : "20px"}`};
  }
  img {
    width: ${({ isSmall }) => `${isSmall ? "18px" : "22px"}`};
    margin-right: ${({ isSmall }) => `${isSmall ? "6px" : "10px"}`};
  }
`;

const Mask = styled(Row)<Props>`
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ isSmall }: any) => `${isSmall ? "132px" : "176px"}`};
  background: rgba(0, 0, 0, 0.55);
`;

const StatusWrap = styled(Row)<Props>`
  position: absolute;
  width: ${({ isSmall }: any) => `${isSmall ? "120px" : "140px"}`};
  height: ${({ isSmall }: any) => `${isSmall ? "42px" : "48px"}`};

  text-align: center;
  line-height: 48px;
  left: ${({ isSmall }: any) => `${isSmall ? "calc(50% - 60px)" : "calc(50% - 70px)"}`};
  bottom: ${({ isSmall }: any) => `${isSmall ? "46px" : "86px"}`};
  border: 1px solid #b99454;
  border-radius: 24px;
  font-size: 15px;
  color: #d3af6e;
  z-index: 100;

  img {
    margin-right: 5px;
  }
`;

const options = [
  {
    area: "庄",
    limitRed: "5K-1M",
    tableRed: "5K-1M",
    interval: "5K-1M",
  },
  {
    area: "和",
    limitRed: "50K-10M",
    tableRed: "5K-1M",
    interval: "5K-1M",
  },
  {
    area: "庄/闲",
    limitRed: "50K-1M",
    tableRed: "5K-10M",
    interval: "5K-12M",
  },
];

const CirlceWrap = ({ banker, player, tie, type }) => (
  <>
    <Row>
      <Solid
        {...{
          width: type ? 20 : 26,
          height: type ? 20 : 26,
          background: "#CB5460",
          borderRadius: type ? 10 : 13,
          marginRight: type ? 4 : 7,
        }}
        style={{ marginRight: type ? "4px" : "7px" }}
      >
        庄
      </Solid>
      <span style={{ marginRight: type ? "10px" : "16px" }}>{banker}</span>
    </Row>
    <Row>
      <Solid
        {...{
          width: type ? 20 : 26,
          height: type ? 20 : 26,
          background: "#4C8CED",
          borderRadius: type ? 10 : 13,
          marginRight: type ? 4 : 7,
        }}
        style={{ marginRight: type ? "4px" : "7px" }}
      >
        闲
      </Solid>
      <span style={{ marginRight: type ? "10px" : "16px" }}>{player}</span>
    </Row>
    <Row>
      <Solid
        {...{
          width: type ? 20 : 26,
          height: type ? 20 : 26,
          background: "#538243",
          borderRadius: type ? 10 : 13,
          marginRight: type ? 4 : 7,
        }}
        style={{ marginRight: type ? "4px" : "7px" }}
      >
        和
      </Solid>
      <span style={{ marginRight: type ? "10px" : "16px" }}>{tie}</span>
    </Row>
  </>
);

const results = "bptqwefghijkbptqfwebpijk".split("");

/**
 * 大厅桌台选择
 * @param param0
 * @returns
 */
const Index: FC<ContainerProps> = ({
  isSmall,
  count,
  gameResult_statistics,
  desk_no,
  game_mod,
  persons,
  status,
  style,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const { currentDesk, currentChoose } = useAppSelector((state) => state.multi);

  const [{ showLimit }, setState] = useSetState({ showLimit: false });
  const enterGame = useEnterGame(desk_no);
  const countDown = useMemo(() => `${Date.now()}_${count}`, [count]);
  console.log(isSmall, "isSmallisSmallisSmall");

  const onMouseEnter: any = (e: MouseEvent) => setState({ showLimit: true });
  const onMouseLeave: any = (e: MouseEvent) => setState({ showLimit: false });

  const onChoose = (deskId) => {
    const temp = [...currentDesk];
    temp[currentChoose] = deskId;
    dispatch(setCurrentDesk(temp));
    dispatch(resetChipsStack(currentChoose));
    dispatch(setShowTablePick(false));
    console.log("multiBet", currentChoose);
  };

  const startGame = async () => {
    if (status === DeskStatus.MULTIPLE) {
      setTimeout(() => navigate("/multiBet"));
    } else {
      enterGame();
    }
  };

  const handleOnClick = () => {
    if (pathname === "/multiBet") {
      onChoose(desk_no);
    } else {
      if (pathname === "/tablePick") {
        startGame();
      } else {
        dispatch(setShowTablePick(false));
        setTimeout(startGame, 1000);
      }
    }
  };

  return (
    <Container isSmall={isSmall} style={style} onClick={handleOnClick}>
      <TableInfo isSmall={isSmall}>
        <CircleProgress
          {...{
            width: isSmall ? 48 : 64,
            radius: isSmall ? 20 : 28,
            duration: countDown,
            callback: () => {
              console.log("停止下注");
            },
          }}
        />

        <TableIcon {...{ isSmall, src: casino }} />
        <TableColumn justify="space-between" isSmall={isSmall}>
          <Row justify="space-between" style={{ width: "100%" }}>
            <Solid
              {...{
                width: isSmall ? 39 : 49,
                height: isSmall ? 18 : 29,
                background: "#252822",
                color: "#fff",
                borderRadius: 100,
              }}
            >
              {game_mod === 1 ? "快速" : "传统"}
            </Solid>

            <Solid
              {...{
                width: isSmall ? 67 : 82,
                height: isSmall ? 18 : 29,
                background: "#252822",
                color: "#fff",
                borderRadius: 100,
              }}
              style={{ cursor: "pointer" }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              5K-1M
            </Solid>
          </Row>

          <Row>
            <IconRow isSmall={isSmall}>
              <img src={table} alt="" />
              <span>{desk_no}</span>
            </IconRow>

            <IconRow isSmall={isSmall}>
              <img src={user} alt="" />
              <span>{persons}</span>
            </IconRow>

            <CirlceWrap
              {...{
                banker: gameResult_statistics.bank,
                player: gameResult_statistics.player,
                tie: gameResult_statistics.tie,
                type: isSmall,
              }}
            />
          </Row>
        </TableColumn>
      </TableInfo>
      {!showLimit ? (
        <RoadMap {...{ results, config: isSmall ? smallConfig : config }} />
      ) : (
        <SelectPicker options={options} isSmall={isSmall} />
      )}
      {/* <RoadMap {...{ results, config: isSmall ? smallConfig : config }} /> */}

      {/* <Mask isSmall={isSmall}>
        <StatusWrap justify="center" isSmall={isSmall}>包台中</StatusWrap>
      </Mask> */}
    </Container>
  );
};

export default Index;
