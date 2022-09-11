import {Provider, useSelector} from "react-redux";
import "@/i18n";
import {IntlProvider} from "react-intl";
import {PersistGate} from "redux-persist/integration/react";
// import neffos from "neffos.js";
import locales from "@/locales";
import {Locale} from "@/store/slices/config.slice";
import GlobalView from "./components/GlobalkStyle";
import Router from "./routers";
import {getLocaleSelector} from "./store/slices/config.slice";
import {MyWS} from "@/utils/websocket";
import {useEffect} from "react";
import {useAppDispatch} from "@/store";
import {refreshToken} from "@/store/slices/auth.slice";

// import reportWebVitals from './reportWebVitals';

export const ws = new MyWS({servers: "ws://localhost:9222"});

// 引入styled
function App() {
  // 获取多语言
  const locale: Locale = useSelector(getLocaleSelector);
  const dispatch = useAppDispatch()
  // console.log(locale, "localelocalelocalelocale");
  // 初始化
  useEffect(() => {
    dispatch(refreshToken())
      .then(res => {

      })
      .catch(err => {
        console.log('err', err)
      })
  }, [])

  function onError(e: any) {
    console.log(e);
  }

  return (
    <>
      <GlobalView/>
      <Router/>
    </>
  );
}

export default App;
