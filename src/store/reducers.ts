import { combineReducers } from "@reduxjs/toolkit";
// const modulesFiles = require.context('./slices', true, /\.ts$/)
// console.log('files:', modulesFiles.keys())
import auth from "./slices/auth.slice";
import bet from "./slices/bet.slice";
import luxury from "./slices/luxury.slice";
import config from "./slices/config.slice";
import multi from "./slices/multi.slice";
/* const modules = modulesFiles.keys().reduce((modules: { [x: string]: any; }, modulePath: string) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.ts$/, '$1')
  const value = modulesFiles(modulePath)
  const key = moduleName.replace(/\.slice$/, '')
  modules[key] = value.default
  return modules
}, {}) */
// console.log(modules)
const modules = {
  [auth.name]: auth.reducer,
  [bet.name]: bet.reducer,
  [config.name]: config.reducer,
  [luxury.name]: luxury.reducer,
  [multi.name]: multi.reducer,
};
const reducer = combineReducers(modules);
export default reducer;
