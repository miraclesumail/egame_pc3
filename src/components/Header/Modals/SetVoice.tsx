/**
 * @description
 * 设置声音
 */
import { FC } from "react";
import { Row } from "@/components/flex";
import MyButton from "@/components/MyButton";
import Dialog from "@/components/Dialog";
import { useDlgHooks } from "@/components/Header/Modals/hooks";
import Icon from "@/components/Icon";
import OSwitch from "@/components/OSwitch";
import store from "@/store";
import styled from "styled-components";
import { useSetState } from "ahooks";
import { setAudio, setMusic } from "@/store/slices/config.slice";
import { useAppDispatch, useAppSelector } from "@/store";

interface Props {
  visible?: boolean;
  onClose?: () => void;
}

const Label = styled.label`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  line-height: 24px;
`;

const SetVoice: FC<Props> = ({ visible, onClose }) => {
  // const { audio, music } = useAppSelector((state) => state.config)
  const [{ music, audio }, setState] = useSetState<any>({
    audio: store.getState().config.audio,
    music: store.getState().config.music,
  });

  // const [{bgMusic, audio}, setState] = useSetState({ bgMusic: true, audio: true });
  // const { audio, music } = useAppSelector((state) => state.config);
  const { isShow, setIsShow, close } = useDlgHooks({ visible, onClose });

  const dispatch = useAppDispatch();

  const confirm = () => {
    // todo
    dispatch(setMusic(music))
    dispatch(setAudio(audio))
    setIsShow(false)
  };

  const toggleMusic = (music) => setState({ music });

  const toggleAudio = (audio) => setState({ audio });

  return (
    <Dialog
      title="设置声音"
      visible={isShow}
      onClose={() => setIsShow(false)}
      onAnimationend={close}
    >
      <div
        style={{
          width: "434px",
          margin: "0 59px",
          padding: "37px 0",
          backgroundColor: "#1D1D1D",
        }}
      >
        <Row
          justify="space-between"
          ailgn="center"
          style={{ height: "40px", padding: "0 102px" }}
        >
          <Label>
            <Icon
              type="icon-sound"
              color="#fff"
              style={{ marginRight: "10px" }}
            />
            音乐
          </Label>
          <OSwitch status={music} onToggle={toggleMusic} />
        </Row>
        <Row
          justify="space-between"
          ailgn="center"
          style={{ height: "40px", padding: "0 102px", marginTop: "40px" }}
        >
          <Label>
            <Icon
              type="icon-sound"
              color="#fff"
              style={{ marginRight: "10px" }}
            />
            音效
          </Label>
          <OSwitch status={audio} onToggle={toggleAudio} />
        </Row>
      </div>
      <Row
        style={{
          width: "325px",
          margin: "10px auto 18px",
          padding: "15px 10px",
        }}
        justify="center"
        ailgn="center"
      >
        <MyButton
          cancel
          name="取消"
          width={140}
          onClick={() => setIsShow(false)}
        />
        <MyButton
          styles={{ marginLeft: "25px" }}
          width={140}
          name="确认"
          onClick={confirm}
        />
      </Row>
    </Dialog>
  );
};

export default SetVoice;
