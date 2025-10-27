export type ButtonConfigType = {
  bgActive?: string;
  bgInactive?: string;
  font: string;
  fontColor: string;
  size: string;
  rounded: string;
  border?: string;
  text?: string;
};

export type Login = "login";

export type allMeetingRate = "allMeetingRate" | "allMeetingRateGary";

export type Meeting =
  | "startMeeting"
  | "startMeetingAlt"
  | "joinMeeting"
  | "joinMeetingActive"
  | "endMeeting"
  | "leaveMeeting";

export type Img =
  | "ImgAdd"
  | "ImgDelete"
  | "ImgDelete500"
  | "ImgDeleteGray"
  | "ImgChange";

export type Kick = "kick" | "kickGray";

export type Button =
  | "buttonGray"
  | "buttonBg700"
  | "button"
  | "buttonBorder"
  | "buttonBorder700"
  | "buttonBorderRed";

export type Team = "team" | "teamGray400";

export type AI = "AI" | "AIStart" | "AISecond";

export type UnifiedButtonType =
  | Button
  | Kick
  | Img
  | Meeting
  | Team
  | Login
  | allMeetingRate
  | AI;
