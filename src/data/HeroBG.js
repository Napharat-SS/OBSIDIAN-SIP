import bean1 from "../assets/Heroimg/bean1.png";
import bg11 from "../assets/Heroimg/bg11.jpg";
import bg2 from "../assets/Heroimg/bg2.jpg";
import bg3 from "../assets/Heroimg/bg3.jpg";
import bg4 from "../assets/Heroimg/bg4.jpg";
import hotlatte from "../assets/Heroimg/hotlatte.png";
import icelatte from "../assets/Heroimg/icelatte.png";
import pancake from "../assets/Heroimg/pancake.png";
export const HeroList = [
  {
    id: 1,
    image: icelatte,
    sizeImg: "w-25 h-25 xl:h-35 ",
    sizeimgr:
      "w-2xs md:w-5xl md:mb-30 xl:h-[600px] xl:ml-20 xl:mb-0 2xl:h-[700px]",
    title: "ICE LATTE",
    titlecolor: "text-gray-300",
    description: "เย็นสดชื่น กลิ่นหอมกรุ่น ผสานรสเข้มของกาแฟอย่างลงตัว",
    desccolor: "text-gray-300",
    price: "130฿",
    modal: "ICE LATTE",
    sizemodal: "text-[250px] text-white/10",
    bgimg: bg11,
  },
  {
    id: 2,
    image: hotlatte,
    sizeImg: "w-25 h-25 lg:h-35 ",
    sizeimgr: "w-2xs md:w-3xl md:mb-50 xl:w-[1700px] xl:h-[500px] xl:ml-20",
    title: "HOT LATTE",
    titlecolor: "text-stone-900",
    description: "รสเนียนนุ่ม อบอุ่น หอมหวานติดปลายลิ้น นุ่มนวลละมุนใจในทุกจิบ",
    desccolor: "text-stone-900",
    price: "130฿",
    modal: "HOT LATTE",
    sizemodal: "text-[250px] text-white/15",
    bgimg: bg2,
  },
  {
    id: 3,
    image: pancake,
    sizeImg: "w-40 h-20 md:h-25",
    sizeimgr: "w-55 md:w-2xl md:mb-50 xl:w-xl xl:ml-30",
    title: "PANCAKE",
    titlecolor: "text-white",
    description: "ฟูนุ่มละลาย หวานน้ำผึ้งเดือนห้า พร้อมกลิ่นหอมยั่วใจ",
    desccolor: "text-gray-300",
    price: "120฿",
    modal: "PANCAKE",
    sizemodal: "text-[160px] text-white/10",
    bgimg: bg3,
  },
  {
    id: 4,
    image: bean1,
    sizeImg: "w-20 h-30 lg:h-35",
    sizeimgr:
      "w-30 md:h-xl md:w-55 md:mb-45 xl:w-[300px] xl:h-[600px] xl:ml-30",
    title: "SIGNATURE HOUSE BLEND",
    titlecolor: "text-yellow-500",
    description:
      "คัดสรรเมล็ดกาแฟจากแหล่งปลูกที่ดีที่สุด ด้วยมือและหัวใจ เพื่อให้คุณมั่นใจในทุกแก้วที่ดื่ม",
    desccolor: "text-white",
    price: "250฿",
    modal: "SIGNATURE HOUSE BLEND",
    sizemodal: "text-[120px] text-white/10",
    bgimg: bg4,
  },
];
