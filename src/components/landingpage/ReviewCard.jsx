import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import chefpom from "../../assets/Homeimg/chefpom.png";
import devkan from "../../assets/Homeimg/devkan.png";
import drpong from "../../assets/Homeimg/drpong.png";
import jane from "../../assets/Homeimg/jane.png";
import john from "../../assets/Homeimg/john.png";
import policepraya from "../../assets/Homeimg/policepraya.png";

const reviews = [
  {
    name: "ChefPom",
    username: "@Pom",
    body: "กาแฟกับเบเกอรี่ร้านนี้ รสชาติดีจนไม่กล้าแกะสูตร",
    img: chefpom,
  },
  {
    name: "Dr.Pong",
    username: "@pong",
    body: "กาแฟร้านนี้คือยาที่ไม่ต้องจ่ายใบสั่ง…แต่เสพติดแน่นอน",
    img: drpong,
  },
  {
    name: "John",
    username: "@john",
    body: "ดื่มกาแฟแก้วเดียว รู้สึกเหมือนตื่นขึ้น…แต่จริง ๆ ก็ยังง่วงอยู่",
    img: john,
  },
  {
    name: "Jane",
    username: "@jane",
    body: "กาแฟดี เบเกอรี่อร่อย ตัวเด็ดคือ ตะโก้ แนะนำเลยอันนี้",
    img: jane,
  },
  {
    name: "DevKan",
    username: "@Kan",
    body: "ยังไม่ได้ชิมเลย อร่อยมากครับ ยัง!!",
    img: devkan,
  },
  {
    name: "POLICE.Praya",
    username: "@praya",
    body: "กาแฟเข้ม เบเกอรี่นุ่ม…จับใจยิ่งกว่าจับผู้ร้าย",
    img: policepraya,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCardItem = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function ReviewCard() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-15 bg-[#f6f5f3]">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCardItem key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCardItem key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
