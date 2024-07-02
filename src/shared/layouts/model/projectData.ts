import { project1 } from "./projectDetail/project1";
import { project2 } from "./projectDetail/project2";
/*
    name : 플젝이름,
    title : 개인, 반응형 or 적응형, 포트폴리오, 사이드 or 
    tag : 개인 or 회사
    subject : 소개, 
    gitUrl : 깃허브,
    depUrl : 배포 사이트,
  */
export const projects = [
  {
    name: project1.name,
    title: project1.title,
    tag: project1.tag,
    subject: "읽고 싶은 책 위시리스트 사이트 입니다.",
    img: project1.imgurl,
    type: "solo",
  },
  {
    name: project2.name,
    title: project2.title,
    tag: project2.tag,
    subject: "읽고 싶은 책 위시리스트 사이트 입니다.",
    img: project2.imgurl,
    type: "solo",
  },
];
