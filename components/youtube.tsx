import { cn } from "@/lib/utils";

export default function Youtube({ id }: { id: string }) {
  return (
    <div>
      <iframe
        className={cn("aspect-video w-full")}
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}
