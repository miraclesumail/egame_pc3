import React, { FC, memo, useEffect, useMemo } from "react";
import styled from "styled-components";
import { Column, Row } from "@/components/flex";
import classnames from "classnames";
import CircleProgress from "@/components/circleProgress";
import { List } from "@/store/slices/mock";
import RoadMap from "@/components/roadMap";
import setting from "@/assets/images/bet/setting.svg";
import multiBg from "@/assets/images/bet/multiBg.png";
import casino from "@/assets/images/bet/bigCasino.svg";
import table from "@/assets/images/bet/table.svg";
import user from "@/assets/images/bet/user.svg";
import { roundData } from "@/views/Bet/data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Modals from "@/components/Header/Modals";
import SelectPicker from "./selectPicker";
import { IStorage } from "@/utils";
import { useSetState } from "ahooks";

export enum DeskStatus {
  OPEN = "OPEN",
  OCCUPY = "OCCUPY",
  MAINTAIN = "MAINTAIN",
  CHANGE = "CHANGE",
  MULTIPLE = "MULTIPLE",
}

const deskTypes = {
  tradition: "传统",
  quick: "快速",
};

interface Props extends List {
  // status: DeskStatus;
  type: boolean;
}

type CircleProps = {
  width: number;
  height: number;
  borderRadius: number;
  background: string;
  marginRight?: number;
};

const Container = styled(Column)<any>`
  width: ${({ type }: any) => `${type ? "412px" : "549px"}`};
  height: ${({ type }: any) => `${type ? "209px" : "278px"}`};
  /* width: 549px;
  height: 278px; */
  display: flex;
  flex-direction: column;
`;

const TabelCell = styled(Column)`
  position: relative;
  width: ${({ type }: any) => `${type ? "382px" : "524px"}`};
  height: ${({ type }: any) => `${type ? "194px" : "265px"}`};
  background: #f0f0f0;
  border-radius: 8px 8px 0px 0px;
  overflow: hidden;

  &.disable {
    cursor: default;

    &::after {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      width: 100%;
      height: ${({ type }: any) => `${type ? "132px" : "174px"}`};
      background: rgba(0, 0, 0, 0.6);
    }
  }

  &.normal {
    cursor: pointer;
  }
`;

const Multiple = styled(Column)`
  position: relative;
  padding-top: 50px;
  width: ${({ type }: any) => `${type ? "93%" : "95%"}`};
  height: ${({ type }: any) => `${type ? "93%" : "95%"}`};
  background: ${(props: any) => `url(${multiBg}) no-repeat center`};
  border-radius: 8px 8px 0px 0px;
  overflow: hidden;
  cursor: pointer;

  span {
    color: #faf8f4;
    font-size: ${({ type }: any) => `${type ? "24px" : "28px"}`};
  }
`;

const StatusWrap = styled(Row)`
  position: absolute;
  width: ${({ type }: any) => `${type ? "120px" : "140px"}`};
  height: ${({ type }: any) => `${type ? "42px" : "48px"}`};

  text-align: center;
  line-height: 48px;
  left: ${({ type }: any) =>
    `${type ? "calc(50% - 60px)" : "calc(50% - 70px)"}`};
  bottom: ${({ type }: any) => `${type ? "46px" : "86px"}`};
  border: 1px solid #b99454;
  border-radius: 24px;
  font-size: 15px;
  color: #d3af6e;
  z-index: 100;

  img {
    margin-right: 5px;
  }
`;

const StartGame = styled.div`
  position: absolute;
  width: ${({ type }: any) => `${type ? "120px" : "140px"}`};
  height: ${({ type }: any) => `${type ? "42px" : "48px"}`};
  text-align: center;
  line-height: 48px;
  left: calc(50% - 70px);
  left: ${({ type }: any) =>
    `${type ? "calc(50% - 60px)" : "calc(50% - 70px)"}`};
  bottom: ${({ type }: any) => `${type ? "60px" : "106px"}`};
  background: linear-gradient(37.21deg, #eeab47 -24.69%, #b99454 56.84%);
  border-radius: 24px;
  font-size: 15px;
  color: #fff;
  z-index: 100;
`;

