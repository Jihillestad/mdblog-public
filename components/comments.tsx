"use client";

import Giscus from "@giscus/react";

interface CommentProps {
  repo: `${string}/${string}`;
  repoId: string;
  category: string;
  categoryId: string;
}

const Comments = ({ repo, repoId, category, categoryId }: CommentProps) => {
  return (
    <Giscus
      repo={repo}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
};

export default Comments;
