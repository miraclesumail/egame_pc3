import React, { useState } from "react";
import styled from "styled-components";
import Dialog from "@/components/Dialog";
import { Row, Column } from "@/components/flex";
import { useDlgHooks } from "@/components/Header/Modals/hooks";

const Container = styled(Column)`
  padding: 0 50px;
`;

const Header = styled(Row)`
  color: #e5c180;
  font-size: 18px;
`;

interface ImgStyledProps {
  src: string;
  value: string;
  isSelected: boolean;
}
const Img = styled(Row)<ImgStyledProps>`
  position: relative;
  width: 671px;
  height: 144px;
  background-size: 100%;
  background: ${(props) => `url(${props.src}) no-repeat center`};
  margin-bottom: 26px;
  cursor: pointer;

  &:hover {
    &:before {
      display: block;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      transition: background-color 500ms ease;
      background-color: ${(props) => {
        switch (props.value) {
          case "1":
            return "rgba(25, 39, 32, 0.9)";
          case "2":
            return "rgba(39, 67, 140, 0.9)";
          case "3":
          default:
            return "rgba(0, 0, 0, 0.9)";
        }
      }}};

      .front-text {
        transform: translate(-208px, 0) scale(0.5)
      }
    }
  

  .front-text {
    transition: all 500ms ease;
    transform: translate(0,0) scale(0.5);
    /* transform: ${(props) =>
      props.isSelected ? "translate(0,0)" : "translate(-208px, 0)"}
      scale(0.5); */
  }
`;

interface Props {
  visible?: boolean;
  onClose?: () => void;
}
const casinos = [
  {
    value: "1",
    bgImgSrc: require("@/assets/images/bet/casino1.png"),
    textImgSrc: require("@/assets/images/bet/casinoName_1.png"),
  },
  {
    value: "2",
    bgImgSrc: require("@/assets/images/bet/casino2.png"),
    textImgSrc: require("@/assets/images/bet/casinoName_2.png"),
  },
  {
    value: "3",
    bgImgSrc: require("@/assets/images/bet/casino3.png"),
    textImgSrc: require("@/assets/images/bet/casinoName_3.png"),
  },
];

const CasinoPick: React.FC<Props> = ({ visible, onClose }) => {
  const { isShow, setIsShow, close } = useDlgHooks({ visible, onClose });
  const [selected, setSelected] = useState("1");
  return (
    <Dialog
      title="选择赌场"
      visible={isShow}
      zIndex={8000}
      onClose={() => setIsShow(false)}
      onAnimationend={close}
    >
      <Container>
        {casinos.map((item, index) => {
          return (
            <Img
              key={index}
              src={item.bgImgSrc}
              value={item.value}
              justify="center"
              isSelected={item.value === selected}
              // onClick={() => setSelected(item.value)}
            >
              <img src={item.textImgSrc} className="front-text"></img>
            </Img>
          );
        })}
      </Container>
    </Dialog>
  );
};

export default CasinoPick;
