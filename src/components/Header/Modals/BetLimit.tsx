import {FC} from "react";
import {useDlgHooks} from "@/components/Header/Modals/hooks";
import Dialog from "@/components/Dialog";
import CommonPick from "@/components/common/commonPick";

const betTypes = [
  { label: "所有服务", value: 0 },
  { label: "专属服务", value: 1 },
  { label: "快速电投", value: 2 },
];

const sort = [
  { label: "不排序", value: 0 },
  { label: "高至低", value: 1 },
  { label: "高至低", value: 2 },
];

interface Props {
  visible?: boolean,
  onClose?: () => void
}
const BetLimit:FC<Props> = ({visible, onClose}) => {
  const { isShow, setIsShow, close } = useDlgHooks({visible, onClose})

  return (
    <Dialog title='限红排序' visible={isShow} zIndex={8000} onClose={() => setIsShow(false)} onAnimationend={close}>
      <CommonPick list={sort} onChoose={(res) => setIsShow(false)}/>
    </Dialog>
  )
}

export default BetLimit
