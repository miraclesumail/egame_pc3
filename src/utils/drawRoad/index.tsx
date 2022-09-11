// 'tpbppbbtttwefijkbpbghijkbbpt'
import { resourceLimits } from "worker_threads";
import {
  drawGrid,
  drawText,
  drawSolidCircle,
  drawHollowCircle,
  drawDiagonalLine,
} from "./canvas";

interface Options {
  rows: number;
  columns: number;
  lineWidth: number;
  lineColor: string;
  cellWidth: number;
  cellHeight: number;
  textMap: {
    banker: string;
    player: string;
    tie: string;
  };
  colorMap: {
    banker: string;
    player: string;
    tie: string;
  };
}

interface bigResults {
  value: string;
  index: number;
  tie_count: number;
}

const identityDictionary = {
  b: "banker", // banker
  p: "player", // player
  t: "tie", // tie
  q: "banker", // banker banker-pair
  w: "banker", // banker banker-pair player-pair
  e: "banker", // banker player-pair
  f: "player", // player banker-pair
  g: "player", // player banker-pair player-pair
  h: "player", // player player-pair
  i: "tie", // tie banker-pair
  j: "tie", // tie banker-pair player-pair
  k: "tie", // tie player-pair
};
const bankerPair = ["q", "f", "i"];
const playerPair = ["e", "h", "k"];
const bpPair = ["w", "g", "j"];

// 珠盘路
export function drawDishWay(
  ctx: CanvasRenderingContext2D,
  result: string[],
  options: Options,
  origin: [number, number] = [0, 0]
) {
  const { rows, cellWidth, cellHeight, colorMap, textMap } = options;
  const radius = ((cellWidth - 1) / 2) | 0;

  drawGrid(ctx, { ...options, origin });

  for (let i = 0; i < result.length; i++) {
    const temp = result[i];
    const x = origin[0] + ((i / rows) | 0) * cellWidth + cellWidth / 2;
    const y = origin[1] + (i % rows | 0) * cellHeight + cellHeight / 2;
    drawSolidCircle(ctx, {
      x,
      y,
      radius,
      color: colorMap[identityDictionary[temp]],
    });
    drawText(ctx, {
      x,
      y,
      text: textMap[identityDictionary[temp]],
      color: "#fff",
      fontSize: `${cellWidth / 2 + 1}px`,
    });

    if (bankerPair.includes(temp)) {
      const x_ = x - Math.cos(Math.PI / 4) * radius;
      const y_ = y - Math.cos(Math.PI / 4) * radius;

      drawHollowCircle(ctx, {
        x: x_,
        y: y_,
        radius: radius / 4,
        fillColor: colorMap.banker,
        lineWidth: 1,
        color: "#fff",
      });
    }

    if (playerPair.includes(temp)) {
      const x_ = x + Math.cos(Math.PI / 4) * radius;
      const y_ = y + Math.cos(Math.PI / 4) * radius;

      drawHollowCircle(ctx, {
        x: x_,
        y: y_,
        radius: radius / 4,
        fillColor: colorMap.player,
        lineWidth: 1,
        color: "#fff",
      });
    }

    if (bpPair.includes(temp)) {
      const x_1 = x - Math.cos(Math.PI / 4) * radius;
      const y_1 = y - Math.cos(Math.PI / 4) * radius;

      const x_2 = x + Math.cos(Math.PI / 4) * radius;
      const y_2 = y + Math.cos(Math.PI / 4) * radius;

      drawHollowCircle(ctx, {
        x: x_1,
        y: y_1,
        radius: radius / 4,
        fillColor: colorMap.banker,
        lineWidth: 1,
        color: "#fff",
      });

      drawHollowCircle(ctx, {
        x: x_2,
        y: y_2,
        radius: radius / 4,
        fillColor: colorMap.player,
        lineWidth: 1,
        color: "#fff",
      });
    }
  }
}

