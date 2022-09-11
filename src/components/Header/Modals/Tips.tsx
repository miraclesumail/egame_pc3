import {FC, useState} from "react";
import Dialog from "@/components/Dialog";
import styled from "styled-components";
import {useDlgHooks} from "@/components/Header/Modals/hooks";
import {Row} from "@/components/flex";
import OInput from "@/components/OInput";
import MyButton from "@/components/MyButton";

const SelectTips = styled(Row)`
  width: 359px;
`
interface TipsStyledProps {
  icon: string
}
const Tip = styled.button<TipsStyledProps>`
  width: 65px;
  height: 53px;
  margin: 10px;
  background: url(${props => props.icon}) no-repeat;
  background-size: contain;
  border: 0 none;
  cursor: pointer;
`

interface TipsItem {
  value: string | number,
  icon: string
}
const tips:TipsItem[] = [
  {
    value: 25,
    icon: require('@/assets/images/tips/tips_25.png'),
  },
  {
    value: 50,
    icon: require('@/assets/images/tips/tips_50.png'),
  },
  {
    value: 100,
    icon: require('@/assets/images/tips/tips_100.png'),
  },
  {
    value: 500,
    icon: require('@/assets/images/tips/tips_500.png'),
  },
  {
    value: 1000,
    icon: require('@/assets/images/tips/tips_1000.png'),
  },
  {
    value: 5000,
    icon: require('@/assets/images/tips/tips_5000.png'),
  },
  {
    value: 10000,
    icon: require('@/assets/images/tips/tips_10000.png'),
  },
  {
    value: 50000,
    icon: require('@/assets/images/tips/tips_50000.png'),
  },
  {
    value: 100000,
    icon: require('@/assets/images/tips/tips_100000.png'),
  },
  {
    value: 500000,
    icon: require('@/assets/images/tips/tips_500000.png'),
  }
]

interface Props {
  visible?: boolean,
  onClose?: () => void
}
const Tips:FC<Props> = (props) => {
  const {isShow, setIsShow, close} = useDlgHooks({visible: props.visible, onClose: props.onClose})
  const [tipAmount, setTipAmount] = useState('')
  const choseTip = (amount: string | number) => {
    const _tipAmount = tipAmount ? parseInt(tipAmount) : 0
    const _amount = parseInt(`${amount}`)
    setTipAmount(`${_tipAmount + _amount}`)
  }

  return (
    <Dialog title='小费' visible={isShow} onClose={() => setIsShow(false)} onAnimationend={close}>
      <SelectTips justify="center" wrap="wrap" >
        {
          tips.map((item, index) => {
            return (
              <Tip icon={item.icon} key={index} onClick={() => choseTip(item.value)}></Tip>
            )
          })
        }
      </SelectTips>
      <Row style={{padding: '20px 20px 0'}}>
        <OInput label="输入金额" reset value={tipAmount} onChange={(value) => setTipAmount(value)}></OInput>
      </Row>
      <Row style={{width: '325px', margin: '10px auto 18px', padding: '15px 10px'}} justify="center" ailgn="center">
        <MyButton cancel name="取消" width={140} onClick={() => setIsShow(false)}/>
        <MyButton styles={{marginLeft: '25px'}} width={140} name="确认" onClick={confirm}/>
      </Row>
    </Dialog>
    )
}

export default Tips
