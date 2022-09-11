import chip1 from "@/assets/images/bet/chips/chip25.png";
import chip2 from "@/assets/images/bet/chips/chip50.png";
import chip3 from "@/assets/images/bet/chips/chip100.png";
import chip4 from "@/assets/images/bet/chips/chip500.png";
import chip5 from "@/assets/images/bet/chips/chip1000.png";
import chip6 from "@/assets/images/bet/chips/chip5000.png";
import chip7 from "@/assets/images/bet/chips/chip10000.png";
import chip8 from "@/assets/images/bet/chips/chip50000.png";
import chip9 from "@/assets/images/bet/chips/chip100000.png";
import chip10 from "@/assets/images/bet/chips/chip500000.png";
import chips1 from "@/assets/images/bet/chips/chipActive25.png";
import chips2 from "@/assets/images/bet/chips/chipActive50.png";
import chips3 from "@/assets/images/bet/chips/chipActive100.png";
import chips4 from "@/assets/images/bet/chips/chipActive500.png";
import chips5 from "@/assets/images/bet/chips/chipActive1000.png";
import chips6 from "@/assets/images/bet/chips/chipActive5000.png";
import chips7 from "@/assets/images/bet/chips/chipActive10000.png";
import chips8 from "@/assets/images/bet/chips/chipActive50000.png";
import chips9 from "@/assets/images/bet/chips/chipActive100000.png";
import chips10 from "@/assets/images/bet/chips/chipActive500000.png";

import chipS1 from "@/assets/images/bet/chips/25-C.svg";
import chipS2 from "@/assets/images/bet/chips/50-C.svg";
import chipS3 from "@/assets/images/bet/chips/100-C.svg";
import chipS4 from "@/assets/images/bet/chips/500-C.svg";
import chipS5 from "@/assets/images/bet/chips/1000-C.svg";
import chipS6 from "@/assets/images/bet/chips/5000-C.svg";
import chipS7 from "@/assets/images/bet/chips/10000-C.svg";
import chipS8 from "@/assets/images/bet/chips/50000-C.svg";
import chipS9 from "@/assets/images/bet/chips/100000-C.svg";
import chipS10 from "@/assets/images/bet/chips/500000-C.svg";

export const chips = [
  {
    src: chip1,
    activeSrc: chips1,
  },
  {
    src: chip2,
    activeSrc: chips2,
  },
  {
    src: chip3,
    activeSrc: chips3,
  },
  {
    src: chip4,
    activeSrc: chips4,
  },
  {
    src: chip5,
    activeSrc: chips5,
  },
  {
    src: chip6,
    activeSrc: chips6,
  },
  {
    src: chip7,
    activeSrc: chips7,
  },
  {
    src: chip8,
    activeSrc: chips8,
  },
  {
    src: chip9,
    activeSrc: chips9,
  },
  {
    src: chip10,
    activeSrc: chips10,
  },
];

export const smallChips = [chipS1, chipS2, chipS3, chipS4, chipS5, chipS6, chipS7, chipS8, chipS9, chipS10];

export const keyframes5: any = {
  banker: [
    [{ transform: "translate(0)" }, { transform: "translate(-555px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-640px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-725px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-810px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-895px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-980px, -184px) scale(0.625)" }],
  ],
  player: [
    [{ transform: "translate(0)" }, { transform: "translate(-552px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-645px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-738px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-831px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-924px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-1017px, -112px) scale(0.625)" }],
  ],
  tie: [
    [{ transform: "translate(0)" }, { transform: "translate(-514px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-604px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-694px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-784px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-874px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-964px, -274px) scale(0.625)" }],
  ],
};

