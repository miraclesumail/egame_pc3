import React, {
  FC,
  forwardRef,
  MutableRefObject,
  ForwardRefExoticComponent,
  useEffect,
  useRef,
  useState,
  Ref,
} from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Column, Row } from "../flex";
import WrapAnimate from "@/components/wrapAnimate";
import Poker from "./poker1";
import { setIsLottery } from "@/store/slices/bet.slice";

interface Props {
  playerTotal: number;
  bankerTotal: number;
  banker: any[];
  player: any[];
  result: "banker" | "player" | "tie";
}

const Container = styled.div`
  width: 482px;
  height: 231px;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, #cb5460 100%);

  &.in {
    animation-name: slideinfrombottom;
    animation-duration: 250ms;
    animation-fill-mode: forwards;
  }

  &.out {
    animation-name: slideouttobottom;
    animation-duration: 150ms;
    animation-fill-mode: forwards;
  }

  @keyframes slideinfrombottom {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideouttobottom {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(100%);
    }
  }
`;

const Solid = styled(Column)<any>`
  width: ${({ width }: any) => `${width}px`};
  height: ${({ height }: any) => `${height}px`};
  border-radius: ${({ borderRadius, width }: any) =>
    `${borderRadius | (width / 2)}px`};
  background: ${({ background }: any) => background};
  color: #fff;
`;

const ResultWrap = styled(Row)`
  &.opacityIn {
    animation: flickerAnimation 1s forwards;
  }
  opacity: 0;
  font-size: 26px;
  color: #fff;

  @keyframes flickerAnimation {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const Banker = styled(Column)``;

const Player = styled(Column)``;

const Tip = styled(Column)<any>`
  position: absolute;
  width: 100px;
  height: 45px;
  left: 170px;
  top: 155px;
  color: #fff;
  font-size: 12px;
  background: ${({ result }) =>
    `${
      result === "banker"
        ? "#cb5460"
        : result === "player"
        ? "#4C8CED"
        : "#4F7C3F"
    }`};

  border-radius: 22.5px;
`;

const Result: ForwardRefExoticComponent<any> = forwardRef(
  (props, ref: Ref<any>) => <ResultWrap iref={ref}>{props.children}</ResultWrap>
);

const TipBtn: ForwardRefExoticComponent<any> = forwardRef(
  (props, ref: Ref<any>) => (
    <Tip iref={ref} {...props}>
      {props.children}
    </Tip>
  )
);

const Index: FC<Props> = ({
  bankerTotal = 8,
  playerTotal = 7,
  result = "tie",
  player = [1, 1],
  banker = [1, 1, 1],
}) => {
  const [{ showNumber, showResult, active }, setState] = useState<any>({
    showNumber: false,
    showResult: false,
    active: false,
  });

  const dispatch = useDispatch();

  const ref: MutableRefObject<any> = useRef<HTMLDivElement>();
  const cardRef: MutableRefObject<any> = useRef<HTMLDivElement>();

  const hideFlipModal = () => {
    setTimeout(() => {
    //   ref.current.classList.remove("in");
    //   ref.current.classList.add("out");
    //   ref.current.addEventListener("animationend", () => {
    //     dispatch(setIsLottery(false));
    //   });
    }, 500);
  };

  useEffect(() => {
    // 开奖容器从底部划出
    ref.current.classList.add("in");

    // .5s后开始翻牌动画
    ref.current.addEventListener("animationend", () => {
      console.log("animationend");
      setState((state) => ({ ...state, active: true }));
    });

    // 显示庄闲开奖数字
    cardRef.current.addEventListener("transitionend", () => {
      console.log("transitionendtransitionendtransitionend");
      setState((state) => ({ ...state, showNumber: true }));
    });
  }, []);

  return (
    <Container ref={ref}>
      <Player>
        <Solid
          {...{ width: 30, height: 30, background: "#4C8CED" }}
          style={{ marginBottom: 15 }}
          justify="center"
        >
          闲
        </Solid>
        <Row
          style={{ width: player.length === 3 ? 150 : 85 }}
          justify="space-between"
        >
          {player.map((poker, index) => (
            <Poker
              key={index}
              poker={poker}
              {...{
                active,
                ref: !index ? (cardRef as any) : null,
                direction:
                  player.length === 3 && !index ? "horizon" : "vertical",
              }}
            />
          ))}
        </Row>
        {showNumber && (
          <WrapAnimate
            {...{
              Cmp: Result,
              animateClass: "opacityIn",
              onAnimationend: () =>
                setState((state) => ({ ...state, showResult: true })),
            }}
          >
            {playerTotal}
          </WrapAnimate>
        )}
      </Player>

      {/* {showResult && (
            <TipBtn className="animate__bounceIn" justify="center" result={result}>
              <span>庄赢</span>
              <span>BANKER WIN</span>
            </TipBtn>
          )} */}

      {showResult && (
        <WrapAnimate
          {...{
            Cmp: TipBtn,
            animateClass: "animate__bounceIn",
            onAnimationend: hideFlipModal,
          }}
        >
          <span>庄赢</span>
          <span>BANKER WIN</span>
        </WrapAnimate>
      )}

      <Banker>
        <Solid
          {...{ width: 30, height: 30, background: "#CB5460" }}
          style={{ marginBottom: 15 }}
          justify="center"
        >
          庄
        </Solid>
        <Row
          style={{ width: banker.length === 3 ? 150 : 85 }}
          justify="space-between"
        >
          {banker.map((poker, index) => (
            <Poker
              key={index}
              poker={poker}
              {...{
                active,
                direction:
                  banker.length === 3 && index === 2 ? "horizon" : "vertical",
              }}
            />
          ))}
        </Row>
        {showNumber && (
          <WrapAnimate
            {...{
              Cmp: Result,
              animateClass: "opacityIn",
            }}
          >
            {bankerTotal}
          </WrapAnimate>
        )}
      </Banker>
    </Container>
  );
};

export default Index;
