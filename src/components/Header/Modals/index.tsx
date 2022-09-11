import MenuDlg, {MenuDataItem} from "./Menu";
import React, {createRoot} from "react-dom/client";
import type {Root} from "react-dom/client"
import {ReactElement} from "react";
import RecordDlg from "@/components/Header/Modals/Record";
import QuitDlg from "@/components/Header/Modals/Quit";
import ChipChose from "@/components/Header/Modals/ChipChose";
import SetVoice from "@/components/Header/Modals/SetVoice";
import Locales from "@/components/Header/Modals/Locales";
import ModifyPassword from "@/components/Header/Modals/ModifyPassword";
import ModifyNick from "@/components/Header/Modals/ModifyNick";
import Support from "@/components/Header/Modals/Support";
import RoadTips from "@/components/Header/Modals/RoadTips";
import Confirm from "@/components/Header/Modals/Confirm";
import ExcusiveService from "@/components/Header/Modals/ExcusiveService";
import BaotaiPassword from "@/components/Header/Modals/BaotaiPassword";
import SelectBetting from "@/components/Header/Modals/SelectBetting";
import Tips from "@/components/Header/Modals/Tips";
import CasinoPick from "@/components/Header/Modals/CasinoPick";
import BetLimit from "@/components/Header/Modals/BetLimit";
import BetType from "@/components/Header/Modals/BetType";
import {Provider} from "react-redux";
import store from "@/store";
import {IRouter} from "@/routers";

// 管理弹窗
interface ModalInstance {
  root: Root,
  container: HTMLDivElement
}

// 弹窗管理类
const modalMap = new Map<Symbol | number | string, ModalInstance>()

const destroyModal = (mark: Symbol) => {
  if (modalMap.has(mark)) {
    let {root, container} = modalMap.get(mark)
    console.log('摧毁弹窗~！')
    root.unmount()
    document.body.removeChild(container)
    root = undefined
    modalMap.delete(mark)
    console.log(modalMap)
  }
}
// 渲染弹窗
const renderBody = (mark: Symbol, node: ReactElement) => {
  const container = document.createElement('div');// 不能渲染
  const root = createRoot(container)
  root.render(
    <Provider store={store}>
      <IRouter>
        {node}
      </IRouter>
    </Provider>
  )
  document.body.appendChild(container)
  modalMap.set(mark, {root, container})
  return mark
}

const showMenu = (menuData?: MenuDataItem[]) => {
  const mark = Symbol('Menu') // 产生一个唯一识别弹窗标记
  const element = <MenuDlg menuData={menuData} onClose={() => destroyModal(mark)}/>
  renderBody(mark, element)
}

const showRecord = () => {
  const mark = Symbol('Menu')
  const element = <RecordDlg onClose={() => destroyModal(mark)}/>
  renderBody(mark, element)
}
interface QuitOptions {
  onConfirm?: () => void
}
const showQuit = (options?: QuitOptions) => {
  const mark = Symbol('Menu')
  const element = <QuitDlg onConfirm={options?.onConfirm} onClose={() => destroyModal(mark)}/>
  renderBody(mark, element)
}

const showChipChose = () => {
  const mark = Symbol('Menu')
  const element = <ChipChose onClose={() => destroyModal(mark)}/>
  renderBody(mark, element)
}

const showVoice = () => {
  const mark = Symbol('Menu')
  const element = <SetVoice onClose={() => destroyModal(mark)}/>
  renderBody(mark, element)
}

const showLocales = () => {
  const mark = Symbol('Menu')
  const element = <Locales onClose={() => destroyModal(mark)}/>
  renderBody(mark, element)
}

const showModifyPassword = () => {
  const mark = Symbol('Menu')
  const element = <ModifyPassword onClose={() => destroyModal(mark)}/>
  renderBody(mark, element)
}

const showModifyNick = () => {
  const mark = Symbol('Menu')
  const element = <ModifyNick onClose={() => destroyModal(mark)}/>
  renderBody(mark, element)
}

const showSupport = () => {
  const mark = Symbol('Menu')
  const element = <Support onClose={() => destroyModal(mark)}/>
  renderBody(mark, element)
}

const showGoodRoad = () => {
  const mark = Symbol('Menu')
  const element = <RoadTips onClose={() => destroyModal(mark)}/>
  renderBody(mark, element)
}

interface ConfirmOptions {
  title?: string,
  content?: string,
  cancel?: boolean,
  onCancel?: () => void,
  onConfirm?: () => void,
}
const showConfirm = (options?: ConfirmOptions) => {
  const mark = Symbol('Menu')
  const element = (
    <Confirm
      title={options?.title}
      content={options?.content}
      cancel={options?.cancel}
      onCancel={options?.onCancel}
      onConfirm={options?.onConfirm}
      onClose={() => destroyModal(mark)}
    />)
  renderBody(mark, element)
}

// 专属服务弹窗
const showExService = () => {
  const mark = Symbol('Menu')
  const element = <ExcusiveService onClose={() => destroyModal(mark)}/>
  renderBody(mark, element)
}

// 保胎密码弹窗
const showBaotai = () => {
  const mark = Symbol('Menu')
  const element = <BaotaiPassword onClose={() => destroyModal(mark)}/>
  renderBody(mark, element)
}

// 选择投注界面
const showSelectBetting = ({confirm}) => {
  const mark = Symbol('Menu')
  const element = <SelectBetting onClose={() => destroyModal(mark)} confirm={confirm}/>
  renderBody(mark, element)
}

// 小费弹窗
const showTips = () => {
  const mark = Symbol('Menu')
  const element = <Tips onClose={() => destroyModal(mark)}/>
  renderBody(mark, element)
}

// 选择赌场
const showCasino = () => {
  const mark = Symbol('Menu')
  const element = <CasinoPick onClose={() => destroyModal(mark)}/>
  renderBody(mark, element)
}

// 限红弹窗
const showBetLimit = () => {
  const mark = Symbol('Menu')
  const element = <BetLimit onClose={() => destroyModal(mark)}/>
  renderBody(mark, element)
}

// 投注类型
const showBetType = () => {
  const mark = Symbol('Menu')
  const element = <BetType onClose={() => destroyModal(mark)}/>
  renderBody(mark, element)
}

// 关闭所有弹窗
const closeModals = (mark) => {

}

// 关闭所有弹窗
const closeAll = () => {
  modalMap.forEach((value, key) => {
    destroyModal(key as Symbol)
  })
}

export {
  showMenu,
  showRecord,
  showQuit,
  showChipChose,
  showVoice,
  showLocales,
  showModifyPassword,
  showModifyNick,
  showSupport,
  showGoodRoad,
  showConfirm,
  showExService,
  showBaotai,
  showSelectBetting,
  showTips,
  showCasino,
  showBetLimit,
  showBetType,
  closeModals,
  closeAll
}
