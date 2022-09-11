/**
 * 多台选择界面
 */
import {FC} from "react";
import {Row} from "@/components/flex";
import {HeaderButton} from "@/components/Header/styledComponents";
import Icon from "@/components/Icon";
import styled from "styled-components";
import * as Modals from "./Modals"
import {useAppDispatch, useAppSelector} from "@/store";
import {getDeskAmountSelector, setDeskAmount} from "@/store/slices/config.slice";

const TableIcon = styled(Icon)`
  color: #FFD78E;
`
interface SelectedTableStyledProps {
  num?: number,
  isSelected?: Boolean
}
const SelectedTableButton = styled(Icon)<SelectedTableStyledProps>`
  font-size: 33px;
  color: ${props => props.isSelected ? '#FFD78E' : '#494949'};
  cursor: pointer;

  &.active {
    color: #FFD78E;
  }

  /* &:hover {
    color: #FFD78E;
  } */
`

const HeaderRightMultipleTable:FC = () => {
  const deskAmount = useAppSelector(getDeskAmountSelector)
  const dispatch = useAppDispatch()

  const selectTable = (amount: 9 | 12) => {
    dispatch(setDeskAmount(amount))
  }

  return (
    <Row style={{paddingRight: '28px'}}>
      <TableIcon type="icon-a-desktop-num" />
      <span style={{fontSize: '15px', color: '#fff', marginLeft: '13px'}}>总台数：</span>
      <span style={{fontSize: '18px', fontWeight: '700', color: '#fff', marginLeft: '10px'}}>8</span>
      <div onClick={() => selectTable(9)}>
        <SelectedTableButton
          isSelected={deskAmount === 9}
          style={{marginLeft: '40px'}}
          type="icon-table-9"
          />
      </div>
      <div onClick={() => selectTable(12)}>
        <SelectedTableButton
          isSelected={deskAmount === 12}
          style={{marginLeft: '14px'}}
          type="icon-table-12"
          />
      </div>

      <HeaderButton style={{marginLeft: '80px'}} onClick={Modals.showCasino}>所有赌场</HeaderButton>
      <HeaderButton style={{marginLeft: '25px'}} onClick={Modals.showBetType}>所有类型</HeaderButton>
      <HeaderButton style={{marginLeft: '25px'}} onClick={Modals.showBetLimit}>不排序</HeaderButton>
    </Row>
  )
}

export default HeaderRightMultipleTable
