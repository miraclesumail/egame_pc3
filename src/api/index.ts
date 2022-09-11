import request from './http';
import store from "@/store";
const prefix = '/api'
const ver = '/v1'
export const testRequest = (params = {}) => {
  return request.get('/posts', params);
};

// 登录
export interface LoginParams {
  account: string,
  password: string
}
export const reqLogin = (params: LoginParams) => {
  const url = `${prefix}/auth/login`
  return request.post(url, params)
}

// refresh token
interface RefreshParams {
  access_token: string,
  refresh_token: string
}
export const reqRefresh = (params: RefreshParams) => {
  const url = `${prefix}/auth/refresh-token`
  return request.post(url, params, {
    headers: {
      lToken: undefined
    }
  })
}

// 验证码
export const reqVerificationCode = () => {
  const url = `${prefix}/auth/verification-code`
  return request.get(url)
}

// 访客登录
export interface VisitLoginParams {
  verification_code: string,
  visitor_id: string
}
export const reqVisitLogin = (params: VisitLoginParams) => {
  const url = `${prefix}/auth/visit/login`
  return request.post(url, params)
}

// logout
export const reqLogout = () => {
  const url = `${prefix}${ver}/player/logout`
  return request.post(url)
}





