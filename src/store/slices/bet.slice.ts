import { RootState } from "@/store";
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { list as tableList, RoadProps } from "./mock";

type DropDown = {
  area: string;
  limitRed: string;
  tableRed: string;
  interval: string;
};

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
interface State {
  dropList: DropDown[];
  queues: Array<{ current: number; category: string }>;
  current: number;
  showResult: DeskResult;
  /** 桌台状态 开放 倒计时 停止下注 */
  deskStatus: DeskStatus;
  askMode: string;
  chipsStack: any;
  /** 是否处于开奖 */
  isNowLottery: boolean;
  /** 选择投注类型 */
  showSelectBetting: boolean;
  /** 截止目前所有的开奖 */
  currentResult: string;
  tableList: any[];
  /** 好路推荐 */
  recommendRoad: RoadProps[];
  /** 桌台展示 */
  showTablePick: boolean;
  gridShow: number;

  onTableSelect: (data: any) => any | null
}

const name = "bet";

const initialState: State = {
  dropList: [
    {
      area: "庄",
      limitRed: "5K-1M",
      tableRed: "5K-1M",
      interval: "5K-1M",
    },
    {
      area: "和",
      limitRed: "50K-10M",
      tableRed: "5K-1M",
      interval: "5K-1M",
    },
    {
      area: "庄/闲",
      limitRed: "50K-1M",
      tableRed: "5K-10M",
      interval: "5K-12M",
    },
  ],
  tableList,
  current: 0,
  deskStatus: DeskStatus.OPEN,
  askMode: "",
  queues: [],
  chipsStack: {
    playerDouble: [],
    tie: [],
    bankerDouble: [],
    player: [],
    banker: [],
  },
  showTablePick: false,
  isNowLottery: false,
  currentResult: "tpbppbbtttwefijkbpbghijkbbpt",
  showResult: DeskResult.NONE,
  recommendRoad: [
    {
      deskNo: 'H001',
      type: '长闲1',
      countDown: 90,
      id: `${Date.now()}`,
    }
  ],
  showSelectBetting: false,
  gridShow: 0,
  onTableSelect: null
};

const betSlice = createSlice({
  name,
  initialState,
  reducers: {
    setDroplist(state, action: PayloadAction<DropDown[]>) {
      state.dropList = action.payload;
    },
    setQueues(
      state,
      action: PayloadAction<Array<{ current: number; category: string }>>
    ) {
      state.queues = action.payload;
    },
    setAskmode(state, action: PayloadAction<string>) {
      state.askMode = action.payload;
    },
    setShowResult(state, action: PayloadAction<DeskResult>) {
      state.showResult = action.payload;
    },
    setDeskStatus(state, action: PayloadAction<DeskStatus>) {
      state.deskStatus = action.payload;
    },
    setTableList(state, action: PayloadAction<any[]>) {
      state.tableList = action.payload;
    },
    setGridShow(state, action: PayloadAction<number>) {
      state.gridShow = action.payload;
    },
    setChipsStack(
      state,
      action: PayloadAction<typeof initialState.chipsStack>
    ) {
      state.chipsStack = action.payload;
    },
    resetChipsStack(state) {
      state.chipsStack = {
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
    setIsLottery(state, action: PayloadAction<boolean>) {
      state.isNowLottery = action.payload;
    },
    setOnTableSelect(state, action: PayloadAction<any>) {
      state.onTableSelect = action.payload;
    },
    setShowTablePick(state, action: PayloadAction<boolean>) {
      state.showTablePick = action.payload;
    },
    setShowSelectBetting(state, action: PayloadAction<boolean>) {
      state.showSelectBetting = action.payload;
    },
    setCurrentResult(state, action: PayloadAction<string>) {
      state.currentResult = action.payload;
    },
    addToRecommendRoad(state, action: PayloadAction<RoadProps>) {
      state.recommendRoad = [...state.recommendRoad, action.payload];
    },
    removeRecommendRoad(state, action: PayloadAction<string>) {
      console.log(action.payload, "action.payloadaction.payload");
      state.recommendRoad = state.recommendRoad.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const selectQueues = (state: { [x: string]: any }) => state.bet.queues;
export const selectChipsStack = (state: { [x: string]: any }) =>
  state.bet.chipsStack;
export const selectIsLottery = (state: { [x: string]: any }) =>
  state.bet.isNowLottery;
export const selectCurrentResult = (state: { [x: string]: any }) =>
  state.bet.currentResult;

export const {
  setDroplist,
  setCurrent,
  setAskmode,
  setQueues,
  setChipsStack,
  resetChipsStack,
  setIsLottery,
  setGridShow,
  setDeskStatus,
  setShowResult,
  setCurrentResult,
  setTableList,
  setOnTableSelect,
  setShowSelectBetting,
  setShowTablePick,
  addToRecommendRoad,
  removeRecommendRoad,
} = betSlice.actions;

export default betSlice;
