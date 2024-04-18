<template>
  <div>
    <header
      class="flex flex-row items-center justify-between py-[30px] px-[25px]"
    >
      <p class="text-[#212025] text-[20px] dark:text-[#F7F7F7]">
        Василий Петров
      </p>
      <div class="flex flex-row gap-[5px]">
        <UiMenuItem label="Lorem" color="#EAEAEA" />
        <UiMenuItem label="Ipsum" color="#EAEAEA" />
        <UiMenuItem label="Dolor sit" color="#EAEAEA" />
        <UiMenuItem label="Amet" color="#EAEAEA" />
        <UiMenuItem label="Commodo" color="#EAEAEA" />
      </div>
      <div class="flex flex-row items-center gap-3">
        <img
          v-show="$colorMode.value == 'light'"
          src="@/assets/icons/light-sun.svg"
          alt=""
        />
        <img
          v-show="$colorMode.value == 'dark'"
          src="@/assets/icons/dark-sun.svg"
          alt=""
        />
        <UiSwitchBtn />
        <img
          v-show="$colorMode.value == 'light'"
          src="@/assets/icons/dark-moon.svg"
          alt=""
        />
        <img
          v-show="$colorMode.value == 'dark'"
          src="@/assets/icons/light-moon.svg"
          alt=""
        />
      </div>
    </header>
    <slot></slot>
    <footer class="bg-[#ECECEC] dark:bg-[#212025] w-full">
      <div class="w-[1163px] m-auto">
        <div class="flex justify-between pt-[45px]">
          <div class="sm:col-span-12 mb-[36px]">
            <div id="intro" class="mb-[45px]">
              <p
                class="text-[16px] text-[#212025] dark:text-[#F7F7F7] font-normal leading-[22.4px] w-[460px]"
              >
                Physical space is often conceived in three linear dimensions,
                although modern physicists usually con
              </p>
            </div>
            <div id="communication" class="mb-[60px]">
              <a class="flex gap-[11px]" href=""
                ><img src="~/assets/icons/telegram.svg" />
                <p
                  class="text-[26.43px] text-[#212025] dark:text-[#F7F7F7] font-medium leading-[37px]"
                >
                  @login
                </p></a
              >
              <a class="flex gap-[11px]" href=""
                ><img src="~/assets/icons/mail.svg" />
                <p
                  class="text-[26.43px] text-[#212025] dark:text-[#F7F7F7] font-medium leading-[37px]"
                >
                  mail@site.ru
                </p></a
              >
            </div>
            <div id="menu" class="flex gap-[5px]">
              <UiMenuItem label="Lorem" color="#E0E0E0" />
              <UiMenuItem label="Ipsum" color="#E0E0E0" />
              <UiMenuItem label="Dolor sit" color="#E0E0E0" />
              <UiMenuItem label="Amet" color="#E0E0E0" />
              <UiMenuItem label="Aenean" color="#E0E0E0" />
            </div>
          </div>
          <div class="sm:col-span-12">
            <UiCustomInput color="#C4C4C4" />
            <UiButton
              class="mt-[79px]"
              color="#212025"
              label="Lorem ipsum sit"
            />
            <div id="socials" class="mt-[72px] flex gap-[25px]">
              <a href=""><img src="~/assets/icons/social-habr.svg" /></a>
              <a href=""><img src="~/assets/icons/social-vc.svg" /></a>
              <a href=""><img src="~/assets/icons/social-link.svg" /></a>
              <a href=""><img src="~/assets/icons/social-face.svg" /></a>
              <a href=""><img src="~/assets/icons/social-x.svg" /></a>
              <a href=""><img src="~/assets/icons/social-you.svg" /></a>
            </div>
          </div>
        </div>
        <div
          class="flex justify-between float py-[21px] border-t-[1px] border-[#E0E0E0]"
        >
          <p
            class="text-[14px] font-normal leading-[19.6px] text-[#808080] dark:text-[#F7F7F7] float-left"
          >
            © 2024 Василий Петров
          </p>
          <p
            class="text-[14px] font-normal leading-[19.6px] text-[#808080] dark:text-[#F7F7F7] float-right"
          >
            Политика конфиденциальности
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
