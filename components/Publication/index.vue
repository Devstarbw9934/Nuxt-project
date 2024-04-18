<template>
  <div
    class="col-span-6 pub-form-review w-[575px] rounded-[8.62px] bg-[#ECECEC] h-[623px] px-[31px] pb-[34px] pt-[21px]"
  >
    <div class="flex gap-[21px]">
      <div class="w-[461.03px]" id="date">
        <p class="font-normal text-[12px] text-[#808080] leading-[16.8px]">
          29 февраля 2024
        </p>
      </div>
      <div class="w-[30.18px]" id="platform">
        <img :src="platforms[platform]" alt="Platform icon" />
      </div>
    </div>
    <div class="mt-[9.2px]">
      <p class="font-semibold text-[23px] text-[#212025] leading-[32.2px]">
        The More Important the Work, the More Important the Rest
      </p>
      <div id="brief" class="mt-[12.11px]">
        <p class="font-normal text-[14px] text-[#212025] leading-[19.6px]">
          Physiological respiration involves the mechanisms that ensure that the
          composition of the functional
        </p>
      </div>
      <img
        class="rounded-[8.62px] mt-[49.91px] w-[503px] h-[265px]"
        :src="images[image]"
        alt="Publication image"
      />
    </div>
    <div class="flex mt-[50px]">
      <div class="w-[326px]" id="link">
        <UiArrowBtn />
      </div>
      <div class="w-[177.88px] grid grid-cols-12" id="metrics">
        <span class="col-span-3 flex items-center"
          ><img
            width="19.93px"
            height="13.71px"
            src="~/assets/icons/view.svg"
          />
          <p
            class="font-normal text-[#545454] text-[11.54px] leading-[13.97px]"
          >
            12
          </p></span
        >
        <span class="col-span-3 flex items-center"
          ><img
            width="15.92px"
            height="13.38px"
            src="~/assets/icons/like.svg"
          />
          <p
            class="font-normal text-[#545454] text-[11.54px] leading-[13.97px]"
          >
            12
          </p></span
        >
        <span class="col-span-3 flex items-center"
          ><img
            width="14.33px"
            height="11.89px"
            src="~/assets/icons/comment.svg"
          />
          <p
            class="font-normal text-[#545454] text-[11.54px] leading-[13.97px]"
          >
            12
          </p></span
        >
        <span class="col-span-3 flex items-center"
          ><img
            width="12px"
            height="14.68px"
            src="~/assets/icons/favourite.svg"
          />
          <p
            class="font-normal text-[#545454] text-[11.54px] leading-[13.97px]"
          >
            12
          </p></span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { filename } from "pathe/utils";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  brief: {
    type: String,
    default: "",
  },
  platform: {
    type: String,
    default: "",
  },
});
const { title, date, image, brief, platform } = props;

const glob = import.meta.glob("~/assets/imgs/*.png", { eager: true });
const glob1= import.meta.glob("~/assets/icons/*.svg", { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
const platforms = Object.fromEntries(
  Object.entries(glob1).map(([key, value]) => [filename(key), value.default])
);
</script>
