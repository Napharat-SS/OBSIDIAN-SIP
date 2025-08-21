import { Lens } from "@/components/magicui/lens";
import Footer from "../components/landingpage/Footer";
import bgImage from "../assets/background.png";

const Aboutus = () => {
  return (
    <>
    <div
          className=" absolute bg-left bg-[length:1800px_1800px] text-white font-kanit "
          style={{ backgroundImage: `url(${bgImage})` }} 
        >
          <div className="absolute inset-0 bg-white/50"></div>

    <div className="relative m-4 md:m-10 ">
            <div className="flex-col md:flex-row lg:flex ">

              <div className="flex-1">
                <div className="text-justify bg-black opacity-60 p-8 mb-3 shadow-md rounded-2xl mt-3 ">
                  <h1 className="text-3xl text-center pb-5">About us</h1>
                  <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;ObsidianSip ร้าน Coffee
                  และ Bakery ที่ใส่ใจในทุกรายละเอียด
                  ตั้งแต่การคัดสรรเมล็ดพันธุ์ชั้นเลิศ
                  จากแหล่งปลูกธรรมชาติอันอุดมสมบูรณ์
                  ไปจนถึงกระบวนการคั่วที่พิถีพิถันเพื่อดึงรสชาติ และ กลิ่นหอมอันเป็นเอกลักษณ์ออกมาอย่างเต็มที่
                  คุณจะได้สัมผัสรสชาติกาแฟที่หอม เข้ม กลมกล่อม คู่กับขนมอบ ตามแบบฉบับ Homemade ที่อบอวลด้วยความรักและความพิถีพิถันในทุกขั้นตอน ไม่ว่าจะเป็น ครัวซองต์หอมกรุ่น เค้กนุ่มละมุน หรือขนมหวาน Homemade ที่เหมาะกับทุกโอกาส
                  </p>
                  <p className="pt-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ที่นี่…ไม่ได้เป็นเพียงแค่ร้านกาแฟ
                  แต่เป็นสถานที่ที่คุณจะได้สัมผัสกับบรรยากาศอบอุ่นเป็นกันเองพร้อมจิบกาแฟแก้วโปรดที่เราตั้งใจปรุงอย่างดีที่สุด เพื่อให้ทุกแก้วของคุณ เต็มไปด้วยรสชาติที่ลงตัว และความสุขที่แท้จริงของการดื่มกาแฟ
                  </p>
                </div>
              </div>

              <div className="relative flex-col sm:flex md:flex-row lg:flex ml-5 mr-3">
                <div className=" w-90 md:w-80  ">
                  <Lens>
                    <img
                      className="rounded-xl md:rounded-none"
                      src="./coffeebeanQ.png"
                      alt="coffeebean"
                    />
                  </Lens>
                </div>
                <div className="w-90 md:w-70 mt-3 md:mt-7 lg:-ml-10 xl:-ml-10  ">
                  <Lens>
                    <img className="rounded-xl md:rounded-none" src="./hot-caramelmacchiato.jpg" alt="macchiato" />
                  </Lens>
                </div>

              </div>
            </div>

            <div className=" flex-col md:flex-row md:-mt-2 lg:flex mr-3 ">
             
                <iframe
                  className=" flex-1 shadow-md mb-5 mt-4 w-90 md:w-full ml-5 rounded-2xl md:rounded-none"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.8661951535278!2d100.30329997453393!3d5.437283534833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac3021138a0df%3A0x2c430116c867a459!2sObsidian!5e0!3m2!1sen!2sth!4v1755622478639!5m2!1sen!2sth"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              
              <div className="flex-1 ml-5 mt-3 md:mt-7 md:w-full">
                <div className=" bg-black opacity-60 rounded-2xl p-8  text-center ">
                  <p className="text-2xl ">Our location</p>
                  <p className=" pb-3 italic">
                    <span className="text-3xl">"&nbsp;</span>เพราะเราเชื่อว่า...{" "}
                  </p>
                  <p className=" pb-3 italic">
                    กาแฟที่ดี เริ่มต้นจากเมล็ดพันธุ์ที่ดี
                  </p>
                  <p className="pb-3 italic">
                    และหน้าที่ของเราคือการส่งต่อความตั้งใจนั้นสู่ทุกแก้วที่เสิร์ฟให้คุณ
                    <span className="text-3xl">&nbsp;"</span>
                  </p>
                </div>
              </div>

            </div>
          </div>

          <span className="relative">
          <Footer />
          </span>
       </div>
      
    </>
  );
};

export default Aboutus;
