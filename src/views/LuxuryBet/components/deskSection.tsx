import React from "react";
import LuxuryBet from "./luxuryBet";
import { BetType } from "@/store/slices/bet.slice";
import { bankerChipsPosition, playerChipsPosition } from '../data'

export const Player = ({seatNo}) => {
  return (
    <LuxuryBet
      {...{
        fillColor: "rgba(76, 140, 237, .4)",
        transform: "translate(260, 207)",
        category: BetType.PLAYER,
        ...playerChipsPosition[seatNo]
        // x: 570,
        // y: 270,

        // x: 850,
        // y: 270,

        // x: 1156,
        // y: 270,

        // x: 1306,
        // y: 112,

        // x: 194,
        // y: 270,
      }}
    >
      <path d="M1250 98.5668V2H1398.88V170.81C1398.88 210.992 1377.74 247.508 1344.83 274.038C1311.93 300.568 1267.37 317 1220.88 317H170C76.9479 317 2 251.296 2 170.81V2H149V111.067C149 202 253.177 241 324.949 241H1067.05C1138.82 241 1250 189.5 1250 98.5668Z" />
    </LuxuryBet>
  );
};

export const Banker = ({seatNo}) => (
  <LuxuryBet
    {...{
      fillColor: "rgba(203, 84, 96, 0.4)",
      transform: "translate(410, 207)",
      category: BetType.BANKER,
      ...bankerChipsPosition[seatNo]
      // x: 420,
      // y: 198,
      // x: 650,
      // y: 198,

      // x: 650,
      // y: 198,

      // x: 880,
      // y: 198,

      // x: 1030,
      // y: 112,

      // x: 175,
      // y: 198,

     
    }}
  >
    <path d="M974.499 61.5363L974.5 61.5182V61.5V1H1100V98.5668C1100 143.577 1072.49 178.914 1035.89 203.048C999.282 227.186 953.736 240 918.051 240H551H175.949C140.215 240 96.4122 230.285 61.5763 209.277C26.7622 188.282 1 156.081 1 111.067V70.5334V1H124.168V61.011C124.168 91.1691 134.804 116.385 154.315 134.728C172.527 151.856 197.843 160 225.5 160H551.498H551.5L875.998 160.5L876.023 160.5L876.048 160.499C932.191 157.804 972.48 117.06 974.499 61.5363Z" />
  </LuxuryBet>
);

export const TableBot = () => (
  <LuxuryBet
    {...{
      fillColor: 'transparent',
      transform: "translate(0, 208)",
      x: 480,
      y: 210,
    }}
  >
    <path d="M1658.88 168.81V0H1916V195C1916 302.693 1828.68 390 1720.96 390H195.04C87.3242 390 0 302.693 0 195V0H258V168.81C258 250.65 334.11 317 428 317H1478.88C1572.77 317 1658.88 250.65 1658.88 168.81Z"/>
    <path d="M367.5 12V46C367.5 52.6274 362.127 58 355.5 58H12.203C1.85185 58 -3.64296 45.7727 3.22982 38.0324L33.4195 4.03244C35.6968 1.46768 38.9627 0 42.3926 0H355.5C362.127 0 367.5 5.37258 367.5 12Z" fill="yellowgreen" fill-opacity="0.2" transform="translate(580, 323)"/>
    <path d="M468.584 95.6053L436.106 131.064C433.81 133.569 430.56 134.985 427.162 134.958L179 133C100.937 130.99 37.771 99.1407 5.01319 75.8228C-2.33697 70.5908 -0.331981 59.8 8.14629 56.7148L160.869 1.14081C165.962 -0.712743 171.666 1.07858 174.786 5.5115L179 11.5C220.6 64.3 294.667 76.1667 326.5 75.5H459.735C470.174 75.5 475.635 87.9074 468.584 95.6053Z" fill="yellowgreen" fill-opacity="0.2" transform="translate(110, 246)"/>
    <text
          width="40"
          x={638}
          y={361}
          textAnchor="middle"
          fontSize="30px"
          stroke="#fff"
          fill="yellow"
        >
          5
        </text>
  
  </LuxuryBet>
);

export const Tie = () => (
  <LuxuryBet
    {...{
      fillColor: "rgba(63, 151, 105, .4)",
      transform: "translate(548, 205)",
      category: BetType.TIE,
      x: 320,
      y: 110,
    }}
  >
    <path d="M89.3502 151H735.65C785.001 151 825 110.614 825 60.7849V0H715V87H106V0H0V60.7849C0 118.031 39.9991 151 89.3502 151Z" />
    <path d="M825 0H827V-2H825V0ZM715 0V-2H713V0H715ZM715 87V89H717V87H715ZM106 87H104V89H106V87ZM106 0H108V-2H106V0ZM0 0V-2H-2V0H0ZM735.65 149H89.3502V153H735.65V149ZM823 60.7849C823 109.527 783.878 149 735.65 149V153C786.124 153 827 111.7 827 60.7849H823ZM823 0V60.7849H827V0H823ZM715 2H825V-2H715V2ZM713 0V87H717V0H713ZM715 85H106V89H715V85ZM108 87V0H104V87H108ZM0 2H106V-2H0V2ZM2 60.7849V0H-2V60.7849H2ZM89.3502 149C65.1183 149 43.2968 140.91 27.5477 125.912C11.8153 110.929 2 88.9184 2 60.7849H-2C-2 89.8979 8.18427 112.995 24.7892 128.808C41.3774 144.606 64.231 153 89.3502 153V149Z" />
  </LuxuryBet>
);

export const BankerDouble = () => (
  <LuxuryBet
    {...{
      fillColor: "rgba(246, 94, 94, 0.4)",
      transform: "translate(1352, 102)",
      category: BetType.BDOUBLE,
      x: 480,
      y: 210,
    }}
  >
    <rect x="1" y="1" width="566" height="92" stroke="white" strokeWidth="2" />
  </LuxuryBet>
);

export const PlayerDouble = () => (
  <LuxuryBet
    {...{
      fillColor: "rgba(76, 140, 237, .4)",
      transform: "translate(0, 102)",
      category: BetType.PDOUBLE,
      x: 480,
      y: 210,
    }}
  >
    <rect x="1" y="1" width="566" height="92" stroke="white" strokeWidth="2" />
  </LuxuryBet>
);
