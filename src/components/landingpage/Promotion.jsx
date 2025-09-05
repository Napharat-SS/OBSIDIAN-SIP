export const Promotion = () => {
  return (
    <section class="max-w-[1440px] mx-auto px-8  py-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* กล่องซ้าย */}
        <div class="relative rounded-4xl p-4 gap-10 flex items-center justify-between border">
          <img
            src="/public/promotion.png"
            alt="combo"
            class="flex-1 max-w-[220px] md:max-w-[260px] object-contain"
          />
          <div class="flex-1 space-y-3 text-white">
            <h3 class="text-2xl font-semibold leading-snug">
              Special Treat
              <br />
              Croissant + Latte only ฿115
            </h3>
            <p class="text-base">a duo that’s always perfect together</p>
            <a
              href="/menus"
              class="group  inline-flex items-center gap-2 bg-[#c58c4ce6] text-black font-bold px-6 py-3 rounded-full hover:bg-[#ddb07ee6]  transition-all duration-200"
            >
              <span>Get Yours Day</span>
            </a>
          </div>
        </div>
        <div class="relative rounded-4xl p-4 gap-10 flex items-center justify-between border">
          <img
            src="/public/promotion2.png"
            alt="beans"
            class="flex-1 max-w-[220px] md:max-w-[260px] object-contain"
          />
          <div class="flex-1 space-y-3 text-white">
            <h3 class="text-2xl font-semibold leading-snug">
              Freshly brewed coffee
              <br />
              to start your morning
            </h3>
            <p class="text-base">
              Enjoy our special blends made daily just for you
            </p>
            <a
              href="/menus"
              class="group  inline-flex items-center gap-2 bg-[#c58c4ce6] text-black font-bold px-6 py-3 rounded-full hover:bg-[#ddb07ee6]  transition-all duration-200"
            >
              <span>Order Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
