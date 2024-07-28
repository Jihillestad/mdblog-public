import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

//SEO
export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>JIH</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Senior Consultant
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          consequatur laudantium eaque fugiat, unde debitis, assumenda corporis
          animi beatae non neque quibusdam porro tenetur, laboriosam in ducimus
          ut amet voluptate commodi praesentium ex. Error iusto sed in hic quod,
          quasi numquam libero dicta modi adipisci, obcaecati aut beatae
          asperiores non excepturi facere magni suscipit facilis aliquid?
          Dolorum, fuga facere sapiente autem dolor blanditiis nam, placeat,
          provident ratione sequi commodi corporis! Saepe eos consequatur nulla
          minima earum sunt pariatur perspiciatis iusto tempore est dolor quam
          maiores alias cum aspernatur impedit at obcaecati esse ad quas error
          ducimus, minus dicta totam? Aut?
        </p>
      </div>
    </div>
  );
}
