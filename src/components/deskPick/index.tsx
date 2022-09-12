import React, { FC, useMemo } from "react";
import styled from "styled-components";
import CircleProgress from "@/components/circleProgress";
import { Column, Row } from "../flex";
import { Solid } from "@/components/common";
import casino from "@/assets/images/bet/bigCasino.svg";
import table from "@/assets/images/bet/table.svg";
import user from "@/assets/images/bet/user.svg";
import RoadMap from "@/components/roadCanvas";

interface Props {
  isSmall?: boolean;
}

interface ContainerProps extends Props {
  [key: string]: any;
}

const config = {
  breadplate: {
    rows: 6,
    cols: 8,
  },
  bigroad: {
    rows: 6,
    cols: 20,
  },
  bigeyeboy: {
    rows: 6,
    cols: 40,
  },
  smallroad: {
    rows: 6,
    cols: 20,
  },
  cockroachPig: {
    rows: 6,
    cols: 20,
  },
  cellWidth: 524 / 18,
  gridLineWidth: 1,
};

const smallConfig = {
  breadplate: {
    rows: 6,
    cols: 8,
  },
  bigroad: {
    rows: 6,
    cols: 20,
  },
  bigeyeboy: {
    rows: 6,
    cols: 40,
  },
  smallroad: {
    rows: 6,
    cols: 20,
  },
  cockroachPig: {
    rows: 6,
    cols: 20,
  },
  cellWidth: 382 / 18,
  gridLineWidth: 1,
};

const Container = styled(Column)<Props>`
  width: ${({ isSmall }) => `${isSmall ? 382 : 524}px`};
  height: ${({ isSmall }) => `${isSmall ? 194 : 265}px`};
  background: #171717;
  overflow: hidden;
`;

const TableInfo = styled(Row)<Props>`
  width: ${({ isSmall }) => `${isSmall ? 382 : 524}px`};
  height: ${({ isSmall }) => `${isSmall ? 66 : 90}px`};
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

const Index: FC<ContainerProps> = ({ isSmall = false, count, deskType }) => {
  const countDown = useMemo(() => `${Date.now()}_${count}`, [count]);

  return (
    <Container isSmall={isSmall}>
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
              {deskType}
            </Solid>

            <Solid
              {...{
                width: isSmall ? 67 : 82,
                height: isSmall ? 18 : 29,
                background: "#252822",
                color: "#fff",
                borderRadius: 100,
              }}
            >
              dsdasd
            </Solid>
          </Row>

          <Row>
            <IconRow isSmall={isSmall}>
              <img src={table} alt="" />
              <span>H0001</span>
            </IconRow>

            <IconRow isSmall={isSmall}>
              <img src={user} alt="" />
              <span>10</span>
            </IconRow>

            <CirlceWrap {...{ banker: 5, player: 8, tie: 6, type: isSmall }} />
          </Row>
        </TableColumn>
      </TableInfo>
      <RoadMap {...{ results, config: isSmall ? smallConfig : config }} />
    </Container>
  );
};

export default Index;