export const keyframes3: any = {
  banker: [
    [{ transform: "translate(0)" }, { transform: "translate(-325px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-410px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-495px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-580px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-665px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-750px, -184px) scale(0.625)" }],
  ],
  player: [
    [{ transform: "translate(0)" }, { transform: "translate(-272px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-357px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-442px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-527px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-612px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-697px, -112px) scale(0.625)" }],
  ],
  tie: [
    [{ transform: "translate(0)" }, { transform: "translate(-514px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-604px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-694px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-784px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-874px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-964px, -274px) scale(0.625)" }],
  ],
};

export const keyframes2: any = {
  banker: [
    [{ transform: "translate(0)" }, { transform: "translate(-95px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-180px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-265px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-350px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-435px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-520px, -184px) scale(0.625)" }],
  ],
  player: [
    [{ transform: "translate(0)" }, { transform: "translate(32px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-53px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-138px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-233px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-318px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-403px, -112px) scale(0.625)" }],
  ],
  tie: [
    [{ transform: "translate(0)" }, { transform: "translate(-514px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-604px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-694px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-784px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-874px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-964px, -274px) scale(0.625)" }],
  ],
};

export const keyframes1: any = {
  banker: [
    [{ transform: "translate(0)" }, { transform: "translate(55px, -270px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-30px, -270px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-115px, -270px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-200px, -270px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-285px, -270px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-370px, -270px) scale(0.625)" }],
  ],
  player: [
    [{ transform: "translate(0)" }, { transform: "translate(182px, -270px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(97px, -270px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(12px, -270px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-73px, -270px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-158px, -270px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-240px, -270px) scale(0.625)" }],
  ],
  tie: [
    [{ transform: "translate(0)" }, { transform: "translate(-514px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-604px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-694px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-784px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-874px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-964px, -274px) scale(0.625)" }],
  ],
};

export const keyframes6: any = {
  banker: [
    [{ transform: "translate(0)" }, { transform: "translate(-800px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-885px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-970px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-1055px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-1140px, -184px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-1225px, -184px) scale(0.625)" }],
  ],
  player: [
    [{ transform: "translate(0)" }, { transform: "translate(-930px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-1015px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-1100px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-1185px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-1270px, -112px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-1355px, -112px) scale(0.625)" }],
  ],
  tie: [
    [{ transform: "translate(0)" }, { transform: "translate(-514px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-604px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-694px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-784px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-874px, -274px) scale(0.625)" }],
    [{ transform: "translate(0)" }, { transform: "translate(-964px, -274px) scale(0.625)" }],
  ],
};

