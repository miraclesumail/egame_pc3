/**
 * 多台选择界面
 */
import {FC} from "react";
import {Row} from "@/components/flex";
import {HeaderButton} from "@/components/Header/styledComponents";
import * as Modals from "./Modals"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setShowTablePick } from '@/store/slices/bet.slice'
import { IStorage } from "@/utils";

const HeaderRightGamingSingle:FC = () => {
  const dispatch = useDispatch();

  const routerNav = useNavigate()

  return (
    <Row style={{paddingRight: '28px'}}>
      <HeaderButton style={{marginLeft: '0'}} onClick={() => Modals.showSelectBetting({confirm: data => IStorage.setItem('betPreference',data)})}>桌台样式</HeaderButton>
      <HeaderButton style={{marginLeft: '25px'}} onClick={Modals.showTips}>小费</HeaderButton>
      <HeaderButton style={{marginLeft: '25px'}} onClick={Modals.showChipChose}>筹码样式</HeaderButton>
      <HeaderButton style={{marginLeft: '25px'}} onClick={() => dispatch(setShowTablePick(true))}>换桌台</HeaderButton>
      <HeaderButton style={{marginLeft: '25px'}} onClick={() => routerNav(-1)}>返回</HeaderButton>
    </Row>
  )
}

export default HeaderRightGamingSingle
