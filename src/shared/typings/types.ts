import { ReactNode, RefObject } from "react";

export interface ChildrenType {
  children?: ReactNode;
}
export interface ArticleType {
  content: ReactNode;
  id: string;
}
export interface ProjectDetailDataT {
  name: string;
  title: string;
  subtext: string;
  bgColor: string;
  date: string;
  team: string;
  tag: string[];
  imgurl?: string;
  detailimginfo?: {
    imgurl: string;
    subject: string;
  }[];
  giturl?: string;
  depoloyurl?: string;
  features: string[];
  tools: {
    title: string;
    detail: string;
  }[];
  role: {
    title: string;
    detailList: string[];
  }[];
}
