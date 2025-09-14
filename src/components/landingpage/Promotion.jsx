import { useNavigate } from "react-router-dom";

export const Promotion = () => {
  const navigate = useNavigate();
  const goToMorningDuo = () => {
    navigate("/menu/morning-duo");
  };
  const goToMenu = () => {
    navigate("/menu");
  };
  return (
    <section className="max-w-[1440px] mx-auto px-4 py-6 md:px-8 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* กล่องซ้าย */}
        <div className="relative rounded-4xl p-5 mx-10 md:p-5 md:mx-0 gap-4 md:gap-10 flex items-center justify-between border">
          <img
            src="/public/promotion.png"
            alt="combo"
            className="flex-1 max-w-[120px] md:max-w-[220px] lg:max-w-[260px] object-contain"
          />
          <div className="flex-1 space-y-2 md:space-y-3 text-white">
            <h3 className="text-base md:text-2xl font-semibold leading-snug">
              Special Treat
              <br />
              Croissant + Latte only ฿115
            </h3>
            <p className="text-xs md:text-base">
              a duo that’s always perfect together
            </p>
            <button
              href="/menus"
              className="group inline-flex items-center gap-2 bg-[#c58c4ce6] text-black font-bold px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-[#ddb07ee6] transition-all duration-200 text-xs md:text-base"
              onClick={goToMorningDuo}
            >
              <span>Get Yours Day</span>
            </button>
          </div>
        </div>
        {/* กล่องขวา */}
        <div className="relative rounded-4xl p-5 mx-10 md:p-5 md:mx-0 gap-4 md:gap-10 flex items-center justify-between border">
          <img
            src="/promotion2.png"
            alt="beans"
            className="flex-1 max-w-[120px] md:max-w-[220px] lg:max-w-[260px] object-contain"
          />
          <div className="flex-1 space-y-2 md:space-y-3 text-white">
            <h3 className="text-base md:text-2xl font-semibold leading-snug">
              Freshly brewed coffee
              <br />
              to start your morning
            </h3>
            <p className="text-xs md:text-base">
              Enjoy our special blends made daily just for you
            </p>
            <button
              href="/menus"
              className="group inline-flex items-center gap-2 bg-[#c58c4ce6] text-black font-bold px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-[#ddb07ee6] transition-all duration-200 text-xs md:text-base"
              onClick={goToMenu}
            >
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
