import { Card,  CardContent } from "@/components/ui/card";
import React from 'react'
import AddIconButton from "./ui/addicon";
import { toast } from "sonner";

export const MenuCard = ({ title, description, price, img }) => {
  return (
    <div>
      <Card>
        <CardContent>
          <div>
            <img src={img} alt={title} className="" />
            <div>
              <div>
                <div className="font-bold">{title}</div>
                <div className="text-sm text-gray-500">{description}</div>
                <div className="text-gray-500">{price}</div>
              </div>
              <div>
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

