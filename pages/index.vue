<template>
  <div class="flex flex-col m-auto relative overflow-hidden">
    <!--  -->

    <div class="mt-[136px] w-[1200px] flex flex-row mx-auto">
      <div class="flex flex-col mr-[209px]">
        <div class="relative">
          <img src="~/assets/imgs/avatar.png" alt="" />
          <img
            class="absolute top-[208px] left-[164px] cursor-pointer"
            src="~/assets/icons/play.svg"
            alt=""
          />
        </div>
        <div class="flex flex-row items-center gap-[30px] mt-[78px]">
          <UiLinkBtn label="VC" href="" />
          <UiLinkBtn label="Telegram" href="" />
          <UiLinkBtn label="Habr" href="" />
        </div>
      </div>

      <!-- <TestDarkModeTest /> -->
      <div class="flex flex-col justify-between">
        <div>
          <p class="text-[#8424DE] text-[66px] font-semibold leading-[63px]">
            Lorem lpsum Dolo <br />
            <span class="text-black dark:text-[#F7F7F7]">res amen lorem</span>
          </p>
          <p class="mt-[45px] text-[20px] leading-[21px] dark:text-[#F7F7F7]">
            Alcohol based exposures through inadvertently consuming <br />
            hand sanitizer, have been observed to produc
          </p>
        </div>
        <div>
          <UiButton
            label="Lorem ipsum"
            v-on:click="showMessageModal = !showMessageModal"
          />
        </div>
      </div>

      <div class="absolute right-[-115px] top-[100px] rotate-[-33deg]">
        <AnimationCard color="#ECECEC" class="anim-1" />
      </div>

      <div class="absolute right-[-115px] top-[299px] rotate-[-51deg]">
        <AnimationCard class="anim-2" />
      </div>
    </div>

    <!---->

    <!--  -->

    <div class="flex max-w-[1440px] flex-col mt-[200px] mx-auto">
      <div class="flex flex-row">
        <div class="flex flex-col mr-[300px]">
          <div
            class="bg-[#EAEAEA] dark:bg-[#212025] text-sm text-[#ACACAC] rounded-[50px] px-[20px] py-[10px] cursor-pointer"
          >
            Lorem ipsum dolor
          </div>
        </div>

        <div class="flex flex-col">
          <p
            class="text-[40px] leading-[48px] font-semibold text-black dark:text-[#F7F7F7]"
          >
            Lorem ipsum dolor sit amet lorem <br />
            <span class="text-[#8424DE]"> lorem ipsum dolor sit am</span> lorem
            ipsu <br />
            Lorem ipsum dolor sit amet lorem
          </p>
        </div>
      </div>

      <div class="mt-[75px] flex flex-row gap-[20px]">
        <div>
          <LoremCard
            numText="5 dolor"
            footerText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit
