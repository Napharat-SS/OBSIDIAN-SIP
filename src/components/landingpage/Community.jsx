import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "ChefPom",
    username: "@Pom",
    body: "I ordered a latte and a croissant, but honestly, I think I found true love instead. The coffee hugged my soul, and the pastry whispered sweet compliments. If this isn’t happiness, I don’t know what is.",
    img: "/public/Homeimg/chefpom.png",
  },
  {
    name: "Dr.Pong",
    username: "@pong",
    body: "The beans smell so good, my neighbor knocked on my door just to ask if I was baking happiness. Spoiler: it was just coffee brewing. Best mistake of my life, and yes, I’ll gladly make it again.",
    img: "/public/Homeimg/drpong.png",
  },
  {
    name: "John",
    username: "@john",
    body: "This espresso hit harder than my morning alarm clock—but in the best way. I felt both awake and slightly judged by the crema for not discovering it earlier. Perfectly balanced, like coffee Thanos.",
    img: "/public/Homeimg/john.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Bought a cinnamon roll and it vanished in 2 minutes. Pretty sure it teleported directly into my stomach without my consent. Soft, sweet, and dangerously good. 10/10 would let it disappear again.",
    img: "/public/Homeimg/jane.png",
  },
  {
    name: "DevKan",
    username: "@Kan",
    body: "The cappuccino was so smooth I think it could solve world peace if we gave it a chance. Frothy, warm, and with the kind of charm you only find in rom-coms.",
    img: "/public/Homeimg/devkan.png",
  },
  {
    name: "JohnDoe",
    username: "@johndoe",
    body: "Warning: the chocolate muffin is a trap. You’ll promise yourself “just one bite” and suddenly you’re staring at an empty plate, wondering if your fork betrayed you. Delicious crime scene, zero regrets.",
    img: "/public/Homeimg/john.png",
  },
  {
    name: "Ploy",
    username: "@ploysai",
    body: "The latte is unbelievably smooth. Croissant is crispy with real butter layers!",
    img: "/public/Homeimg/jane.png",
  },
  {
    name: "Nubwo",
    username: "@nubwo",
    body: "These coffee beans smell so heavenly I considered wearing them as perfume. Don’t worry, I didn’t. But now my kitchen smells like happiness, and my mornings actually make sense.",
    img: "/public/Homeimg/john.png",
  },
  {
    name: "Tas",
    username: "@taster",
    body: "The raspberry tart here is dangerous. You think you’re strong enough to share it, but spoiler: you’re not. One slice later, you’ll be plotting your next visit like it’s a secret mission.",
    img: "/public/Homeimg/john.png",
  },
  {
    name: "Jisu",
    username: "@jisu",
    body: "Drank their latte while eating banana bread and suddenly felt like I was in a cozy movie montage. If this café isn’t charging rent for the vibes, they really should.",
    img: "/public/Homeimg/jane.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCardItem = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-96 cursor-pointer overflow-hidden rounded-xl p-4 border",
        // light styles
        "border-gray-500 bg-gray-950 hover:bg-gray-800"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
    </figure>
  );
};

export function Community() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pb-20  md:pt-10 bg-[#000000]">
      <div className="text-white pb-5">
        <h3 className="text-3xl font-bold md:text-5xl font-bold mb-2 font-inconsolata text-center">
          Loved by Our Community
        </h3>
        <p className="text-lg md:text-2xl text-gray-300 font-kanit text-center">
          Real voices from coffee lovers and pastry fans.
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:35s]">
        {firstRow.map((review) => (
          <ReviewCardItem key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:35s]">
        {secondRow.map((review) => (
          <ReviewCardItem key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0  "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 "></div>
    </div>
  );
}
