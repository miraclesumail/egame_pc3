import {
  createSlice,
  createSelector,
  createAsyncThunk,
  AnyAction,
} from "@reduxjs/toolkit";
import { AUTH } from "../actionType";
import {
  LoginParams,
  reqLogin,
  reqVerificationCode,
  reqVisitLogin,
  VisitLoginParams,
  reqRefresh,
  reqLogout,
} from "@/api";
import { RootState } from "@/store";

function isRejectedAction(action: AnyAction) {
  return action.type.endsWith("rejected");
}

// 登录
export const login = createAsyncThunk(
  `${AUTH}/login`,
  (params: LoginParams) => {
    return reqLogin(params).then((res) => res.data);
  }
);

// 访客登录
export const visitorLogin = createAsyncThunk(
  `${AUTH}/visitor`,
  (params: VisitLoginParams) => {
    return reqVisitLogin(params).then((res) => res.data);
  }
);

// 发送验证码
export const verificationCode = createAsyncThunk(`${AUTH}/code`, () => {
  return reqVerificationCode().then((res) => res.data);
});

// token刷新-当用户一进来时刷新token
export const refreshToken = createAsyncThunk(
  `${AUTH}/refresh`,
  (arg, thunkAPI) => {
    const state = thunkAPI.getState()[AUTH];
    console.log(state);
    const params = {
      access_token: state.access_token,
      refresh_token: state.refresh_token,
    };
    return reqRefresh(params).then((res) => res.data);
  }
);

// logout
export const logout = createAsyncThunk(`${AUTH}/logout`, () => {
  return reqLogout().then((res) => res.data);
});

interface State {
  access_token?: string;
  refresh_token?: string;
}

const initialState: State = {
  access_token: "",
};
const slice = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    logout(state) {
      state.access_token = undefined;
      state.refresh_token = undefined;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        state.access_token = payload.data.access_token || "token";
        state.refresh_token = payload.data.refresh_token || "token";
      })
      .addCase(logout.fulfilled, (state, action) => {
        console.log("触发action退出");
        state.access_token = undefined;
        state.refresh_token = undefined;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        state.access_token = payload.data.access_token;
        state.refresh_token = payload.data.refresh_token;
      })
      .addCase(visitorLogin.fulfilled, () => {})
      .addCase(verificationCode.fulfilled, () => {})
      .addMatcher(isRejectedAction, (state, action) => {
        state.access_token = "token";
        state.refresh_token = "token";
        console.log(action);
        // throw action.error.message;
      });
  },
});
export const authSelector = createSelector(
  (rootState: RootState) => rootState[AUTH],
  (state) => state
);
// export const { loginOut, devLogin } = actions;
export default slice;
