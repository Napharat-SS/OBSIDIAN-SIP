import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import AddIconButton from "./ui/addicon";

export const MenuCard = ({ id, title, description, price, img }) => {
  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  const slug = slugify(title);
  return (
    <div className="flex justify-center py-2">
      <Card
        key={id}
        className="flex flex-col h-full w-full mx-6 md:mx-0 bg-[#dfc6aa]"
      >
        <CardContent className=" flex flex-col justify-between">
          <div className=" flex md:flex md:flex-col md:justify-center">
            <div className="flex-shrink-0 m-2 md:m-0 md:flex md:justify-center mb-4 fl justify-center">
              <Link to={`/menu/${slug}`}>
                <img
                  src={img}
                  alt={title}
                  className="h-70 w-50 object-cover rounded-lg md:round-3xl md:h-80 md:w-75 hover:scale-105 transition-transform duration-300"
                />
              </Link>{" "}
            </div>
            <div className="p-4 md:p-0 text-2xl flex flex-col flex-grow md:flex md:justify-start md:h-30 md:space-y-2 ">
              <div className="font-bold text-xl py-2 md:pt-2 hover:underline cursor-pointer">
                <Link to={`/menu/${slug}`}>{title}</Link>
              </div>
              <div className="md:hidden text-sm text-[#3F3C38] flex-grow">
                {description}
              </div>
              <div className="flex justify-between items-center mt-4 mb:mt-0">
                <span className="text-[#3F3C38]">{price}</span>{" "}
                <AddIconButton
                  onClick={() => toast.success(`Added ${title} to basket`)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
