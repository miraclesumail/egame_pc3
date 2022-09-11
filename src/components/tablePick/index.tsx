import { RootState } from "@/store";
import { setShowTablePick } from "@/store/slices/bet.slice";
import { useSetState } from "ahooks";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SlideModal from "../slideModal";
import TablePick from "./tablePick";

const Index = () => {
  const [{ showMask }, setState] = useSetState<any>({
    showMask: "",
  });

  const dispatch = useDispatch();
  const { showTablePick } = useSelector((state: RootState) => state.bet);

  return (
    <SlideModal
      visible={showTablePick}
      modalWidth={850}
      maskBackground={"rgba(255, 255, 255, 0)"}
      onClose={() => dispatch(setShowTablePick(false))}
    >
      <TablePick
        showSelectMask={(category: string) =>
          setState((state) => ({ ...state, showMask: category }))
        }
      />
    </SlideModal>
  );
};

export default Index;
