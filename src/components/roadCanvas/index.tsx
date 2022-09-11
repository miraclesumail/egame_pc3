import React, {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { formatResultList, initCanvas } from "@/utils/tool";
import {
  drawBigEyeWay,
  drawBigWay,
  drawCockroachWay,
  drawDishWay,
  drawSmallWay,
} from "@/utils/drawRoad";
import RoadMaps from "@/utils/roadmaps";

type Axis = {
  cols: number;
  rows: number;
};

interface Config {
  breadplate: Axis;
  bigroad: Axis;
  bigeyeboy: Axis;
  smallroad: Axis;
  cockroachPig: Axis;
  cellWidth: number;
  //   cellHeight: number;
  gridLineWidth: number;
}

interface Props {
  results: string[];
  config: Config;
}

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

function initData(
  results: string[],
  config: Config,
  canvas: HTMLCanvasElement
) {
  const {
    cellWidth,
    gridLineWidth,
    breadplate,
    bigeyeboy,
    bigroad,
    smallroad,
    cockroachPig,
  } = config;
  const canvasWidth =
    cellWidth * breadplate.cols +
    (cellWidth / 2) * bigroad.cols +
    gridLineWidth;
  const canvasHeight = cellWidth * breadplate.rows + gridLineWidth;

  const ctx = initCanvas(canvas, false, canvasWidth, canvasHeight);

  const dishWayWidth = cellWidth * breadplate.cols;
  const smallWayWidth = (cellWidth / 4) * smallroad.cols;
  const bigWayHeight = (cellWidth / 2) * bigroad.rows;
  const bigEyeHeight = (cellWidth / 4) * bigeyeboy.rows;

  const roadMap: any = new RoadMaps({
    results,
    config: {
      bigroad,
      bigeyeboy,
      smallroad,
      cockroachPig,
    },
  });

  console.log(roadMap, "roadMaproadMaproadMap");
  const common = {
    textMap,
    colorMap,
    cellWidth: cellWidth,
    cellHeight: cellWidth,
    lineColor: "#f5d300",
    lineWidth: 1,
  };

  drawDishWay(
    ctx,
    roadMap.breadplate.results,
    { ...common, rows: breadplate.rows, columns: breadplate.cols },
    [0, 0]
  );

  drawBigWay(
    ctx,
    roadMap.bigroad.matrix,
    {
      ...common,
      rows: bigroad.rows,
      columns: bigroad.cols,
      cellWidth: cellWidth / 2,
      cellHeight: cellWidth / 2,
    },
    [dishWayWidth, 0]
  );
  drawBigEyeWay(
    ctx,
    roadMap.bigeyeboy.matrix,
    {
      ...common,
      rows: bigeyeboy.rows,
      columns: bigeyeboy.cols,
      cellWidth: cellWidth / 4,
      cellHeight: cellWidth / 4,
    },
    [dishWayWidth, bigWayHeight]
  );

  drawSmallWay(
    ctx,
    roadMap.smallroad.matrix,
    {
      ...common,
      rows: smallroad.rows,
      columns: smallroad.cols,
      cellWidth: cellWidth / 4,
      cellHeight: cellWidth / 4,
    },
    [dishWayWidth, bigWayHeight + bigEyeHeight]
  );

  drawCockroachWay(
    ctx,
    roadMap.cockroachPig.matrix,
    {
      ...common,
      rows: cockroachPig.rows,
      columns: cockroachPig.cols,
      cellWidth: cellWidth / 4,
      cellHeight: cellWidth / 4,
    },
    [dishWayWidth + smallWayWidth, bigWayHeight + bigEyeHeight]
  );

  return ctx;
}

let timer;

const Index = forwardRef(({ results, config }: Props, ref: Ref<any>) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useImperativeHandle(ref, () => ({
    inquiry,
  }));

  function inquiry(winner: "b" | "p") {
    let i = 0;
    const list: string[] = [...results, winner];
    clearInterval(timer);
    initData(list, config, canvasRef.current);

    timer = setInterval(() => {
      if (i % 2) {
        initData(list, config, canvasRef.current);
      } else {
        initData(results, config, canvasRef.current);
      }
      if (i === 4) clearInterval(timer);
      i++;
    }, 500);
  }

  useEffect(() => {
    console.log(results, "resultsresultsresultsresultsresultsresultsresults");
    initData(results, config, canvasRef.current);
  }, [results]);

  return <canvas ref={canvasRef}></canvas>;
});

export default Index;
