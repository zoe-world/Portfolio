import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import React, { useEffect } from "react";
import GridLayout from "shared/layouts/UI/GridLayout";
import { menuData } from "shared/layouts/model/menuData";

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const menu = menuData;

  useEffect(() => {
    const links: HTMLAnchorElement[] = gsap.utils.toArray(".nav__list li a");

    links.forEach((link) => {
      const element = document.querySelector(
        link.getAttribute("href")!
      ) as HTMLElement;
      // ScrollTrigger를 사용하여 섹션의 시작을 감지
      const linkST = ScrollTrigger.create({
        trigger: element,
        start: "top top",
      });

      // 섹션이 뷰포트 중앙에 있을 때 활성 상태로 설정
      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => setActive(link, self.isActive),
      });

      // 네비게이션 링크 클릭 시 스크롤 애니메이션
      link.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(window, {
          duration: 1,
          scrollTo: linkST.start,
          overwrite: "auto",
        });
      });
    });

    // 링크에 active 클래스를 추가/제거하는 함수
    function setActive(link: HTMLAnchorElement, isActive: boolean) {
      links.forEach((el) => el.classList.remove("active"));
      if (isActive) link.classList.add("active");
    }
  }, [menu]);

  return (
    <header role="navigation">
      <GridLayout>
        <nav>
          <h1 className="logo">ZOE_</h1>
          <ul className="nav__list">
            {menu.map((v, index) => (
              <li key={index}>
                <a href={`#${v}`}>{v.toUpperCase()}</a>
              </li>
            ))}
          </ul>
        </nav>
      </GridLayout>
    </header>
  );
};

export default Header;
