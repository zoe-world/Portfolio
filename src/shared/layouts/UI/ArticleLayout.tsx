import React, { FC } from "react";
import { ArticleType } from "shared/typings/types";
import { project1 } from "../model/projectDetail/project1";
import useScrollPinAnimation from "shared/hooks/useScrollAnimation";

const ArticleLayout: FC<ArticleType> = ({ content, id }) => {
  return (
    <section id={`${id}`} className={`${id}__wrap page`}>
      {content}
    </section>
  );
};

export default ArticleLayout;
