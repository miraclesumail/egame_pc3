import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  fill: string;
  transform: string;
  path: string;
  x: number;
  y: number;
  text: number;
  fillText: string;
}

const AnimatedG = styled.g`
  animation: flash 1s 5 forwards;

  @keyframes flash {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const TableUnit: FC<Props> = ({ fill, transform, path, x, y, text, fillText }) => {
  return (
    <g fill="transparent" transform="translate(0, 208)">
      <path d="M1658.88 168.81V0H1916V195C1916 302.693 1828.68 390 1720.96 390H195.04C87.3242 390 0 302.693 0 195V0H258V168.81C258 250.65 334.11 317 428 317H1478.88C1572.77 317 1658.88 250.65 1658.88 168.81Z" />

      <AnimatedG>
        <path d={path} fill={fill} fill-opacity="0.3" transform={transform} />
        <text width="40" x={x} y={y} textAnchor="middle" fontSize="30px" fill={fillText}>
          {text}
        </text>
      </AnimatedG>
    </g>
  );
};

const TableBot = () => {
  return (
    <g fill="transparent" transform="translate(0, 208)">
      <path d="M1658.88 168.81V0H1916V195C1916 302.693 1828.68 390 1720.96 390H195.04C87.3242 390 0 302.693 0 195V0H258V168.81C258 250.65 334.11 317 428 317H1478.88C1572.77 317 1658.88 250.65 1658.88 168.81Z" />

      <path
        d="M468.584 95.6053L436.106 131.064C433.81 133.569 430.56 134.985 427.162 134.958L179 133C100.937 130.99 37.771 99.1407 5.01319 75.8228C-2.33697 70.5908 -0.331981 59.8 8.14629 56.7148L160.869 1.14081C165.962 -0.712743 171.666 1.07858 174.786 5.5115L179 11.5C220.6 64.3 294.667 76.1667 326.5 75.5H459.735C470.174 75.5 475.635 87.9074 468.584 95.6053Z"
        fill="yellowgreen"
        fill-opacity="0.2"
        transform="translate(110, 246)"
      />

      <path
        d="M0.5 12V46C0.5 52.6274 5.87259 58 12.5 58H355.797C366.148 58 371.643 45.7727 364.77 38.0324L334.581 4.03244C332.303 1.46768 329.037 0 325.607 0H12.5C5.87259 0 0.5 5.37258 0.5 12Z"
        fill="yellowgreen"
        fill-opacity="0.2"
        transform="translate(970, 323)"
      />
      <path
        d="M3.9158 95.6053L36.3944 131.064C38.6897 133.569 41.9398 134.985 45.338 134.958L293.5 133C371.563 130.99 434.729 99.1407 467.487 75.8228C474.837 70.5908 472.832 59.8 464.354 56.7148L311.631 1.14081C306.538 -0.712743 300.834 1.07858 297.714 5.5115L293.5 11.5C251.9 64.3 177.833 76.1667 146 75.5H12.7647C2.32565 75.5 -3.13522 87.9074 3.9158 95.6053Z"
        fill="yellowgreen"
        fill-opacity="0.2"
        transform="translate(1338, 245)"
      />
      <path
        d="M8 139.5C8.56236 172.117 4.29868 195.197 0.558136 208.809C-1.28535 215.518 2.10316 222.887 8.69684 225.108L183.154 283.863C187.099 285.191 191.478 284.399 194.573 281.616C237.374 243.122 246 195.596 246 172V12.5C246 5.87258 240.627 0.5 234 0.5H20C13.3726 0.5 8 5.87259 8 12.5V139.5Z"
        fill="yellowgreen"
        fill-opacity="0.2"
        transform="translate(1661, 8)"
      />
      <TableUnit
        path={
          "M367.5 12V46C367.5 52.6274 362.127 58 355.5 58H12.203C1.85185 58 -3.64296 45.7727 3.22982 38.0324L33.4195 4.03244C35.6968 1.46768 38.9627 0 42.3926 0H355.5C362.127 0 367.5 5.37258 367.5 12Z"
        }
        fillText="yellow"
        text={5}
        x={638}
        y={361}
        fill="yellowgreen"
        fill-opacity="0.2"
        transform="translate(580, 323)"
      />
    </g>
  );
};

export default TableUnit;