// 大路
export function drawBigWay(
  ctx: CanvasRenderingContext2D,
  results: Array<bigResults[]>,
  options: Options,
  origin: [number, number] = [0, 0]
) {
  const { cellWidth, cellHeight, colorMap } = options;
  const radius = ((cellWidth - 1) / 2) | 0;

  drawGrid(ctx, { ...options, origin });

  for (let i = 0; i < results.length; i++) {
    const singleLine = results[i];

    for (let j = 0; j < singleLine.length; j++) {
      const { value, tie_count } = singleLine[j];
      console.log(value, "valuevaluevaluevaluedrawBigWay");
      const x = origin[0] + j * cellWidth + cellWidth / 2;
      const y = origin[1] + i * cellHeight + cellHeight / 2;

      if (value) {
        console.log(
          colorMap[identityDictionary[value]],
          "colorMap[identityDictionary[value]]"
        );
        drawHollowCircle(ctx, {
          x,
          y,
          radius,
          fillColor: "#fff",
          lineWidth: 1,
          color: colorMap[identityDictionary[value]],
        });
      }

      if (bankerPair.includes(value)) {
        const x_ = x - Math.cos(Math.PI / 4) * radius;
        const y_ = y - Math.cos(Math.PI / 4) * radius;
        drawHollowCircle(ctx, {
          x: x_,
          y: y_,
          radius: radius / 3,
          fillColor: colorMap.banker,
          lineWidth: 1,
          color: "#fff",
        });
      }

      if (playerPair.includes(value)) {
        const x_ = x + Math.cos(Math.PI / 4) * radius;
        const y_ = y + Math.cos(Math.PI / 4) * radius;
        drawHollowCircle(ctx, {
          x: x_,
          y: y_,
          radius: radius / 3,
          fillColor: colorMap.player,
          lineWidth: 1,
          color: "#fff",
        });
      }

      if (tie_count) {
        drawText(ctx, {
          x,
          y,
          text: String(tie_count),
          color: colorMap[identityDictionary[value]],
          fontSize: `${cellWidth / 2 + 1}px`,
        });
      }
    }
  }
}

// 大眼路
export function drawBigEyeWay(
  ctx: CanvasRenderingContext2D,
  results: Array<bigResults[]>,
  options: Options,
  origin: [number, number] = [0, 0]
) {
  const { cellWidth, cellHeight, colorMap } = options;
  const radius = ((cellWidth - 1) / 2) | 0;
  drawGrid(ctx, { ...options, origin });

  for (let i = 0; i < results.length; i++) {
    const singleLine = results[i];

    for (let j = 0; j < singleLine.length; j++) {
      const { value } = singleLine[j];

      const x = origin[0] + j * cellWidth + cellWidth / 2;
      const y = origin[1] + i * cellHeight + cellHeight / 2;

      if (value) {
        console.log(value, "valuevalue");
        drawHollowCircle(ctx, {
          x,
          y,
          radius,
          fillColor: "#fff",
          lineWidth: 1,
          color: value === "red" ? colorMap.banker : colorMap.player,
        });
      }
    }
  }
}

// 小路
export function drawSmallWay(
  ctx: CanvasRenderingContext2D,
  results: Array<bigResults[]>,
  options: Options,
  origin: [number, number] = [0, 0]
) {
  const { cellWidth, cellHeight, colorMap } = options;
  const radius = ((cellWidth - 1) / 2) | 0;
  drawGrid(ctx, { ...options, origin });

  for (let i = 0; i < results.length; i++) {
    const singleLine = results[i];

    for (let j = 0; j < singleLine.length; j++) {
      const { value } = singleLine[j];

      const x = origin[0] + j * cellWidth + cellWidth / 2;
      const y = origin[1] + i * cellHeight + cellHeight / 2;

      if (value) {
        console.log(value, "valuevalue");
        drawSolidCircle(ctx, {
          x,
          y,
          radius,
          color: value === "red" ? colorMap.banker : colorMap.player,
        });
      }
    }
  }
}

export function drawCockroachWay(
  ctx: CanvasRenderingContext2D,
  results: Array<bigResults[]>,
  options: Options,
  origin: [number, number] = [0, 0]
) {
  const { cellWidth, cellHeight, colorMap } = options;
  drawGrid(ctx, { ...options, origin });

  for (let i = 0; i < results.length; i++) {
    const singleLine = results[i];

    for (let j = 0; j < singleLine.length; j++) {
      const { value } = singleLine[j];

      if (value) {
        const bottomLeftX = origin[0] + j * cellWidth;
        const bottomLeftY = origin[1] + i * cellHeight + cellHeight;

        const topRightX = origin[0] + j * cellWidth + cellWidth;
        const topRightY = origin[1] + i * cellHeight;

        drawDiagonalLine(ctx, {
          bottomLeftX,
          bottomLeftY,
          topRightX,
          topRightY,
          color: value === "red" ? colorMap.banker : colorMap.player,
        });
      }
    }
  }
}

/**
 * 本周工作
 * 1. 电投web桌台选择好路推荐动画
 * 2. 电投web多台投注交互和逻辑完成
 * 3. 豪华投注快捷投注ui和弹窗
 * 4. 枪手端界面开始
 *
 * 下周计划
 * 1. 枪手端投注和桌台功能开发
 * 2. 电投web/h5接口和消息推送对接
 * 3. 电投web/h5页面交互持续跟进
 */
