import bgImage from "../assets/background.png";
import cheesecake from "../assets/cheesecake.png";

import morning from "../assets/morning.png";



const Aboutus = () => {
  return (
     <div className="relative">
        <div className=" absolute h-screen w-full bg-left bg-[length:1800px_1800px] " style={{ backgroundImage: `url(${bgImage})` }} >
          <div className="absolute inset-0 bg-white/50" ></div>
          <div className=" relative flex m-10 md:flex-row">
          <div className="flex-1 bg-white p-15 rounded-full">
          <h1 className="text-3xl text-center mb-5">About us</h1>
          <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium harum iste doloremque at quasi quisquam quod eaque? Itaque repellendus error sit quis soluta voluptatem ea, sed aliquid! Consectetur temporibus nulla non, debitis voluptatem veritatis obcaecati, minima provident aut eligendi iusto dignissimos nisi dicta voluptates maxime. Iusto voluptatum nostrum alias!</p>
          </div>

          <div className=" flex-1 ">
            <div className="flex">
          <div className="relative bg-white w-100 h-100 rounded-b-full rounded-tr-full border-white border-10 -mb-10 ml-5">< img className="rounded-b-full rounded-tr-full" src={cheesecake} alt="stawberycheesecake" /></div>
          <div className=" bg-white w-70 h-70 rounded-b-full rounded-tl-full border-white border-10 -ml-30 mt-25">< img className="rounded-b-full rounded-tl-full" src={morning} alt="morning" /></div>
          </div>
         
          
          </div>
        </div>

    

        </div>
     </div>
  )
}

export default Aboutus
