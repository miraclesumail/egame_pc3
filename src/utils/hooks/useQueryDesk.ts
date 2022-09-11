import React, { CSSProperties, FC, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNumberPart } from "@/utils/tool";
import store from '@/store'

const chipsUnit = [25, 50, 100, 500, 1000, 5000, 10000, 50000, 100000, 500000];

function getChipsStack(deskNo?: number) {
  return (state: any) => {
    if (typeof(deskNo) === 'number') {
      const multiChipsStack = state.multi.chipsStack;

      return (
        multiChipsStack[deskNo] || {
          playerDouble: [],
          tie: [],
          bankerDouble: [],
          player: [],
          banker: [],
        }
      );
    } else {
      console.log(state.bet.chipsStack, '----', store.getState().bet.chipsStack)
      return state.bet.chipsStack;
    }
  };
}

const useQuery = (deskNo?: number) => {
  const chipsStack = useSelector(getChipsStack(deskNo));
  // console.log(chipsStack, 'chipsStackchipsStackchipsStack')
  const sumMap = useMemo(() => {
    const sumMap: Record<string, number> = {};

    for (const [key, value] of Object.entries(chipsStack)) {
      sumMap[key] = (value as number[]).reduce(
        (prev: number, next: number) => prev + chipsUnit[next],
        0
      );
    }

    return sumMap;
  }, [chipsStack]);

  const chipsMap = useMemo(() => {
    const chipsMap: Record<string, number[]> = {};
    for (const [key, value] of Object.entries(sumMap)) {
      chipsMap[key] = getNumberPart(value, chipsUnit);
    }

    return chipsMap;
  }, [sumMap]);

  return {
    sumMap,
    chipsMap,
  };
};

export default useQuery;
