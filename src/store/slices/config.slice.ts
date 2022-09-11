import { RootState } from "@/store";
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

type Locale = "zh-CN" | "ko-KR" | "en-US";

interface State {
  music: boolean; // 背景音乐
  audio: boolean; // 音效
  locale: Locale; // 语言
  chipType: "K" | "W" | "0"; // 筹码类型,
  deskAmount: 9 | 12
}

const name = "config";

const locales: Locale[] = ["zh-CN", "ko-KR", "en-US"];

const locale: Locale =
  locales.find((item) => item.includes(navigator.language)) || "en-US";

const initialState: State = {
  music: true,
  audio: true,
  locale: "zh-CN",
  chipType: "W",
  deskAmount: 9
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setMusic(state, action: PayloadAction<State["music"]>) {
      state.music = action.payload;
    },
    setAudio(state, action: PayloadAction<State["audio"]>) {
      state.audio = action.payload;
    },
    setLocale(state, action: PayloadAction<Locale>) {
      state.locale = action.payload;
    },
    setChipType(state, action: PayloadAction<State["chipType"]>) {
      state.chipType = action.payload;
    },
    setDeskAmount(state, action: PayloadAction<State['deskAmount']>) {
      if (action.payload !== state.deskAmount) {
        state.deskAmount = action.payload
      }
    }
  },
});

const { setMusic, setAudio, setLocale, setChipType, setDeskAmount } = slice.actions;

// 选择器
const getMusicSelector = createSelector(
  (state: RootState) => state[name],
  (state: any) => state.music
);
const getAudioSelector = createSelector(
  (state: RootState) => state[name],
  (state: any) => state.audio
);
const getLocaleSelector = createSelector(
  (state: RootState) => {
    return state[name]
  },
  (state: any) => {
    return state.locale
  }
);
const getChipTypeSelector = createSelector(
  (state: RootState) => state[name],
  (state: any) => state.chipType
);

const getDeskAmountSelector = createSelector(
  (state: RootState) => state[name],
  (state) => state.deskAmount
)

export type { State, Locale };

export {
  setMusic,
  setAudio,
  setLocale,
  setChipType,
  setDeskAmount,

  getMusicSelector,
  getAudioSelector,
  getLocaleSelector,
  getChipTypeSelector,
  getDeskAmountSelector
};

export default slice;
