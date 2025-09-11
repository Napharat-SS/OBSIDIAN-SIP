
import { FaTrash } from "react-icons/fa6";
import { MenuItem } from "../data/MenuData";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useState } from "react";




const Addtocart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleMinusQuantity = () => {
    setQuantity(quantity -1 < 1 ? 1 : quantity -1)
  }

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1)
  }

return (
        <div className="bg-gradient-to-t from-black via-[#504f4f] to-[#070707] min-h-screen flex justify-center items-center text-white">
          
          <div className="bg-[#0a0a0a] rounded-3xl p-10 border-1 m-5 ">
            <div className="flex max-sm:flex-col sm:flex-col md:flex-row lg:flex-row">
              <div className="mr-5 mb-3 flex-1">
                <div>
                  
                </div>
                <div className="font-bold flex pb-3">
                  <IoChevronBackCircleOutline className="w-6 h-6"/>
                  &nbsp;&nbsp;Shopping Continue
                  </div>
                <hr className="border-[#92908d] pt-5" />
                <p className="">shopping cart</p>
                <p className="pb-5">You have {4} items in your basket</p>

                
                  {MenuItem.slice(0, 4).map((item)=> (
                      <div key={item.id} className="flex bg-[#615d58] rounded-2xl p-3 mb-5  ">
                  <div className="flex justify-between items-center gap-5 w-110">
                    <img src={item.img} className="w-15 h-15 rounded-2xl" />
                    <h3 className="w-80">{item.name}</h3>
                    <div className="w-30 flex justify-between gap-4">
                      <button className="bg-[#c58c4ce6] text-black hover:bg-[#5c3202e6] hover:text-white transition text-center duration-700 ease-in-out w-6 h-6" onClick={handleMinusQuantity}>-</button>
                      <span>{quantity}</span>
                      <button className="bg-[#c58c4ce6] text-black hover:bg-[#5c3202e6] hover:text-white transition text-center duration-700 ease-in-out w-6 h-6" onClick={handlePlusQuantity}>+</button>
                    </div>
                    <p className="w-20">{item.price}</p>
                    <button className="text-[#C18343] hover:text-amber-900 transition-colors duration-200"
                    aria-label="ลบสินค้า">
                    <FaTrash size={20} /></button>

                </div>
              </div>
))}

                  </div>


              <div className="bg-[#615d58] rounded-3xl  p-10  mr-3 flex-1 mb-5 mt-4 w-120">
              
                <p className="text-center font-bold pt-5 pb-4">Summary</p>
                <hr className="border-[#0a0a0a] py-3" />
                <div className="flex justify-between ">
                  <p>Subtotal</p>
                  <p>THB300</p>
                </div>
                <div className="flex justify-between gap-10">
                  <p className="pb-4 ">Total (Tax incl.)</p>
                  <p>THB300</p>
                </div>
                <div className="bg-[#c58c4ce6] text-black py-2 rounded-xl hover:bg-[#5c3202e6] hover:text-white transition text-center duration-700 ease-in-out">
                  <button type="submit">Check out</button>
                </div>
              </div>


            </div>
          </div>
        

    </div>
 
    
  );
};

export default Addtocart;
