import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Row, Column } from "@/components/flex";
import RoadRecommend from "@/components/common/roadRecommend";
import { ws } from "@/App";
import { addToRecommendRoad } from "@/store/slices/bet.slice";
import { getUuid } from "@/utils/tool";

const ListContainer = styled(Column)`
  width: 288px;
  height: 300px;
  border-left: 1px solid #f0f0f0;
  background: #faf8f4;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`;

const TableList = () => {
  const recommendRoad = useSelector((state: any) => state.bet.recommendRoad);
  const dispatch = useDispatch();

  useEffect(() => {
    ws.createEventListener("chat", (result) => {
      dispatch(addToRecommendRoad(result.m));
    });

    return () => ws.removeEventListener("chat");
  }, []);

  return (
    <ListContainer>
      {recommendRoad.map((item) => (
        <RoadRecommend {...item} key={item.id} />
      ))}
    </ListContainer>
  );
};

export default TableList;
