import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { formatResultList, initCanvas } from "@/utils/tool";
import {
  drawDishWay,
  drawBigWay,
  drawBigEyeWay,
  drawSmallWay,
  drawCockroachWay,
} from "@/utils/drawRoad";
import RoadCanvas from "@/components/roadCanvas";
import RoadMaps from "@/utils/roadmaps";

const Container: any = styled.div`
  position: relative;
  background-size: 100% 528px, 100% 639px;
  background-repeat: no-repeat, no-repeat;
  background-position: left bottom, left top;
  width: 1920px;
  height: 839px;
  margin: 0 auto;
  z-index: 1;
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

const results = "bptqwefghijkbptqfwebpijk".split("");

const config = {
  breadplate: {
    rows: 6,
    cols: 8,
  },
  bigroad: {
    rows: 6,
    cols: 8,
  },
  bigeyeboy: {
    rows: 6,
    cols: 16,
  },
  smallroad: {
    rows: 6,
    cols: 8,
  },
  cockroachPig: {
    rows: 6,
    cols: 8,
  },
  cellWidth: 50,
  gridLineWidth: 1,
};

const Index = () => {
  const ref = useRef<HTMLCanvasElement>();

  useEffect(() => {
    // const ctx = initCanvas(ref.current, false, 1500, 600);
    // const roadMap: any = new RoadMaps({
    //   results: "bptqwefghijkbptqfwebpijk".split(""),
    //   config: {
    //     bigroad: {
    //       rows: 6,
    //       cols: 8,
    //     },
    //     bigeyeboy: {
    //       rows: 6,
    //       cols: 16,
    //     },
    //     smallroad: {
    //       rows: 6,
    //       cols: 8,
    //     },
    //     cockroachPig: {
    //       rows: 6,
    //       cols: 8,
    //     },
    //   },
    // });
    // console.log(roadMap);
    // drawDishWay(
    //   ctx,
    //   roadMap.breadplate.results,
    //   {
    //     textMap,
    //     colorMap,
    //     rows: 6,
    //     columns: 8,
    //     cellWidth: 50,
    //     cellHeight: 50,
    //     lineColor: "#f5d300",
    //     lineWidth: 1,
    //   },
    //   [0, 0]
    // );
    // drawBigWay(
    //   ctx,
    //   roadMap.bigroad.matrix,
    //   {
    //     textMap,
    //     colorMap,
    //     rows: 6,
    //     columns: 8,
    //     cellWidth: 25,
    //     cellHeight: 25,
    //     lineColor: "#f5d300",
    //     lineWidth: 1,
    //   },
    //   [400, 0]
    // );
    // drawBigEyeWay(
    //   ctx,
    //   roadMap.bigeyeboy.matrix,
    //   {
    //     textMap,
    //     colorMap,
    //     rows: 6,
    //     columns: 16,
    //     cellWidth: 12.5,
    //     cellHeight: 12.5,
    //     lineColor: "#f5d300",
    //     lineWidth: 1,
    //   },
    //   [400, 150]
    // );
    // drawSmallWay(
    //   ctx,
    //   roadMap.smallroad.matrix,
    //   {
    //     textMap,
    //     colorMap,
    //     rows: 6,
    //     columns: 8,
    //     cellWidth: 12.5,
    //     cellHeight: 12.5,
    //     lineColor: "#f5d300",
    //     lineWidth: 1,
    //   },
    //   [400, 225]
    // );
    // drawCockroachWay(
    //   ctx,
    //   roadMap.cockroachPig.matrix,
    //   {
    //     textMap,
    //     colorMap,
    //     rows: 6,
    //     columns: 8,
    //     cellWidth: 12.5,
    //     cellHeight: 12.5,
    //     lineColor: "#f5d300",
    //     lineWidth: 1,
    //   },
    //   [500, 225]
    // );
  }, []);

  return (
    <Container>
      <RoadCanvas {...{ results, config }} />
      {/* <canvas ref={ref}></canvas> */}
    </Container>
  );
};

export default Index;
