export const a = 5;

interface DrawGridOptions {
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
  origin: [number, number];
  skipOddLine?: true;
}

interface DrawTextOptions {
  x: number;
  y: number;
  text: string;
  color: string;
  fontSize: string;
  fontWeight?: number;
  fontFamily?: string;
}

interface DrawSolidCircleOptions {
  x: number;
  y: number;
  color: string; // 圆圈颜色
  radius: number; // 半径
}

interface DrawHollowCircleOptions {
  x: number;
  y: number;
  color: string; // 圆圈颜色
  radius: number; // 半径
  fillColor: string; // 圆圈中心填充颜色
  lineWidth?: number;
}

interface DrawDiagonalLineOptions {
  color: string;
  offset?: number; // 对角线距离对角点的距离
  lineCap?: "butt" | "round" | "square";
  lineWidth?: number;
  topRightX: number;
  topRightY: number;
  bottomLeftX: number;
  bottomLeftY: number;
}

/**
 * 划网格
 * @param ctx canvas context
 * @param options 参数
 */
export function drawGrid(
  ctx: CanvasRenderingContext2D,
  options: Partial<DrawGridOptions>
) {
  const { rows, columns, lineColor, origin, lineWidth, cellWidth, cellHeight } =
    options;

  // 竖直方向高度
  const verticalHeight = rows * cellHeight + lineWidth;
  // 水平方向宽度
  const horizonWidth = columns * cellWidth + lineWidth;

  // 画竖线
  for (let f = 0; f <= columns; f++) {
    const w = f * cellWidth + origin[0];
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(w, Math.floor(origin[1]));
    ctx.lineTo(w, Math.floor(verticalHeight + origin[1]));
    ctx.stroke();
  }

  // 画横线
  for (let f = 0; f <= rows; f++) {
    const h = f * cellHeight + origin[1];
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(origin[0], h);
    ctx.lineTo(origin[0] + horizonWidth, h);
    ctx.stroke();
  }
}

/**
 * 绘制文字 默认400 微软雅黑
 * @param ctx
 * @param options
 */
export function drawText(
  ctx: CanvasRenderingContext2D,
  options: DrawTextOptions
) {
  const {
    x,
    y,
    text,
    color,
    fontSize,
    fontFamily = "Microsoft YaHei",
    fontWeight = 400,
  } = options;

  ctx.beginPath();
  ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y);
  ctx.stroke();
}

/**
 * 画实心
 * @param ctx
 * @param options
 */
export function drawSolidCircle(
  ctx: CanvasRenderingContext2D,
  options: DrawSolidCircleOptions
) {
  const { x, y, color, radius } = options;

  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, radius, 0, 360, false);
  ctx.fill();
}

/**
 * 画空心
 * @param ctx
 * @param options
 */
export function drawHollowCircle(
  ctx: CanvasRenderingContext2D,
  options: DrawHollowCircleOptions
) {
  const { x, y, color, radius, fillColor, lineWidth } = options;

  ctx.beginPath();
  ctx.lineWidth = lineWidth;
  ctx.fillStyle = fillColor;
  ctx.strokeStyle = color;
  ctx.arc(x, y, radius, 0, 360, false);
  ctx.fill();
  ctx.stroke();
}

/**
 * 话对角线
 * @param ctx
 * @param options
 */
export function drawDiagonalLine(
  ctx: CanvasRenderingContext2D,
  options: DrawDiagonalLineOptions
) {
  const {
    color,
    offset = 1,
    lineCap = "butt",
    lineWidth = 1,
    bottomLeftX,
    bottomLeftY,
    topRightX,
    topRightY,
  } = options;

  ctx.beginPath();
  ctx.lineCap = lineCap;
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;
  ctx.moveTo(bottomLeftX + offset, bottomLeftY - offset);
  ctx.lineTo(topRightX - offset, topRightY + offset);
  ctx.stroke();
}
