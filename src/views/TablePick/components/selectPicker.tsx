import { Column, Row } from "@/components/flex";
import React, { FC, forwardRef, ForwardRefExoticComponent, MutableRefObject, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";

const Wrap = styled(Column)`
  // position: absolute;
  // bottom: 0;
  // left: 0;
  // width: 522px;
  width: ${(props: any) => `${props.small ? "390px" : "522px"}`};
  height: ${(props: any) => `${props.small ? "130px" : "174px"}`};
  background: rgb(18, 19, 13);
  color: #fff;
  z-index: 500;
`;

const LineRow = styled(Row)`
  width: 100%;
  height: 43px;

  &.header {
    span {
      color: #d3af6e;
    }
  }

  span {
    flex: 1;
    text-align: center;
  }
`;

const SelectPicker: FC<any> = ({ options, current, onItemPick, small }) => (
  <Wrap small={small}>
    <LineRow className="header">
      <span>注区</span>
      <span>您的限红</span>
      <span>桌台限红</span>
      <span>可下注区间</span>
    </LineRow>
    {options.map((item, index) => (
      <LineRow
        key={item.area}
        onClick={() => {
          console.log("sss--00");
          onItemPick(index);
        }}
      >
        <span>{item.area}</span>
        <span>{item.limitRed}</span>
        <span>{item.tableRed}</span>
        <span>{item.interval}</span>
      </LineRow>
    ))}
  </Wrap>
);

export default SelectPicker;
