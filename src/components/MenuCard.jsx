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
    <div className="flex justify-center py-2 ">
      <Card key={id} className="flex flex-col h-full bg-[#dfc6aa]">
        <CardContent className=" flex flex-col justify-between">
          <div className="md:flex md:flex-col md:justify-center">
            <div className=" md:flex md:justify-center mb-4 fl justify-center">
              <Link to={`/menu/${slug}`}>
                <img
                  src={img}
                  alt={title}
                  className="h-50 w-40 object-cover rounded-lg md:round-3xl md:h-95 md:w-80 hover:scale-105 transition-transform duration-300"
                />
              </Link>{" "}
            </div>
            <div className="text-2xl flex flex-col flex-grow md:flex md:justify-start md:h-30 md:space-y-2 ">
              <div className="font-bold text-xl hover:underline cursor-pointer">
                <Link to={`/menu/${slug}`}>{title}</Link>
              </div>
              <div className="text-sm text-[#3F3C38] flex-grow">
                {description}
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-[#3F3C38]">{price}</span>{" "}
              <AddIconButton
                onClick={() => toast.success(`Added ${title} to basket`)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
