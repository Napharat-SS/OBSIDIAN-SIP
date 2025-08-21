import { Form, useNavigate } from "react-router-dom"

export const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[url('/bg_contact2.jpg')] bg-cover bg-center min-h-screen w-full flex items-center justify-center">
      <div className="bg-[#F8F6F2] mx-8 px-10 py-10 text-[#3F3C38] rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:grid-rows gap-6">
        <h1 className="flex justify-center text-5xl font-bold text-[#3F3C38] mb-3">
          Let's get in touch
        </h1>
        <div className="md:flex md:flex-row md:space-x-6 flex-col space-y-4">
          <div className="md:flex md:flex-rows md:w-2/5 flex justify-center">
            <div className="text-[#3F3C38]  space-y-4 gap-4 flex flex-col">
              <div className="flex gap-6 justify-between md:flex md:flex-col">
                <div className="flex flex-row md:flex items-center space-y-2 ">
                  <img src="./public/phone.png" className="h-12 w-8" />
                  <div className="ml-4">
                    <p className="font-bold">Phone</p>
                    <p>(012) 345 6789</p>
                  </div>
                </div>
                <div className="flex space-y-2 items-center">
                  <img src="./public/pin_address.png" className="h-9 w-8" />
                  <div className="ml-4">
                    <p className="font-bold">Address</p>
                    <p>10 JSD, Bangkok, Thailand</p>
                  </div>
                </div>
              </div>
              <div
                className="flex align-items:center space-x-7 md:flex md:flex-col md:space-y-6
              "
              >
                <div className="flex items-center space-y-2">
                  <img src="./public/ig.png" className="h-9 w-8" />
                  <div className="ml-4">
                    <p className="font-bold">Instagram</p>
                    <p>@obsidian_sip</p>
                  </div>
                </div>
                <div className="flex items-center space-y-2">
                  <img src="./public/fb.png" className="h-9 w-8" />
                  <div className="ml-4">
                    <p className="font-bold">Facebook</p>
                    <p>Obsidain Sip</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="flex items-center space-y-2">
                  <img src="./public/tt.png" className="h-9 w-8" />
                  <div className="ml-4">
                    <p className="font-bold">TikTok</p>
                    <p>@obsidian_sip</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Form className="flex-col pb-10 px-4 md:w-3/5 " method="post">
            <div>
              {/* <label className="font-semibold text-xl mb-5">Firstname</label> */}
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E] mb-1"
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Firstname"
                required
              />
              {/* <label className="font-semibold text-xl mb-5">Lastname</label> */}
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E] mb-1"
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Lastname"
                required
              />
              {/* <label className="font-semibold text-xl mb-5">Email</label> */}
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E] mb-1"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              {/* <label className="font-semibold text-xl mb-5">Message</label> */}
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E] mb-1"
                placeholder="Your Message"
                id="message"
                required
              ></textarea>
              <div className="flex justify-center gap-10">
                <button
                  type="button"
                  className="w-3/5 bg-[#A69C8E] text-white text-xl fontbold py-2 rounded hover:bg-[#716a60] transition-colors"
                  onClick={() => navigate("/login")}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-full bg-[#D4A475] hover:bg-yellow-600 text-white text-xl py-2 border-gray-300 rounded font-semibold transition"
                >
                  Submit
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}