const TableInfo = styled(Row)`
  width: 100%;
  // height: 90px;
  height: ${({ type }: any) => `${type ? "64px" : "90px"}`};

  background: #171717;
  padding: ${({ type }: any) => `${type ? "0 10px" : "0 15px"}`};
`;

const TableIcon = styled.div<any>`
  width: ${({ type }: any) => `${type ? "56px" : "72px"}`};
  height: ${({ type }: any) => `${type ? "42px" : "55px"}`};
  /* width: 72px;
  height: 55px; */
  margin-left: 15px;
  background: ${(props: any) => `url(${props.src}) no-repeat center`};
  background-size: 100%;
`;

const TableColumn = styled(Column)`
  height: ${({ type }: any) => `${type ? "50px" : "65px"}`};
  /* height: 65px; */
  width: ${({ type }: any) => `${type ? "220px" : "260px"}`};
  /* width: 260px; */
  margin-left: 16px;
  color: #faf8f4;
`;

const TopSpan = styled.div`
  background: #252822;
  border-radius: 100px;
  padding: 2px 9px;
`;

const IconRow = styled(Row)<any>`
  margin-right: ${({ type }: any) => `${type ? "6px" : "10px"}`};

  &:nth-of-type(2) {
    margin-right: ${({ type }: any) => `${type ? "10px" : "20px"}`};
  }

  img {
    width: ${({ type }: any) => `${type ? "18px" : "22px"}`};
    margin-right: ${({ type }: any) => `${type ? "6px" : "10px"}`};
  }
`;

const Circle = styled.div<CircleProps>`
  width: ${(props: CircleProps) => `${props.width}px`};
  height: ${(props: CircleProps) => `${props.height}px`};
  border-radius: ${(props: CircleProps) => `${props.borderRadius}px`};
  background: ${(props: CircleProps) => `${props.background}`};
  text-align: center;
  line-height: ${(props: CircleProps) => `${props.height}px`};
  margin-right: ${(props: CircleProps) => `${props.marginRight || 0}px`};
`;

const CirlceWrap = ({ banker, player, tie, type }) => (
  <>
    <Row>
      <Circle
        {...{
          width: type ? 20 : 26,
          height: type ? 20 : 26,
          background: "#CB5460",
          borderRadius: type ? 10 : 13,
          marginRight: type ? 4 : 7,
        }}
      >
        庄
      </Circle>
      <span style={{ marginRight: "15px" }}>{banker}</span>
    </Row>
    <Row>
      <Circle
        {...{
          width: type ? 20 : 26,
          height: type ? 20 : 26,
          background: "#4C8CED",
          borderRadius: type ? 10 : 13,
          marginRight: type ? 4 : 7,
        }}
      >
        闲
      </Circle>
      <span style={{ marginRight: "15px" }}>{player}</span>
    </Row>
    <Row>
      <Circle
        {...{
          width: type ? 20 : 26,
          height: type ? 20 : 26,
          background: "#538243",
          borderRadius: type ? 10 : 13,
          marginRight: type ? 4 : 7,
        }}
      >
        和
      </Circle>
      <span style={{ marginRight: "15px" }}>{tie}</span>
    </Row>
  </>
);

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

