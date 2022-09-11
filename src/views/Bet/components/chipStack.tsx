import React, { FC } from "react";
import styled from "styled-components";
import { BetType } from "@/store/slices/bet.slice";
import { formatAmount, sumNumberPart } from "@/utils/tool";
import { smallChips, keyframes } from "../data";
import useQueryDesk from "@/utils/hooks/useQueryDesk";

interface Props {
  category: BetType;
  x: number;
  y: number;
}

interface Place {
  left: number;
  top: number;
  src: string;
}

// const Image = styled.image`
// x
// `

const Chip = styled.div`
  position: absolute;
  width: 40px;
  height: 32px;
  background: ${(props: Place) => `url(${props.src}) no-repeat center`};
  background-size: 100%;
  left: ${(props: Place) => `${props.left}px`};
  top: ${(props: Place) => `${props.top}px`};
  z-index: 1000;
`;

const ChipStack: FC<Props> = ({ category, x, y }) => {
  const { sumMap, chipsMap } = useQueryDesk();
  const resultArr = sumNumberPart(chipsMap[category]);
  console.log(resultArr, category, chipsMap, 'resultArrresultArrresultArr')
  return (
    <>
      {resultArr.slice(0, 5).map((item, index) => (
        <image
          key={index}
          data-v-c443f642=""
          x={x}
          y={y - index * 4}
          width="40"
          height="32"
          xlinkHref={smallChips[item]}
        ></image>
      ))}

      {sumMap[category] && (
        <text
          data-v-c443f642=""
          width="40"
          x={x + 20}
          y={y - resultArr.slice(0, 5).length * 4 -3}
          textAnchor="middle"
          fontSize="10px"
          stroke="#f5d300"
          fill="transparent"
        >
          {formatAmount(sumMap[category])}
        </text>
      )}
    </>
  );
};

export default ChipStack;
