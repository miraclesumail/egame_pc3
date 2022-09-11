/**
 * 多台选择界面
 */
import {FC} from "react";
import {Row} from "@/components/flex";
import {HeaderButton} from "@/components/Header/styledComponents";
import * as Modals from "./Modals"
import { useNavigate } from 'react-router-dom'

const HeaderRightGamingMultiple:FC = () => {
  const routerNav = useNavigate()

  return (
    <Row style={{paddingRight: '28px'}}>
      <HeaderButton style={{marginLeft: '80px'}} onClick={Modals.showChipChose}>筹码样式</HeaderButton>
      <HeaderButton style={{marginLeft: '25px'}} onClick={() => routerNav(-1)}>返回</HeaderButton>
    </Row>
  )
}

export default HeaderRightGamingMultiple