const Table: FC<Props> = ({
  status,
  type,
  count,
  deskType,
  deskNo,
  banker,
  player,
  tie,
  limit,
  persons,
}) => {
  const [{ showLimit }, setState] = useSetState({ showLimit: false });
  const navigate = useNavigate();

  console.log("tis is render table", deskNo, type);

  const isDisable = useMemo(() => status !== DeskStatus.OPEN, [status]);

  const onMouseEnter: any = (e: MouseEvent) => setState({ showLimit: true });

  const onMouseLeave: any = (e: MouseEvent) => setState({ showLimit: false });

  const countDown = useMemo(() => `${Date.now()}_${count}`, [count]);

  const confirm = (data) => {
    IStorage.setItem("betPreference", String(data));
    if (data) {
      setTimeout(() => navigate("/luxuryBet"));
    } else {
      setTimeout(() => navigate("/classic"));
    }
  };

  const startGame = async () => {
    if (status === DeskStatus.MULTIPLE) {
      setTimeout(() => navigate("/multiBet"));
    } else {
      const betPreference = await IStorage.getItem("betPreference");
      console.log(betPreference, "betPreferencebetPreference");
      if (!Object.keys(betPreference).length) {
        Modals.showSelectBetting({ confirm });
      } else {
        if (betPreference) {
          setTimeout(() => navigate("/luxuryBet"));
        } else {
          setTimeout(() => navigate("/classic"));
        }
      }
    }
  };

  return (
    <Container
      ailgn={"center"}
      justify={"center"}
      {...{ type }}
      onClick={startGame}
    >
      {status === DeskStatus.MULTIPLE ? (
        <Multiple justify="space-between" {...{ type }}>
          <span>多台投注</span>
          <StartGame {...{ type }}>开始游戏</StartGame>
        </Multiple>
      ) : (
        <TabelCell
          className={classnames({
            disable: isDisable,
            normal: !isDisable,
          })}
          {...{ type }}
          ailgn={isDisable ? "center" : "flex-start"}
          justify={isDisable ? "center" : "flex-start"}
        >
          <TableInfo {...{ type }}>
            <CircleProgress
              {...{
                width: type ? 48 : 64,
                radius: type ? 20 : 28,
                duration: countDown,
                callback: () => {
                  console.log("停止下注");
                },
              }}
            />
            <TableIcon {...{ type, src: casino }} />
            <TableColumn
              justify="space-between"
              ailgn="flex-start"
              {...{ type }}
            >
              <Row style={{ width: "180px" }} justify="space-between">
                <TopSpan>{deskTypes[deskType]}</TopSpan>
                <TopSpan
                  style={{ cursor: "pointer" }}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  {limit}
                </TopSpan>
              </Row>

              <Row
                justify="flex-start"
                style={{ width: type ? "220px" : "260px" }}
              >
                <IconRow {...{ type }}>
                  <img src={table} alt="" />
                  <span>{deskNo}</span>
                </IconRow>

                <IconRow {...{ type }}>
                  <img src={user} alt="" />
                  <span>{persons}</span>
                </IconRow>
                <CirlceWrap {...{ banker, player, tie, type }} />
              </Row>
            </TableColumn>
          </TableInfo>
          {type ? (
            <Row>
               {showLimit ? (
                <SelectPicker options={options} small={type}/>
              ) : (
                <RoadMap dataSource={roundData} width={390} />
              )}
            </Row>
          ) : (
            <Row>
              {showLimit ? (
                <SelectPicker options={options} small={type}/>
              ) : (
                <RoadMap dataSource={roundData} width={520} />
              )}
            </Row>
          )}

          {status === DeskStatus.OCCUPY && (
            <StatusWrap justify="center" {...{ type }}>
              包台中
            </StatusWrap>
          )}
          {status === DeskStatus.CHANGE && (
            <StatusWrap justify="center" {...{ type }}>
              换靴中
            </StatusWrap>
          )}

          {status === DeskStatus.MAINTAIN && (
            <StatusWrap justify="center" {...{ type }}>
              <img src={setting} alt="" width={19} />
              <span>维护中</span>
            </StatusWrap>
          )}
        </TabelCell>
      )}
    </Container>
  );
};

export default memo(Table, (prevProps: Props, nextProps: Props) => {
  const { deskNo, list, type, banker, player, tie, persons, limit, status } =
    prevProps;
  const {
    deskNo: deskNo1,
    list: list1,
    type: type1,
    banker: banker1,
    player: player1,
    tie: tie1,
    persons: persons1,
    limit: limit1,
    status: status1,
  } = nextProps;

  return (
    deskNo === deskNo1 &&
    type === type1 &&
    banker === banker1 &&
    player === player1 &&
    tie === tie1 &&
    status === status1 &&
    JSON.stringify(list) === JSON.stringify(list1)
  );
});
