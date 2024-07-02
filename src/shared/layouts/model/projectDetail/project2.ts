import color from "../../../../app/UI/style.scss";
/*
  {
  name: "",
  title: "",
  subtext:"",
  bgColor: color.project1,
  date: "",
  team: "",
  imgurl: "https://raw.githubusercontent.com/zoe-world/Portfolio/main/src/app/UI/images/",
  thumImginfo: [{
    imgurl: "https://raw.githubusercontent.com/zoe-world/Portfolio/main/src/app/UI/images/",
    subject: "",
},],
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

export const project2 = {
  name: "Animax",
  title: "애니메이션 OTT 서비스 플랫폼",
  subtext:
    "기존 Animax 사이트를 UI/UX 측면을 고려하여 리뉴얼을 진행한 포트폴리오용 리뉴얼 프로젝트입니다.",
  bgColor: color.project2,
  date: "2023.12~ 2024.02",
  team: "기여도 100%",
  imgurl:
    "https://raw.githubusercontent.com/zoe-world/Portfolio/main/src/app/UI/images/project2.webp",
  thumImginfo: [
    {
      imgurl:
        "https://raw.githubusercontent.com/zoe-world/Portfolio/main/src/app/UI/images/pr",
      subject: "메인 페이지",
    },
    {
      imgurl: "",
      subject: "",
    },
  ],
  gitUrl: "https://github.com/zoe-world/Animax_Project",
  depUrl: "https://zoe-world.github.io/Animax_Project/",
  tag: ["개인", "반응형", "퍼블리싱", "클론코딩"],
  features: [
    "React를 사용하여 함수형 컴포넌트와 훅을 능숙하게 사용하기",
    "Redux-toolkit를 활용한 전역적으로 상태관리하기",
    "react-router-dom를 활용한 페이지 이동의 유연함",
    "react-modal 라이브러리의 사용",
    "커스텀 훅을 만들어, 재사용가능한 코드를 사용하기",
    "검색 기능과 필터링 기능을 활용하기",
    "회원가입을 위한 유효성 검사를 진행하기",
  ],
  tools: [
    {
      title: "React",
      detail:
        "React 라이브러리를 사용하여 컴포넌트 기반의 웹 애플리케이션을 개발하였으며, React Router를 활용하여 클라이언트 측 라우팅을 구현하였습니다",
    },
    {
      title: "JavaScript",
      detail:
        "JavaScript를 사용하여 웹 애플리케이션의 동적 기능을 구현하고, 다양한 상호작용을 가능하게 하였습니다.",
    },
    {
      title: "Redux Toolkit",
      detail:
        "Redux Toolkit을 사용하여 애플리케이션의 상태 관리를 효율적으로 수행하고, 코드의 간결성과 유지보수성을 향상시켰습니다.",
    },
    {
      title: "CSS",
      detail:
        "CSS를 활용하여 각 요소에 일관된 스타일링을 적용하여 사용자 경험을 향상시키고, 디자인의 일관성을 유지했습니다.",
    },
    {
      title: "FontAwesome",
      detail:
        "FontAwesome을 사용하여 아이콘을 손쉽게 추가하고, 웹 애플리케이션의 시각적 요소를 강화하였습니다.",
    },
  ],
  role: [
    {
      title:
        "Swiper 슬라이드로 나열된 프로그램에 사용자가 마우스를 올리면 해당 프로그램의 상세 정보 창 구현",
      detailList: [
        `사용자가 \`Swiper\` 슬라이드에서 프로그램에 마우스를 올리면 해당 프로그램의 상세 정보 창이 나타나도록 구현하였습니다.`,
        `이를 통해 사용자 경험이 향상되었으며, 상세 정보 창은 애니메이션 효과를 적용하여 부드럽게 표시되고, 마우스가 아이템에서 벗어나면 사라지도록 처리하여 자연스러운 인터페이스를 제공하였습니다.`,
      ],
    },
    {
      title: "정보 창 클릭 시 Modal 컴포넌트로 상세 정보 표시",
      detailList: [
        `정보 창을 클릭하면 \`Modal\` 컴포넌트가 나타나며, 해당 프로그램의 상세 정보 및 등장인물, 스틸컷이 표시되도록 구현하였습니다.`,
        `이를 통해 사용자에게 필요한 정보를 쉽게 제공하며, useModal 커스텀 훅을 생성하여 모달 관련 로직을 한 곳에 모아 코드의 일관성과 가독성을 높이고 유지보수가 용이하도록 처리하였습니다.`,
      ],
    },
    {
      title:
        "Redux Toolkit을 사용하여 item 슬라이스 생성 및 마우스 이벤트 상태 관리",
      detailList: [
        `Redux Toolkit을 사용하여 \`item\`이라는 이름의 Redux 슬라이스를 생성하고, 마우스 이벤트에 따라 상태를 업데이트하는 기능을 구현하였습니다. \`itemOver\`와 \`itemOut\` 액션을 통해 각각 아이템에 마우스 오버 및 아웃 이벤트를 처리하며, 초기 상태는 \`initialStateValue\`로 설정하였습니다. 이를 통해 상태 관리를 간편하게 하고, 코드의 유지보수성을 향상시켰습니다.`,
      ],
    },
    {
      title: "Swiper 슬라이드를 공통 컴포넌트로 분리하여 재활용성 증가",
      detailList: [
        `\`Swiper\` 슬라이드를 자주 사용하는 부분을 공통 컴포넌트로 분리함으로써 컴포넌트의 재활용성을 증가시켰습니다.`,
        `인기 작품은 랭킹에 따라 정렬되어 상위 10개의 작품을 스와이퍼 형식으로 표시되도록 구현하여, 사용자에게 인기 있는 작품을 효과적으로 제공합니다.`,
        `이를 통해 코드의 중복을 줄이고 유지보수성을 높였습니다.`,
      ],
    },
    {
      title: "추천 TV 프로그램 필터링 및 랜덤 선택",
      detailList: [
        `추천 TV 프로그램에서는 에피소드 회차수가 미공개이거나 1화인 프로그램을 제외한 필터링 데이터를 적용하였으며, 이 중에서 랜덤으로 선택된 프로그램이 표시되도록 하였습니다.`,
        `인기 태그 작품 영역에서는 사용자가 태그 버튼을 클릭하면 해당 태그에 맞는 프로그램 목록으로 필터링되어 표시되도록 구현하였습니다. 이를 통해 사용자에게 더 맞춤화된 추천을 제공할 수 있습니다.`,
      ],
    },
    {
      title: "회원가입 폼 유효성 검사 및 디바운싱 기능 구현",
      detailList: [
        `회원가입 폼 렌더링, 이메일 형식 및 비밀번호 유효성 검사, 에러 메시지 표시, 비밀번호 가시성 토글, 폼 제출 처리, 로컬 스토리지 업데이트 등의 기능을 구현하였습니다.`,
        `이메일 검증 성능 향상을 위해 디바운싱을 사용하여 불필요한 호출을 방지하였습니다.`,
        `이를 통해 사용자 입력 처리 속도가 개선되었으며, 회원가입 유효성 검사 진행 시 특정 작업이 여러 번 호출되는 것을 방지하기 위해 \`debounce\` 함수를 사용하여 최적화하였습니다.`,
      ],
    },
    {
      title: "Github Pages를 활용한 CI/CD 배포 자동화",
      detailList: [
        `Github Pages를 사용하여 프로젝트의 \`CI/CD\` 배포를 자동화합니다.`,
        `이를 통해 배포 과정을 간소화하고, 코드를 푸시할 때마다 자동으로 최신 버전이 배포되어 일관성을 유지할 수 있습니다.`,
      ],
    },
  ],
};
