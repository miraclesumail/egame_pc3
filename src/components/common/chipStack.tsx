import React from "react";
import styled from "styled-components";
import { Row } from "../flex";
import useQuery from "@/utils/hooks/useQuery";
import { smallChips } from "@/views/Bet/data";
import { formatAmount, sumNumberPart } from "@/utils/tool";

const Wrap = styled(Row)`
  width: 100% !important;
  height: 30px !important;
  background: transparent !important;
  overflow: hidden;

  span {
    color: #fff;
    margin-right: 5px;
  }

  div {
    position: relative;
    width: 20px;
    align-self: center !important;
    img {
      position: absolute;
      left: 0;
    }
  }
`;

const ChipStack = ({ en, chipWidth }) => {
  const { sumMap, chipsMap } = useQuery();
  const resultArr = sumNumberPart(chipsMap[en]);

  return (
    <Wrap justify="center" ailgn="flex-end">
      <span>{sumMap[en] ? formatAmount(sumMap[en]) : null}</span>
      <div>
        {resultArr.slice(0, 5).map((item, index) => (
          <img
            key={index}
            src={smallChips[item]}
            width={chipWidth || 20}
            style={{ transform: `translateY(-${index * 4}px)` }}
          />
        ))}
      </div>
    </Wrap>
  );
};

export default ChipStack;
