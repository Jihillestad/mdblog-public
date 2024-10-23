import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Tag } from "@/components/tag";
import Comments from "@/components/comments";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

// SEO
export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 634,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  const repo = "jihillestad/mdblog-public";
  const repoId = process.env.NEXT_PUBLIC_COMMENTS_REPO_ID || "";
  const category = process.env.NEXT_PUBLIC_COMMENTS_CATEGORY || "";
  const categoryId = process.env.NEXT_PUBLIC_COMMENTS_CATEGORY_ID || "";

  if (!post || !post.published) {
    notFound();
  }

  // if (!repo || !repoId || !category || !categoryId) {
  //   console.error(
  //     "Missing required environment variables for Comments component.",
  //   );
  //   return <p>Comments are unavailable at the moment.</p>;
  // }

  return (
    <>
      <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
        <h1 className="mb 2">{post.title}</h1>
        <div className="flex gap-2 mb-2">
          {post.tags?.map((tag) => <Tag tag={tag} key={tag} />)}
        </div>
        {post.description ? (
          <p className="text-xl mt-0 text-muted-foreground">
            {post.description}
          </p>
        ) : null}
        <hr className="my-4" />
        <MDXContent code={post.body} />
      </article>
      <div className="container py-6 max-w-3xl mx-auto">
        <Comments
          repo={repo}
          repoId={repoId}
          category={category}
          categoryId={categoryId}
        />
      </div>
    </>
  );
}
