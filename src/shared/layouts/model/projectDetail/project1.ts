import color from "../../../../app/UI/style.scss";
/*
  {
  name: "",
  title: "",
  subtext:"",
  bgColor: color.project1,
  date: "",
  team: "",
  imgurl: "",
  thumImginfo: {
    imgurl: "",
    subject: "",
  },
  gitUrl: "",
  depUrl: "",
  tag: [""],
  features: [""],
  tools: [
    {
      title: "",
      detail: "",
    },
  ],
  role: [
    {
      title: "",
      detailList: [``,],
    },
    
  ],
  
};
  */

export const project1 = {
  name: "WishRead",
  title: "읽고 싶은 책 위시리스트 플랫폼",
  subtext:
    "읽고 싶은 책, 읽은 책을 조회, 검색, 정렬, 필터링 할 수 있는 책 위시리스트 반응형 웹입니다.\nTypescript 스터디 후 실제 서비스 제공까지 목표로 시작한 토이프로젝트 입니다.",
  bgColor: color.project1,
  date: "2024.04.23 ~ 06.03",
  team: "기여도 100%",
  imgurl: "https://raw.githubusercontent.com/zoe-world/Portfolio/main/src/app/UI",
  thumImginfo: {
    imgurl: "",
    subject: "",
  },
  gitUrl: "https://github.com/zoe-world/Wishread",
  depUrl: "https://zoe-world.github.io/Wishread/",
  tag: ["개인", "반응형", "퍼블리싱"],
  features: [
    "카카오 오픈 API 다루기",
    "recoil의 selectorFamily를 통해 API로 받아온 데이터 캐싱",
    "recoil의 atom, selector를 이용하여 검색, 정렬, 필터링 기능 구현",
    "위시 북들을 모아볼 수 있도록 LocalStorage에 데이터 저장",
    "CI/CD 구축하기",
  ],
  tools: [
    {
      title: "React",
      detail:
        "React 라이브러리를 사용하여 컴포넌트 기반의 웹 애플리케이션을 개발하였으며, React Router를 활용하여 클라이언트 측 라우팅을 구현하였습니다",
    },
    {
      title: "Typescript",
      detail:
        "TypeScript를 사용하여 정적 타입 검사를 통해 코드의 안정성과 가독성을 향상시켰습니다.",
    },
    {
      title: "Recoil",
      detail:
        "Recoil을 사용하여 애플리케이션의 전역 상태를 효율적으로 관리하고, 상태 간의 의존성을 간단하게 처리할 수 있었습니다.",
    },
    {
      title: "Styled-Components",
      detail:
        "Styled-Components를 활용하여 각 컴포넌트의 스타일링을 일관되게 적용하고, Props를 이용하여 공통적인 스타일을 재사용 가능하도록 설정하였습니다.",
    },
    {
      title: "FontAwesome",
      detail:
        "FontAwesome을 사용하여 아이콘을 손쉽게 추가하고, 웹 애플리케이션의 시각적 요소를 강화하였습니다.",
    },
  ],
  role: [
    {
      title: "Promise.all을 사용하여 최근 검색한 책 결과값 API 병렬 처리",
      detailList: [
        `요구사항 등을 정확히 파악하고 이해하기 위해 직접 소통하며 일정과 요구사항을 체크`,
        `더불어 개선 사항 등 피드백을 받았을 때 열린 마음으로 수용하고, 더 나은 방향으로 제안하여 프로젝트를 구체화해 나감`,
      ],
    },
    {
      title:
        "React Suspense를 통해 비동기 데이터를 가져오는 동안 로딩 UI 렌더링",
      detailList: [
        `\`React Suspense\`를 사용하여 비동기 데이터가 로드되는 동안 사용자에게 로딩 상태를 보여줌으로써 사용자 경험을 향상시킵니다.`,
        `이를 통해 로딩 상태를 보다 세밀하게 관리하고, 필요에 따라 사용자에게 진행 상황을 시각적으로 제공하여 로딩 시간 동안의 불편함을 최소화할 수 있습니다.`,
      ],
    },
    {
      title:
        "Recoil의 atom, selector, selectorFamily를 이용한 검색 및 정렬 기능 구현",
      detailList: [
        `\`selector\`와 \`selectorFamily\`를 활용하여 파생 상태를 쉽게 계산하고, 비동기 데이터를 효율적으로 관리할 수 있습니다.`,
        `이를 통해 검색 및 정렬 기능에서 중복 데이터 처리와 같은 문제를 최소화하였습니다.`,
        `상태 관리 로직을 atom과 \`selector\`로 분리하여 코드의 모듈화와 재사용성을 높였습니다.`,
        `이를 통해 복잡한 상태 관리가 필요한 부분도 쉽게 유지보수할 수 있게 되었습니다.`,
      ],
    },
    {
      title: "최근 검색한 책을 localStorage에 데이터 저장",
      detailList: [
        `사용자가 검색한 책 정보를 \`localStorage\`에 저장하여, 페이지를 새로고침해도 데이터가 유지되도록 합니다.`,
        `이를 통해 사용자는 검색 이력을 지속적으로 확인할 수 있어 편리하며, 필요에 따라 오래된 검색 데이터를 자동으로 정리하는 로직을 추가하여 저장 공간을 효율적으로 관리할 수 있습니다.`,
      ],
    },
    {
      title: "랜덤 추천 책 기능 구현",
      detailList: [
        `사용자가 방문할 때마다 랜덤으로 책을 추천하는 기능을 구현합니다.`,
        `이를 통해 사용자는 다양한 책을 접할 수 있어 흥미를 유발하며, 추천 알고리즘을 개선하여 사용자의 선호도에 맞춘 개인화된 추천을 제공할 수 있습니다.`,
      ],
    },
    {
      title: "My Wishlist를 모아볼 수 있는 기능 및 localStorage에 데이터 저장",
      detailList: [
        `사용자가 원하는 책을 위시리스트에 추가하고, 해당 데이터를 \`localStorage\`에 저장하여 지속적으로 관리합니다.`,
        `이를 통해 사용자는 위시리스트를 언제든지 확인할 수 있어 편리하며, 필요에 따라 위시리스트 북마크를 해체할 경우 자동으로 삭제하는 기능을 추가하여 관리 효율성을 높일 수 있습니다.`,
      ],
    },
    {
      title: "Styled-Components를 활용",
      detailList: [
        `Styled-Components의 Global Style을 사용하여 전역적으로 적용해야 하는 스타일을 관리합니다.`,
        `이를 통해 일관된 디자인을 유지할 수 있으며, 중복 스타일링을 방지하여 유지보수가 용이합니다. 필요에 따라 더 세밀한 스타일링을 위해 주제별로 \`Global Style\`을 나누어 관리할 수 있습니다.`,
        `Props를 활용하여 공통적인 스타일을 재사용 가능하도록 설정합니다.`,
        `이를 통해 코드의 중복을 줄이고, 스타일의 일관성을 유지할 수 있으며, 다양한 컴포넌트에서 동일한 스타일을 쉽게 적용할 수 있습니다.`,
      ],
    },
    {
      title: "Github Pages를 활용한 CI/CD 배포 자동화",
      detailList: [
        `Github Pages를 사용하여 프로젝트의 CI/CD 배포를 자동화합니다.`,
        `이를 통해 배포 과정을 간소화하고, 코드를 푸시할 때마다 자동으로 최신 버전이 배포되어 일관성을 유지할 수 있습니다.`,
      ],
    },
  ],
};
