import SocialIcons from "@/lib/socialIcons";

export default function Footer() {
  return (
    <div className="max-w-3xl w-full flex mx-auto p-4 items-center justify-between border-t-2">
      <div className="flex text-sm sm:text-base">© 2024 EG.</div>
      <div className="flex gap-4">
        <SocialIcons />
      </div>
    </div>
  );
}