// canvas画图模拟数据
export const roundData = {
  GD051227310K3: {
    banker_val: "8",
    player_val: "1",
    card_num: "4",
    pair: "3",
    timestamp: 1659259397365,
  },
  GD051227310K0: {
    banker_val: "8",
    player_val: "8",
    card_num: "4",
    pair: "0",
    timestamp: 1659259397365,
  },
  GD051227310K011: {
    banker_val: "8",
    player_val: "8",
    card_num: "4",
    pair: "0",
    timestamp: 1659259397365,
  },
  GD051227310K012: {
    banker_val: "8",
    player_val: "8",
    card_num: "4",
    pair: "0",
    timestamp: 1659259397365,
  },
  GD051227310L5: {
    banker_val: "2",
    player_val: "8",
    card_num: "4",
    pair: "0",
    timestamp: 1659260898135,
  },
  GD051227310L6: {
    banker_val: "4",
    player_val: "7",
    card_num: "5",
    pair: "1",
    timestamp: 1659260940266,
  },
  GD051227310L7: {
    banker_val: "5",
    player_val: "9",
    card_num: "4",
    pair: "0",
    timestamp: 1659260982267,
  },
  GD051227310L8: {
    banker_val: "5",
    player_val: "7",
    card_num: "6",
    pair: "0",
    timestamp: 1659261027055,
  },
  GD051227310L9: {
    banker_val: "6",
    player_val: "6",
    card_num: "4",
    pair: "2",
    timestamp: 1659261069072,
  },
  GD051227310K02: {
    banker_val: "8",
    player_val: "8",
    card_num: "4",
    pair: "0",
    timestamp: 1659259397365,
  },
  GD051227310LA: {
    banker_val: "3",
    player_val: "5",
    card_num: "6",
    pair: "0",
    timestamp: 1659261112509,
  },
  GD051227310LB: {
    banker_val: "4",
    player_val: "8",
    card_num: "4",
    pair: "1",
    timestamp: 1659261154927,
  },
  GD051227310LC: {
    banker_val: "6",
    player_val: "7",
    card_num: "5",
    pair: "0",
    timestamp: 1659261197473,
  },
  GD051227310LD: {
    banker_val: "6",
    player_val: "8",
    card_num: "4",
    pair: "2",
    timestamp: 1659261238632,
  },
  GD051227310LE: {
    banker_val: "6",
    player_val: "6",
    card_num: "5",
    pair: "0",
    timestamp: 1659261280039,
  },
  GD051227310LF: {
    banker_val: "4",
    player_val: "6",
    card_num: "5",
    pair: "0",
    timestamp: 1659261319498,
  },
  GD051227310LG: {
    banker_val: "5",
    player_val: "6",
    card_num: "5",
    pair: "0",
    timestamp: 1659261387749,
  },
  GD051227310LH: {
    banker_val: "3",
    player_val: "9",
    card_num: "4",
    pair: "0",
    timestamp: 1659261429043,
  },
  GD051227310LI: {
    banker_val: "0",
    player_val: "9",
    card_num: "4",
    pair: "0",
    timestamp: 1659261469139,
  },
  GD051227310LJ: {
    banker_val: "2",
    player_val: "7",
    card_num: "5",
    pair: "0",
    timestamp: 1659261510727,
  },
  GD051227310LK: {
    banker_val: "5",
    player_val: "3",
    card_num: "6",
    pair: "2",
    timestamp: 1659261554450,
  },
  GD051227310LL: {
    banker_val: "0",
    player_val: "1",
    card_num: "6",
    pair: "2",
    timestamp: 1659261598116,
  },
  GD051227310LM: {
    banker_val: "9",
    player_val: "4",
    card_num: "4",
    pair: "0",
    timestamp: 1659261637386,
  },
  GD051227310LN: {
    banker_val: "5",
    player_val: "6",
    card_num: "5",
    pair: "0",
    timestamp: 1659261678153,
  },
  GD051227310LN1: {
    banker_val: "5",
    player_val: "6",
    card_num: "5",
    pair: "0",
    timestamp: 1659261678153,
  },
  GD051227310LO: {
    banker_val: "1",
    player_val: "3",
    card_num: "6",
    pair: "1",
    timestamp: 1659261724395,
  },
  GD051227310LP: {
    banker_val: "6",
    player_val: "8",
    card_num: "4",
    pair: "1",
    timestamp: 1659261763114,
  },
  GD051227310LQ: {
    banker_val: "6",
    player_val: "7",
    card_num: "5",
    pair: "0",
    timestamp: 1659261805523,
  },
  GD051227310LR: {
    banker_val: "2",
    player_val: "9",
    card_num: "6",
    pair: "0",
    timestamp: 1659261851301,
  },
  GD051227310LS: {
    banker_val: "8",
    player_val: "8",
    card_num: "4",
    pair: "0",
    timestamp: 1659261889763,
  },
  GD051227310LT: {
    banker_val: "8",
    player_val: "1",
    card_num: "4",
    pair: "1",
    timestamp: 1659261930147,
  },
  GD051227310LU: {
    banker_val: "0",
    player_val: "5",
    card_num: "6",
    pair: "0",
    timestamp: 1659261976986,
  },
  GD051227310LW: {
    banker_val: "0",
    player_val: "5",
    card_num: "6",
    pair: "0",
    timestamp: 1659261976986,
  },
  GD051227310LV: {
    banker_val: "4",
    player_val: "9",
    card_num: "4",
    pair: "1",
    timestamp: 1659262017008,
  },
};

