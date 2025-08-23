import bgImage from "../assets/background.png";
import { FaTrash } from "react-icons/fa6";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { coldCoffeeList } from "../data/ColdCoffee";



const Addtocart = () => {

   const products = [...coldCoffeeList]

  return (
  <div className="relative">
    <div
        className="min-h-screen w-full bg-left bg-[length:1800px_1800px] flex justify-center items-center font-kanit"
        style={{ backgroundImage: `url(${bgImage})` }} >
          <div className="absolute inset-0 bg-orange-300/50"></div>

            <div className="relative">
          <div className="bg-white rounded-2xl p-7 ">
            <div className="flex max-sm:flex-col sm:flex-col md:flex-row lg:flex-row">
              <div className="mr-3 mb-3 flex-1">
                <p className="font-bold">&lt; Shopping Continue</p>
                <hr className="border-[#C18343] pt-5" />
                <p className="">shopping cart</p>
                <p className="font-sm pb-5">You have {4} items in your basket</p>

                
                  {products.slice(0, 4).map((item)=> (
                      <div key={item.id} className="flex bg-[#f6d794] rounded-2xl p-3 mb-2  ">
                  <div className="flex">
                    
                    <img
                      className="w-12 h-12 mr-2  rounded-xl "
                      src={item.img}
                      alt="iced-flatwhite"
                    />
                <div className=" max-sm:w-30 sm:w-30 md:w-70 pt-3 mr-3">{item.title}</div>
                <div className="mx-4 pt-3">{1}

                </div>
                <div className="flex flex-col pt-2">
                      <button className="text-[#C18343] hover:text-amber-900 transition-colors duration-200 ">
                        <AiFillCaretUp />
                      </button>
                      <button className="text-[#C18343] hover:text-amber-900 transition-colors duration-200">
                        <AiFillCaretDown />
                      </button>
                    </div>
                  <div className="mr-3 ml-10 pt-3">{item.price}</div>
                  
                  <button
                    className="text-[#C18343] hover:text-amber-900 transition-colors duration-200"
                    aria-label="ลบสินค้า"
                  >
                    <FaTrash size={20} />
                  </button>
               
                
                </div>
              </div>
))}

                  </div>

              

              <div className="bg-[#f6d794] rounded-3xl  p-5  mr-3 flex-1 mb-5 mt-4 ">
                <p className="text-center font-bold pt-5 pb-4">Summary</p>
                <hr className="border-[#C18343] py-3" />
                <div className="flex justify-between">

                
                  <p>Subtotal</p>
                  <p>THB300</p>
                </div>
                
                <div className="flex justify-between">
                  <p className="pb-4 ">Total (Tax incl.)</p>
                  <p>THB300</p>
                </div>
                <div className="bg-[#C18343] text-white text-center rounded-xl p-2  hover:bg-amber-900 transition duration-700 ease-in-out">
                  <button type="submit">Check out</button>
                </div>
              </div>


            </div>
          </div>
        </div>


    </div>
  </div>
    
  );
};

export default Addtocart;