Aenean commodo ligula eget "
          />
        </div>
        <div class="mt-[90px] rotate-[10deg] mr-3">
          <LoremCard type="second" bt="Lorem ipsum dolor" />
        </div>
        <div>
          <LoremCard
            numText="13 sit"
            footerText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
          />
        </div>
        <div class="mt-[100px]">
          <LoremCard
            numText="a 7 adipiscing"
            footerText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
          />
        </div>
      </div>
    </div>

    <!--  -->

    <!--  -->
    <div class="mt-[190px] max-w-[1440px] flex flex-row gap-20 mx-auto">
      <div class="flex flex-col justify-between">
        <div class="flex flex-row">
          <div
            class="bg-[#EAEAEA] dark:bg-[#212025] text-sm text-[#ACACAC] rounded-[50px] px-[20px] py-[10px] cursor-pointer"
          >
            Lorem Ipsum
          </div>
        </div>

        <div class="">
          <img src="~/assets/imgs/c.png" alt="" />
        </div>
      </div>

      <div>
        <p class="text-[40px] text-[#212025] dark:text-[#F7F7F7] font-semibold">
          <span class="text-[#8424DE]"> Lorem ipsum dolor sit am </span>
          consectetuer <br />
          adipiscing elit Aenean commodo
        </p>

        <div class="flex flex-row gap-4 mt-[70px]">
          <UserItem 
            v-on:click="showModal = !showModal"
            @stateImage="setImage"
            imgUrl="lorem-1"
            name="aaa"
          />
          <UserItem
            v-on:click="showModal = !showModal"
            @stateImage="setImage"
            imgUrl="lorem-2"
            name="Ipsum"
          />
          <UserItem
            v-on:click="showModal = !showModal"
            @stateImage="setImage"
            imgUrl="lorem-3"
            name="Sit amet"
          />
          <UserItem
            v-on:click="showModal = !showModal"
            @stateImage="setImage"
            imgUrl="lorem-4"
            name="Consectetuer"
          />
        </div>

        <p
          class="text-[25px] text-[#212025] font-semibold mt-[35px] dark:text-[#F7F7F7]"
        >
          <span class="text-[#8424DE]">Lorem Ipsum</span> Dolores Amen
        </p>

        <div class="flex flex-row gap-14 mt-11 dark:text-[#F7F7F7]">
          <div class="flex flex-col gap-[5px]">
            <p class="text-[25px] font-semibold">20+</p>
            <p class="text-[12px] leading-[16px]">
              Lorem <br />
              Ipsum Dolor
            </p>
          </div>

          <div class="flex flex-col gap-[5px]">
            <p class="text-[25px] font-semibold">50+</p>
            <p class="text-[12px] leading-[16px]">
              Consectetuer <br />
              adipiscing
            </p>
          </div>

          <div class="flex flex-col gap-[5px]">
            <p class="text-[25px] font-semibold">187+ sit</p>
            <p class="text-[12px] leading-[16px]">
              Lorem <br />
              Ipsum Dolor
            </p>
          </div>

          <div class="flex flex-col gap-[5px]">
            <p class="text-[25px] font-semibold">5 amet</p>
            <p class="text-[12px] leading-[16px]">
              Consectetuer <br />
              adipiscing
            </p>
          </div>

          <div class="flex flex-col gap-[5px]">
            <p class="text-[25px] font-semibold">30+</p>
            <p class="text-[12px] leading-[16px]">
              Lorem <br />
              Ipsum Dolor
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-[5px] mt-[45px]">
          <div class="flex flex-row">
            <div
              class="bg-[#EAEAEA] dark:bg-[#212025] dark:text-[#F7F7F7] text-sm text-[#212025] rounded-[50px] px-[20px] py-[10px] cursor-pointer"
            >
              Lorem ipsum dolor sit
            </div>
          </div>

          <div class="flex flex-row">
            <div
              class="bg-[#EAEAEA] dark:bg-[#212025] dark:text-[#F7F7F7] text-sm text-[#212025] rounded-[50px] px-[20px] py-[10px] cursor-pointer"
            >
              Aenean massa socilis
            </div>
          </div>

          <div class="flex flex-row">
            <div
              class="bg-[#EAEAEA] dark:bg-[#212025] dark:text-[#F7F7F7] text-sm text-[#212025] rounded-[50px] px-[20px] py-[10px] cursor-pointer"
            >
              Nascetur ridiculus
            </div>
          </div>
        </div>

        <div class="flex flex-row gap-[5px] mt-[14px]">
          <div class="flex flex-row">
            <div
              class="bg-[#EAEAEA] dark:bg-[#212025] dark:text-[#F7F7F7] text-sm text-[#212025] rounded-[50px] px-[20px] py-[10px] cursor-pointer"
            >
              Donec
            </div>
          </div>

          <div class="flex flex-row">
            <div
              class="bg-[#EAEAEA] dark:bg-[#212025] dark:text-[#F7F7F7] text-sm text-[#212025] rounded-[50px] px-[20px] py-[10px] cursor-pointer"
            >
              Integer tincidunt Cras da
            </div>
          </div>

          <div class="flex flex-row">
            <div
              class="bg-[#EAEAEA] dark:bg-[#212025] dark:text-[#F7F7F7] text-sm text-[#212025] rounded-[50px] px-[20px] py-[10px] cursor-pointer"
            >
              Phasellus viverra
            </div>
          </div>
        </div>

        <div class="mt-[45px]">
          <UiArrowBtn color="#212025" label="Donec vitae sapien ut liber" />
        </div>
      </div>
    </div>
    <!-- <div class="m-auto">
      <EmailSend />
      <Event class="my-[10px]"/>
    </div> -->
    <!--  -->

    <!--  -->
    <div class="mt-[190px] max-w-[1440px] flex flex-col gap-20 mx-auto">
      <div class="grid grid-cols-12 mx-auto">
        <div class="col-span-4">
          <div class="flex flex-row ml-[-205px]">
            <div
              class="bg-[#EAEAEA] dark:bg-[#212025] text-sm text-[#ACACAC] rounded-[50px] px-[20px] py-[10px] cursor-pointer"
            >
              Lorem Ipsum
            </div>
          </div>
        </div>

        <p class="col-span-8 text-[40px] text-[#212025] dark:text-[#F7F7F7] font-semibold">
          Lorem
          <span class="text-[#8424DE]"> ipsum dolor sit amet</span> <br />
          consectetuer
        </p>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-3 ">
        <Publication image="1_pub" platform="VC" />
        <Publication image="2_pub" platform="VC" />
        <Publication image="3_pub" platform="VC" />
        <Publication image="4_pub" platform="you" />
        <Publication image="5_pub" platform="habr" />
        <Publication image="6_pub" platform="habr" />
      </div>

      <div class="flex flex-col items-center">
        <UiButton color="#212025" label="Больше публикаций" />
      </div>
    </div>
    <!--  -->

    <!--  -->

    <div
      class="w-[1200px] bg-[#ECECEC] dark:bg-[#212025] p-[35px] mt-[100px] mx-auto"
    >
      <div class="absolute mt-[-35px] ml-[807px]">
        <img src="~/assets/imgs/filex.png" class="float-right" />
      </div>
      <div class="text-[#212025] dark:text-[#ECECEC]">
        <p class="text-[30px] font-semibold">The More Important</p>
        <p class="text-[16px] mt-[25px]">Physiological respiration involves</p>
      </div>

      <div class="mt-[100px] flex flex-row items-center justify-between">
        <div class="flex flex-row items-center gap-[25px]">
          <div class="w-[267px]">
            <UiBaseInput />
          </div>
          <UiButton label="Подписаться" color="#212025" />
        </div>

        <div class="flex flex-row gap-3">
          <UiSocialBtn />
          <UiSocialBtn imgUrl="vcru-light" />
          <UiSocialBtn imgUrl="habr-light" />
          <UiSocialBtn imgUrl="facebook-light" />
          <UiSocialBtn imgUrl="linkedin-light" />
          <UiSocialBtn imgUrl="twitter-light" />
          <UiSocialBtn imgUrl="youtube-light" />
        </div>
      </div>
    </div>

    <!--  -->

    <!-- -->
    <div class="mt-[190px] w-[1440px] px-[136px] flex flex-col gap-20 mx-auto">
      <div class="flex flex-row gap-[360px]">
        <div class="flex flex-col">
          <div class="flex flex-row">
            <div
              class="bg-[#EAEAEA] dark:bg-[#212025] text-sm text-[#ACACAC] rounded-[50px] px-[20px] py-[10px] cursor-pointer"
            >
              Lorem Ipsum
            </div>
          </div>
        </div>

        <p class="text-[40px] text-[#212025] dark:text-[#ECECEC] font-semibold">
          Lorem
          <span class="text-[#8424DE]"> ipsum dolor sit amet</span> <br />
          consectetuer
        </p>
      </div>
    </div>
    <div class="flex flex-wrap justify-center items-center gap-14 mt-[80px]">
      <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="4.5"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: true,
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
      >
        <SwiperSlide
          ><UserPlay
            imgUrl="user-1"
            @stateReview="showReview"
            @stateVReview="showVReview"
            @stateImage="setImage"
        /></SwiperSlide>
        <SwiperSlide
          ><UserPlay
            imgUrl="user-3"
            @stateReview="showReview"
            @stateVReview="showVReview"
            @stateImage="setImage"
        /></SwiperSlide>
        <SwiperSlide
          ><UserReview
            class="rotate-[5deg] my-3"
            imgUrl="user-4"
            @stateReview="showReview"
            @stateImage="setImage"
        /></SwiperSlide>
        <SwiperSlide
          ><UserPlay
            imgUrl="user-2"
            @stateReview="showReview"
            @stateVReview="showVReview"
            @stateImage="setImage"
        /></SwiperSlide>
        <SwiperSlide
          ><UserReview
            class="rotate-[-5deg] my-3"
            imgUrl="user-5"
            @stateReview="showReview"
            @stateImage="setImage"
        /></SwiperSlide>
      </Swiper>
    </div>

    <!-- -->

    <!-- -->
    <div
      class="mt-[190px] w-[1440px] flex flex-col gap-20 mx-auto bg-[#ECECEC] dark:bg-[#212025]"
    >
      <div class="grid grid-cols-12 mx-auto">
        <div class="col-span-4 flex flex-col mt-[78px] ml-[-250px]">
          <div class="flex flex-row">
            <div
              class="bg-[#E0E0E0] dark:bg-[#212025] text-sm text-[#ACACAC] rounded-[50px] px-[20px] py-[10px] cursor-pointer"
            >
              Lorem Ipsum
            </div>
          </div>
        </div>

        <p
          class="col-span-8 text-[40px] text-[#212025] dark:text-[#ECECEC] font-semibold mt-[69px]"
        >
          Lorem ipsum dolor sit amet<br />
          <span class="text-[#8424DE]"> lorem ipsum dolor sit</span>
        </p>
      </div>

      <div class="flex flex-row mx-auto gap-[83px]">
        <div class="w-[380px] ml-[-120px] xl:ml-[-170px]">
          <div class="flex flex-row">
            <img src="~/assets/imgs/chanel_avatar.png" alt="" />
            <div class="ml-[17px]">
              <p
                class="text-[17px] text-[#212025] dark:text-[#F7F7F7] font-semibold leading[20.4px]"
              >
                Василий Петров
              </p>
              <p
                class="text-[17px] text-[#212025] dark:text-[#F7F7F7] font-semibold leading[20.4px]"
              >
                Канал
              </p>
              <p
                class="text-[16px] text-[#212025] darK:text-[#F7F7F7] font-normal leading[20.8px]"
              >
                12 148 подписчика
              </p>
            </div>
          </div>
          <div class="mt-[70px]">
            <PhoneViewer />
          </div>
        </div>
        <div class="w-[688px] 2xl:mr-[-120px]">
          <UiArrowBtn class="mt-[21px]" label="Lorem ipsum" color="#8424DE" />
          <div class="mt-[98px] flex flex-col gap-[12px]">
            <div class="flex flex-row justify-between">
              <div class="w-[338px]">
                <Message />
              </div>
              <div class="w-[338px]">
                <Message />
              </div>
            </div>
            <Message image="~/assets/imgs/message_image.png" />
            <div class="flex flex-row justify-between mb-[72px]">
              <div class="w-[338px]">
                <Message />
              </div>
              <div class="w-[338px]">
                <Message />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- -->

    <!-- -->
    <div class="mt-[190px] max-w-[1440px] flex flex-col gap-20 mx-auto">
      <div class="grid grid-cols-12">
        <div class="col-span-4 flex flex-col">
          <div class="flex flex-row">
            <div
              class="bg-[#EAEAEA] dark:bg-[#212025] text-sm text-[#ACACAC] rounded-[50px] px-[20px] py-[10px] cursor-pointer"
            >
              Lorem Ipsum
            </div>
          </div>
        </div>

        <p class="col-span-8 text-[40px] text-[#212025] dark:text-[#ECECEC] font-semibold">
          Lorem ipsum dolor
          <span class="text-[#8424DE]">
            lorem ipsum dolor <br />
            sit amet, consectetuer</span
          >
        </p>
      </div>

      <div class="flex flex-col items-center gap-3">
        <Event />
        <Event />
      </div>

      <div class="flex flex-row gap-[240px] items-center 2xl:ml-[25px] mb-[200px]">
        <p class="text-[18px] text-[#8424DE] leading-[18px]">
          Lorem ipsum dolor sit amet,<br />
          consectetuer
        </p>
        <UiButton color="#212025" label="Больше публикаций" />
      </div>
    </div>

    <!-- -->

    <!--Modal Start-->

    <div class="fixed top-0 left-0 z-20" v-show="showModal">
      <div
        class="bg-[#000000C7] w-screen h-screen flex flex-col justify-center items-center"
        v-on:click="showModal = false"
      >
        <div class="flex flex-row items-center gap-[30px] relative">
          <img
            src="~/assets/icons/close.svg"
            class="cursor-pointer absolute -top-[25px] right-[70px]"
            alt=""
            v-on:click.stop
            v-on:click="showModal = false"
          />

          <div
            class="z-40 absolute top-[27px] left-[90px] flex flex-row items-center gap-2"
          >
            <img
              :src="images[image]"
              class="w-[30px] h-[30px]"
              alt=""
            />
            <p class="text-white text-xs">Lorem ipsum</p>
          </div>

          <img
            src="~/assets/icons/play.svg"
            class="cursor-pointer absolute -top-[25px] left-[70px] w-[20px] h-[20px]"
            alt=""
            v-on:click.stop
          />
          <img
            src="~/assets/icons/video-prev.svg"
            class="cursor-pointer"
            alt=""
            v-on:click.stop
          />
          <div
            class="w-[374px] h-[665px] relative rounded-xl overflow-hidden"
            v-on:click.stop
          >
            <client-only>
              <Stories
                :stories="items"
                class="absolute top-0 h-[100%] w-[100%]"
                :storyStart="storyStart"
              >
                <template #pool="{ story }">
                  <pool-story :story="story" class="flex-grow"></pool-story>
                </template>
              </Stories>
            </client-only>
          </div>
          <img
            src="~/assets/icons/video-next.svg"
            class="cursor-pointer"
            alt=""
            v-on:click.stop
          />
        </div>
      </div>
    </div>

    <!--Modal End-->

    <!-- MessageModal Start -->

    <div class="fixed top-0 left-0 z-20" v-show="showMessageModal">
      <div
        class="bg-[#000000C7] w-screen h-screen flex flex-col justify-center items-center"
        v-on:click="showMessageModal = false"
      >
        <NuxtScrollbar tag="aside" @ps-scroll-y="onScroll">
          <LeaveMessage v-on:click.stop />
        </NuxtScrollbar>
      </div>
    </div>

    <!-- MessageModal End -->

    <!-- ReviewModal Start -->

    <div
      class="fixed w-[100vw] h-[100vh] top-0 left-0 z-20"
      v-show="showReviewModal"
    >
      <div
        class="bg-[#000000C7] w-screen h-screen flex flex-col justify-center items-center my-auto mx-auto"
        v-on:click="showReviewModal = false"
      >
        <ViewReview :image="image" v-on:click.stop @stateReview="showReview" />
      </div>
    </div>

    <!-- ReviewModal End -->

    <!-- VReviewModal Start -->

    <div
      class="fixed w-[100vw] h-[100vh] top-0 left-0 z-20"
      v-show="showVReviewModal"
    >
      <div
        class="bg-[#000000C7] w-screen h-screen flex flex-col justify-center items-center my-auto mx-auto"
        v-on:click="showVReviewModal = false"
      >
        <ViewVReview :image="image" v-on:click.stop @stateVReview="showVReview"  />
      </div>
    </div>

    <!-- VReviewModal End -->
  </div>
</template>

<script setup>
import { Stories } from "vue-insta-stories";
import { filename } from "pathe/utils";

const showModal = ref(false);
const showModalNum = ref(1);
const showMessageModal = ref(false);
const showReviewModal = ref(false);
const showVReviewModal = ref(false);
const image = ref();

const showReview = (v) => {
  showReviewModal.value = v;
};

const showVReview = (v) => {
  showVReviewModal.value = v;
};

const setImage = (v) => {
  image.value = v;
}

const items = [
  "https://picsum.photos/350/200/",
  "https://picsum.photos/400/201/",
  "https://picsum.photos/400/202/",
];

const glob = import.meta.glob("~/assets/imgs/*.png", { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
</script>