export const tablePosition = {
  5: {
    path:
      "M367.5 12V46C367.5 52.6274 362.127 58 355.5 58H12.203C1.85185 58 -3.64296 45.7727 3.22982 38.0324L33.4195 4.03244C35.6968 1.46768 38.9627 0 42.3926 0H355.5C362.127 0 367.5 5.37258 367.5 12Z",
    fillText: "yellow",
    text: 5,
    x: 638,
    y: 361,
    fill: "yellowgreen",
    transform: "translate(580, 323)",
  },
  3: {
    path:
      "M0.5 12V46C0.5 52.6274 5.87259 58 12.5 58H355.797C366.148 58 371.643 45.7727 364.77 38.0324L334.581 4.03244C332.303 1.46768 329.037 0 325.607 0H12.5C5.87259 0 0.5 5.37258 0.5 12Z",
    fillText: "yellow",
    text: 3,
    x: 1278,
    y: 363,
    fill: "yellowgreen",
    transform: "translate(970, 323)",
  },
  2: {
    path:
      "M3.9158 95.6053L36.3944 131.064C38.6897 133.569 41.9398 134.985 45.338 134.958L293.5 133C371.563 130.99 434.729 99.1407 467.487 75.8228C474.837 70.5908 472.832 59.8 464.354 56.7148L311.631 1.14081C306.538 -0.712743 300.834 1.07858 297.714 5.5115L293.5 11.5C251.9 64.3 177.833 76.1667 146 75.5H12.7647C2.32565 75.5 -3.13522 87.9074 3.9158 95.6053Z",
    fillText: "yellow",
    text: 2,
    x: 1654,
    y: 293,
    fill: "yellowgreen",
    transform: "translate(1338, 245)",
  },
  1: {
    path:
      "M8 139.5C8.56236 172.117 4.29868 195.197 0.558136 208.809C-1.28535 215.518 2.10316 222.887 8.69684 225.108L183.154 283.863C187.099 285.191 191.478 284.399 194.573 281.616C237.374 243.122 246 195.596 246 172V12.5C246 5.87258 240.627 0.5 234 0.5H20C13.3726 0.5 8 5.87259 8 12.5V139.5Z",
    fillText: "yellow",
    text: 1,
    x: 1697,
    y: 42,
    fill: "yellowgreen",
    transform: "translate(1661, 8)",
  },
  6: {
    path:
      "M468.584 95.6053L436.106 131.064C433.81 133.569 430.56 134.985 427.162 134.958L179 133C100.937 130.99 37.771 99.1407 5.01319 75.8228C-2.33697 70.5908 -0.331981 59.8 8.14629 56.7148L160.869 1.14081C165.962 -0.712743 171.666 1.07858 174.786 5.5115L179 11.5C220.6 64.3 294.667 76.1667 326.5 75.5H459.735C470.174 75.5 475.635 87.9074 468.584 95.6053Z",
    fillText: "yellow",
    text: 6,
    x: 264,
    y: 293,
    fill: "yellowgreen",
    transform: "translate(110, 246)",
  },
};

export const keyframesMap = {
  5: keyframes5,
  3: keyframes3,
  2: keyframes2,
  1: keyframes1,
  6: keyframes6,
};

export const bankerChipsPosition = {
  5: {
    x: 420,
    y: 198,
  },
  3: {
    x: 650,
    y: 198,
  },
  2: {
    x: 880,
    y: 198,
  },
  1: {
    x: 1030,
    y: 112,
  },
  6: {
    x: 175,
    y: 198,
  },
};

export const playerChipsPosition = {
  5: {
    x: 570,
    y: 270,
  },
  3: {
    x: 850,
    y: 270,
  },
  2: {
    x: 1156,
    y: 270,
  },
  1: {
    x: 1306,
    y: 112,
  },
  6: {
    x: 194,
    y: 270,
  },
};
