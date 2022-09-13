import React, { useEffect, FC, useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { Column } from "@/components/flex";
import VideoOffControl from "@/assets/images/bet/VideoOffControl.png";
import VideoExpandControl from "@/assets/images/bet/VideoExpandControl.png";
import { playerAPI } from "@/services";

const VideoWrap = styled(Column)`
  position: relative;
  z-index: 100;
  width: ${(props: CSSProperties) => `${props.width}px`};
  height: ${(props: CSSProperties) => `${props.height}px`};
  /* position: absolute; */
  /* top: 0;
  left: ${(props: CSSProperties) => `calc(50% - ${props.left})`}; */
  background: #000;
  transform-origin: left top;
  transition: transform 0.5s linear;
  will-change: transform;
  transform: ${({ scale }: any) => `scale(${scale.x},${scale.y})`};

  /* video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  } */
`;

const VideoControl = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: url(${VideoOffControl}) no-repeat center;
  background-size: contain;
  width: 35px;
  height: 35px;
  align-self: flex-end;
  z-index: 10;
  /* transform: translate(-10px, -80px); */
  cursor: pointer;
`;

const VideoExpand = styled.div`
  position: absolute;
  top: 70px;
  right: 20px;
  background: url(${VideoExpandControl}) no-repeat center;
  background-size: contain;
  width: 35px;
  height: 35px;
  align-self: flex-end;
  z-index: 10;
  cursor: pointer;
`;

const VideoTip = styled.div`
  color: #fff;
  font-size: 20px;
`;
let player;

const flv =
  'https://pull-tx.cgcxs.net/live/cg01_m.flv?txSecret=9d34f2574174f17ab449b935a947bbeb&txTime=81C97A38'

const FlvPlayer: FC<any> = ({ width, height, id, scale }) => {
  const [showVideo, setShowVideo] = useState(true);
  // 是否大屏播放
  const [expand, setExpand] = useState(false);

  useEffect(() => {

    window.NodePlayer.load(() => {
      player = new window.NodePlayer();

      /**
       * 自动测试浏览器是否支持MSE播放，如不支持，仍然使用软解码。
       * 紧随 new 后调用
       * 不调用则只使用软解
       */
      // player.useMSE();

      /**
       * 开启屏幕常亮
       * 在手机浏览器上,canvas标签渲染视频并不会像video标签那样保持屏幕常亮
       * 如果需要该功能, 可以调用此方法
       * H5目前在chrome\edge 84, android chrome 84及以上有原生亮屏API, 需要是https页面
       * 其余平台为模拟实现，非全兼容。
       */
      player.setKeepScreenOn();

      /**
       * 传入 canvas视图的id，当使用mse时，自动转换为video标签
       */
      player.setView(id);

      /**
       * 设置最大缓冲时长，单位毫秒，只在软解时有效
       */
      player.setBufferTime(1000);

      /**
       * 设置超时时长, 单位秒,只在软解时有效
       * 在连接成功之前和播放中途,如果超过设定时长无数据返回,则回调timeout事件
       */
      // player.setTimeout(10);

      player.on("start", () => {
        console.log("player on start");
      });

      player.on("stop", () => {
        console.log("player on stop");
      });

      // @ts-ignore
      player.on("error", (e) => {
        console.log("player on error", e);
      });

      // @ts-ignore
      player.on("videoInfo", (w, h, codec) => {
        console.log(
          "player on video info width=" + w + " height=" + h + " codec=" + codec
        );
      });
      // @ts-ignore
      player.on("audioInfo", (r, c, codec) => {
        console.log(
          "player on audio info samplerate=" +
            r +
            " channels=" +
            c +
            " codec=" +
            codec
        );
      });
      player.start(flv);

    });
  }, []);

  const togglePlay = () => {
    setShowVideo(!showVideo)

    if (showVideo) {
      player.stop()
      player.clearView();
    } else {
      player.start(flv)
      // player.clearView();
    }
  }

  return (
    <VideoWrap
      {...{
        width,
        height,
        // left: "305px",
        // justify: "center",
        scale: expand ? scale : 1,
      }}
    >
      {/* {show ? <VideoTip>视频直播缓冲...</VideoTip> : null} */}

      <canvas id={id} {...{ width, height }}></canvas>

      <VideoControl onClick={togglePlay} />
      <VideoExpand onClick={() => setExpand(!expand)} />
    </VideoWrap>
    // <canvas id={id} {...{width, height}}></canvas>
  );
};

export default FlvPlayer;
