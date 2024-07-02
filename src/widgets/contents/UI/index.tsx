import React, { useEffect, useMemo, useRef } from "react";
import Projects from "./project";
import Information from "./information";
import Education from "./education";
import ArticleLayout from "shared/layouts/UI/ArticleLayout";
import { menuData } from "shared/layouts/model/menuData";
import ShowReel from "./showreel/ShowReel";
import useScrollPinAnimation from "shared/hooks/useScrollAnimation";
import { project1 } from "shared/layouts/model/projectDetail/project1";

const Contents = () => {
  const menu = menuData;
  const showReelRef = useRef<HTMLDivElement>(null);

  const sectionsRefs = useMemo(
    () => menu.map(() => React.createRef<HTMLDivElement>()),
    [menu]
  );
  const getComponent = (type: string): React.ReactNode => {
    switch (type) {
      case "projects":
        return <Projects />;
      case "information":
        return <Information />;
      case "education":
        return <Education />;
      default:
        return null;
    }
  };
  useScrollPinAnimation(
    [
      { ref: showReelRef, anchor: "" },
      ...sectionsRefs.map((ref, i) => ({
        ref,
        anchor: `#${menu[i]}`,
      })),
    ],
    "top top",
    "bottom top",
    "30px"
  );

  return (
    <main id="content" role="main">
      <div ref={showReelRef}>
        <ShowReel />
      </div>
      {menu.map((v, index) => {
        return (
          <div key={index} ref={sectionsRefs[index]}>
            <ArticleLayout key={index} content={getComponent(v)} id={v} />
          </div>
        );
      })}
    </main>
  );
};

export default Contents;
