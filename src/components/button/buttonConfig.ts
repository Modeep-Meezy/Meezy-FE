import {
  ButtonConfigType,
  Button,
  Kick,
  Img,
  Meeting,
  Team,
  Login,
  allMeetingRate,
  AI,
  UnifiedButtonType,
} from "./buttonTypes";
import {
  COMMON_MEETING_CONFIG,
  COMMON_IMG_CONFIG,
  COMMON_KICK_CONFIG,
  COMMON_BUTTON_CONFIG,
  COMMON_TEAM_CONFIG,
  COMMON_ALLMEETINGRATE_CONFIG,
  COMMON_AI_CONFIG,
} from "./buttonStyles";

export const TEAM_CONFIG: Record<Team, ButtonConfigType> = {
  team: {
    ...COMMON_TEAM_CONFIG,
    fontColor: "text-gray-300",
  },
  teamGray400: {
    ...COMMON_TEAM_CONFIG,
    fontColor: "text-gray-400",
  },
};

export const BUTTON_CONFIG: Record<Button, ButtonConfigType> = {
  button: {
    ...COMMON_BUTTON_CONFIG,
    bgActive: "bg-primary-500",
    fontColor: "text-white",
  },
  buttonBg700: {
    ...COMMON_BUTTON_CONFIG,
    bgActive: "bg-primary-700",
    fontColor: "text-gray-200",
  },
  buttonGray: {
    ...COMMON_BUTTON_CONFIG,
    bgActive: "bg-gray-500",
    fontColor: "text-gray-400",
  },
  buttonBorder: {
    ...COMMON_BUTTON_CONFIG,
    bgActive: "",
    fontColor: "text-primary-500",
    border: "border border-primary-500",
  },
  buttonBorder700: {
    ...COMMON_BUTTON_CONFIG,
    bgActive: "",
    fontColor: "text-primary-700",
    border: "border border-primary-700",
  },
  buttonBorderRed: {
    ...COMMON_BUTTON_CONFIG,
    bgActive: "",
    fontColor: "text-system-800",
    border: "border border-system-800",
  },
};

export const KICK_CONFIG: Record<Kick, ButtonConfigType> = {
  kick: {
    ...COMMON_KICK_CONFIG,
    fontColor: "text-system-800",
  },
  kickGray: {
    ...COMMON_KICK_CONFIG,
    fontColor: "text-gray-600",
  },
};

export const IMG_CONFIG: Record<Img, ButtonConfigType> = {
  ImgAdd: {
    //대표 이미지 업로드
    ...COMMON_IMG_CONFIG,
    text: "대표 이미지 업로드",
    bgActive: "bg-primary-500",
    bgInactive: "bg-primary-600",
  },
  ImgDelete: {
    //대표 이미지 삭제 - font 800
    ...COMMON_IMG_CONFIG,
    text: "대표 이미지 삭제",
    bgActive: "bg-gray-800",
    fontColor: "text-system-800",
  },
  ImgDelete500: {
    //대표 이미지 삭제 - font 500
    ...COMMON_IMG_CONFIG,
    text: "대표 이미지 삭제",
    bgActive: "bg-gray-800",
    fontColor: "text-system-500",
  },
  ImgDeleteGray: {
    //대표 이미지 삭제 - font gray
    ...COMMON_IMG_CONFIG,
    text: "대표 이미지 삭제",
    bgActive: "bg-gray-800",
    fontColor: "text-gray-600",
  },
  ImgChange: {
    ...COMMON_IMG_CONFIG,
    text: "이미지 변경",
    bgActive: "bg-primary-500",
  },
};

export const MEETING_CONFIG: Record<Meeting, ButtonConfigType> = {
  startMeeting: {
    //회의 시작 - 500
    ...COMMON_MEETING_CONFIG,
    text: "회의 시작",
    bgActive: "bg-orange-500",
  },
  startMeetingAlt: {
    //회의 시작 - 600
    ...COMMON_MEETING_CONFIG,
    text: "회의 시작",
    bgActive: "bg-orange-600",
  },
  joinMeeting: {
    //회의 시작 - gray
    text: "회의 시작",
    font: "text-LBody-B",
    fontColor: "text-gray-400",
    size: "w-full h-full",
    rounded: "rounded-full",
    bgActive: "bg-gray-500",
  },
  joinMeetingActive: {
    //회의 참가
    ...COMMON_MEETING_CONFIG,
    text: "회의 참가",
    bgActive: "bg-orange-500",
  },
  endMeeting: {
    //회의 종료
    ...COMMON_MEETING_CONFIG,
    text: "회의 종료",
    bgActive: "bg-red-800",
  },
  leaveMeeting: {
    //회의 나가기
    ...COMMON_MEETING_CONFIG,
    text: "회의 나가기",
    bgActive: "bg-red-800",
  },
};

export const LOGIN_CONFIG: Record<Login, ButtonConfigType> = {
  login: {
    text: "로그인",
    bgActive: "bg-primary-500",
    bgInactive: "bg-primary-600",
    font: "text-Title-B",
    fontColor: "text-white",
    size: "w-full h-full",
    rounded: "rounded-lg",
  },
} as const;

export const ALLMEETINGRATE_CONFIG: Record<allMeetingRate, ButtonConfigType> = {
  allMeetingRate: {
    ...COMMON_ALLMEETINGRATE_CONFIG,
    bgActive: "bg-primary-500",
    bgInactive: "bg-primary-600",
  },
  allMeetingRateGary: {
    ...COMMON_ALLMEETINGRATE_CONFIG,
    bgActive: "bg-gray-500",
  },
};

export const AI_CONFIG: Record<AI, ButtonConfigType> = {
  AI: {
    ...COMMON_AI_CONFIG,
    text: "회의 녹음 시작",
    fontColor: "text-gray-600",
  },
  AIStart: {
    ...COMMON_AI_CONFIG,
    text: "회의 녹음 시작",
    fontColor: "text-white",
  },
  AISecond: {
    ...COMMON_AI_CONFIG,
    text: "회의 녹음 중단",
    fontColor: "text-white",
  },
};

export const ALL_BUTTON_CONFIG: Record<UnifiedButtonType, ButtonConfigType> = {
  ...BUTTON_CONFIG,
  ...KICK_CONFIG,
  ...IMG_CONFIG,
  ...MEETING_CONFIG,
  ...TEAM_CONFIG,
  ...LOGIN_CONFIG,
  ...ALLMEETINGRATE_CONFIG,
  ...AI_CONFIG,
};
