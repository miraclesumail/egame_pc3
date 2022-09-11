import { RootState } from "@/store";
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

export enum DeskStatus {
  OPEN = "OPEN",
  COUNT = "COUNT",
  DISABLE = "DISABLE",
}

export enum BetType {
  BANKER = "banker",
  PLAYER = "player",
  TIE = "tie",
  PDOUBLE = "playerDouble",
  BDOUBLE = "bankerDouble",
}

export enum DeskResult {
  BANKER = "BANKER",
  PLAYER = "PLAYER",
  TIE = "TIE",
  NONE = "",
}

interface Result {
  banker: string[];
  player: string[];
  bankerTotal: number;
  playerTotal: number;
  result: "banker" | "player" | "tie";
}
interface State {
  seatNo: string;
  queues: Array<{ current: number; category: string }>;
  current: number;
  /** 是否显示快捷投注 */
  showQuickBet: boolean;
  showResult: DeskResult;
  /** 桌台状态 开放 倒计时 停止下注 */
  deskStatus: DeskStatus;
  askMode: string;
  chipsStack: any;
  /** 是否处于开奖 */
  isNowLottery: number[];
  lotteryResults: Partial<Result>[];
  /** 截止目前所有的开奖 */
  currentResult: string;
  quickBet: {
    deskNo: string;
    type: string;
    countDown: number;
    id: string;
    chipsStack: any;
  };
}

const name = "luxury";

const initialState: State = {
  seatNo: '1',
  current: 0,
  deskStatus: DeskStatus.OPEN,
  askMode: "",
  queues: [],
  showQuickBet: false,
  chipsStack: [
    {
      playerDouble: [],
      tie: [],
      bankerDouble: [],
      player: [],
      banker: [],
    },
    {
      playerDouble: [],
      tie: [],
      bankerDouble: [],
      player: [],
      banker: [],
    },
    {
      playerDouble: [],
      tie: [],
      bankerDouble: [],
      player: [],
      banker: [],
    },
    {
      playerDouble: [],
      tie: [],
      bankerDouble: [],
      player: [],
      banker: [],
    },
    {
      playerDouble: [],
      tie: [],
      bankerDouble: [],
      player: [],
      banker: [],
    },
  ],
  isNowLottery: [0, 0, 0, 0],
  lotteryResults: [{}, {}, {}, {}],
  currentResult: "tpbppbbtttwefijkbpbghijkbbpt",
  showResult: DeskResult.NONE,
  quickBet: {
    chipsStack: {
      playerDouble: [],
      tie: [],
      bankerDouble: [],
      player: [],
      banker: [],
    },
  } as any,
  //   deskNo: "H009",
  //   type: "长闲",
  //   countDown: 30,
  //   id: getUuid(),
};

const betSlice = createSlice({
  name,
  initialState,
  reducers: {
    setQueues(
      state,
      action: PayloadAction<Array<{ current: number; category: string }>>
    ) {
      state.queues = action.payload;
    },
    // showQuickBet
    setshowQuickBet(state, action: PayloadAction<boolean>) {
      state.showQuickBet = action.payload;
    },
    setShowResult(state, action: PayloadAction<DeskResult>) {
      state.showResult = action.payload;
    },
    setDeskStatus(state, action: PayloadAction<DeskStatus>) {
      state.deskStatus = action.payload;
    },
    setQuickBet(state, action: PayloadAction<any>) {
      state.quickBet = action.payload;
    },
    addNewDesk(state) {
      state.chipsStack = [
        ...state.chipsStack,
        {
          playerDouble: [],
          tie: [],
          bankerDouble: [],
          player: [],
          banker: [],
        },
      ];
    },
    setChipsStack(state, action: PayloadAction<any>) {
      console.log("PayloadActionPayloadAction", action.payload);
      const { desk, chipStack } = action.payload;
      state.chipsStack[desk] = chipStack;
    },
    resetChipsStack(state, action: PayloadAction<number>) {
      state.chipsStack[action.payload] = {
        playerDouble: [],
        tie: [],

        bankerDouble: [],
        player: [],
        banker: [],
      };
    },
    setCurrent(state, action: PayloadAction<number>) {
      console.log(action, "actionactionaction");
      state.current = action.payload;
    },
    setIsLottery(
      state,
      action: PayloadAction<{ deskNo: number; isLottery: number }>
    ) {
      const { deskNo, isLottery } = action.payload;
      state.isNowLottery[deskNo] = isLottery;
    },
    setLotteryResults(
      state,
      action: PayloadAction<{ deskNo: number; result: Result }>
    ) {
      const { deskNo, result } = action.payload;
      state.lotteryResults[deskNo] = result;
    },
    setCurrentResult(state, action: PayloadAction<string>) {
      state.currentResult = action.payload;
    },
  },
});

export const selectIsNowLottery = (state: { [x: string]: any }) =>
  state.multi.isNowLottery;

export const selectLotteryResults = (state: { [x: string]: any }) =>
  state.multi.lotteryResults;

export const {
  setCurrent,
  setQueues,
  setChipsStack,
  resetChipsStack,
  setIsLottery,
  setLotteryResults,
  setDeskStatus,
  setShowResult,
  setCurrentResult,
  setshowQuickBet,
  setQuickBet,
} = betSlice.actions;

export default betSlice;
